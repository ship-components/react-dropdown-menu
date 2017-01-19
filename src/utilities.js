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
 * Cal
 * @param    {[type]}    el            [description]
 * @param    {[type]}    parentList    [description]
 */
export function getEdgeOffset(position, el, parentList, options = {}) {
  let offset = {
    x: 0,
    y: 0
  };

  // Get it visible if it scrolls off the top of the screen
  if (position.y < 0) {
    offset.y -= position.y;
  }

  // Keep it visible if it scrolls off the left of the screen
  if (position.x < 0) {
    offset.x -= offset.x;
  }

  // Width, aka we're on the right edge of the screen
  if (el.offsetWidth > position.right) {
    offset.x -= el.offsetWidth;

    // Open the menu to the left of the parent if we have no room
    if (parentList) {
      offset.x -= parentList.offsetWidth;
    }
  }

  // Height - aka we're at the bottom of the screen
  if (el.clientHeight > position.bottom) {
    offset.y += position.bottom - el.clientHeight - (options.scrollbar && typeof options.scrollbar.height === 'number' ? options.scrollbar.height : 0);
  }

  return offset;
}

/**
 * Get the offset to the page for a node
 * @param    {Node}    el
 */
export function getOffset(el) {
  // Don't count the element itself
  let source = el.offsetParent;

  let offset = {
    x: 0,
    y: 0,
    bottom: 0,
    right: 0
  }

  // Search up the tree for the component node
  while (source && source !== document.body) {
    // Add it all up
    offset.x += (source.offsetLeft - source.scrollLeft + source.clientLeft);
    offset.y += (source.offsetTop - source.scrollTop + source.clientTop);

    source = source.offsetParent;
  }

  // Helper values
  if (source) {
    offset.right = source.clientWidth - offset.x;
    offset.bottom = source.clientHeight - offset.y;
  } else {
    offset.right = window.innerWidth - offset.x;
    offset.bottom = window.innerHeight - offset.y;
  }

  return offset;
}

/**
 * Get the offset and then adjust relative to the screen
 * @param    {Node}    el
 */
export function getOffsetToScreen(el) {
  let offset = getOffset(el);

  // Adjust according to scroll of document body
  offset.y -= document.documentElement.scrollTop || document.body.scrollTop;
  offset.x -= document.documentElement.scrollLeft || document.body.scrollLeft;

  // Helper calcs
  offset.bottom = window.innerHeight - offset.y;
  offset.right = window.innerWidth - offset.x;

  return offset;
}
