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
    left: 0,
    top: 0
  };

  // Get it visible if it scrolls off the top of the screen
  if (position.top < 0) {
    offset.top -= position.top;
  }

  // Keep it visible if it scrolls off the left of the screen
  if (position.left < 0) {
    offset.left -= offset.left;
  }

  // Width, aka we're on the right edge of the screen
  if (el.offsetWidth > position.right) {
    offset.left -= el.offsetWidth;

    // Open the menu to the left of the parent if we have no room
    if (parentList) {
      offset.left -= parentList.offsetWidth;
    } else {
      // Move the other other side of the button
      offset.left += el.offsetParent.clientWidth;
    }
  }

  // Height - aka we're at the bottom of the screen
  if (el.clientHeight > position.bottom) {
    offset.top += position.bottom - el.clientHeight - (options.scrollbar && typeof options.scrollbar.height === 'number' ? options.scrollbar.height : 0);
  }

  return offset;
}

/**
 * Get the size of the document
 * @return    {Object}
 */
export function getDocumentSize() {
  const {body, documentElement} = document;
  return {
    width: Math.max(body.offsetWidth, body.scrollWidth, documentElement.clientWidth, documentElement.offsetWidth, documentElement.scrollWidth),
    height: Math.max(body.offsetHeight, body.scrollHeight, documentElement.clientHeight, documentElement.offsetHeight, documentElement.scrollHeight)
  };
}


/**
 * Get total scroll from node
 * @param    {Node}    el
 */
export function getScroll(el) {
  let scroll = {
    top: 0,
    left: 0
  }

  // Don't count the element itself
  let source = el.offsetParent;

  // Search up the tree for the component node
  while (source) {
    // Add it all up
    scroll.top += source.scrollTop;
    scroll.left += source.scrollLeft;
    source = source.offsetParent
  }

  return scroll;
}
/**
 * Get the offset to the page for a node
 * @param    {Node}    el
 */
export function getOffset(el) {
  // Don't count the element itself
  let source = el.offsetParent;

  let offset = {
    left: 0,
    top: 0,
    bottom: 0,
    right: 0
  }

  // Search up the tree for the component node
  while (source) {
    // Add it all up
    offset.left += (source.offsetLeft - source.clientLeft);
    offset.top += (source.offsetTop - source.clientTop);
    source = source.offsetParent;
  }

  const documentSize = getDocumentSize();

  // Helper values
  offset.right = documentSize.width - offset.left;
  offset.bottom = documentSize.height - offset.top;

  return offset;
}

/**
 * Get the offset and then adjust relative to the screen
 * @param    {Node}    el
 */
export function getOffsetToScreen(el) {
  let offset = getOffset(el);

  // Go up the dom tree and add up all the scrolling
  const scroll = getScroll(el);

  // Apply scroll
  offset.left -= scroll.left;
  offset.top -= scroll.top;

  // Helper calcs
  offset.bottom = window.innerHeight - offset.top;
  offset.right = window.innerWidth - offset.left;

  return offset;
}
