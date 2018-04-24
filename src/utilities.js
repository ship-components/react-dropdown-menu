/**
 * Generate a hash from a string used for shorter keys
 * @param  {string} str [description]
 * @return {Number}
 */
export function hashCode(str) {
  let hash = 0;
  if (str.length === 0) {
    return hash;
  }
  for (let i = 0, len = str.length; i < len; i++) {
    let chr = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

/**
 * Get the offset to the page for a node
 * @param    {Node}    el
 */
export function getOffset(el, checkIsContainer) {
  // Don't count the element itself
  let source = el.offsetParent;

  let offset = {
    left: 0,
    top: 0,
    bottom: 0,
    right: 0
  }

  // Search up the tree for the component node
  while (source && checkIsContainer(source)) {
    // Add it all up
    offset.left += (source.offsetLeft - source.scrollLeft + source.clientLeft);
    offset.top += (source.offsetTop - source.scrollTop + source.clientTop);
    source = source.offsetParent;
  }

  // Helper values
  offset.right = source ? source.clientWidth - offset.left : void 0;
  offset.bottom = source ? source.clientHeight - offset.top : void 0;

  return offset;
}

/**
 * Get the offset and then adjust relative to the screen
 * @param    {Node}    el
 */
export function getOffsetToScreen(el) {
  let source = el.offsetParent;
  let offset = {
    left: 0,
    top: 0,
    bottom: 0,
    right: 0
  };

  // Search up the tree for the component node
  while (source && source !== document.body) {
    // Add it all up
    offset.left += (source.offsetLeft - source.scrollLeft + source.clientLeft);
    offset.top += (source.offsetTop - source.scrollTop + source.clientTop);

    source = source.offsetParent;
  }

  // Adjust according to scroll of document body
  offset.top -= document.documentElement.scrollTop || document.body.scrollTop;
  offset.left -= document.documentElement.scrollLeft || document.body.scrollLeft;

  // Helper calcs
  offset.bottom = window.innerHeight - offset.top;
  offset.right = window.innerWidth - offset.left;

  return offset;
}
