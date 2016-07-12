import {Component} from 'react';

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
 * Adds some utility functions to React.Component
 */
export class UtilityComponent extends Component {
    /**
     * Create a function that can only be called every `threshold`
     * @param  {Function} fn
     * @param  {Number}   threshold    default to 200, or a response ajax request time
     * @param  {Mixed}    ctx          default to this instance
     * @return {Function}
     */
    throttleFn(fn, threshold = 200, ctx = this) {
      if (typeof this.throttleIds !== 'object') {
        this.throttleIds = {};
      }
      let last;
      return function(){
        let now = Date.now();
        let args = arguments;
        if (last && now < last + threshold) {
          clearTimeout(this.throttleIds[fn.name]);
          this.throttleIds[fn.name] = setTimeout(function(){
            last = now;
            fn.apply(ctx, args);
          }, threshold)
        } else {
          last = now;
          fn.apply(ctx, args);
        }
      }.bind(this);
    }

    /**
     * Clean up any straggling functions
     */
    clearThrottleFn() {
      if (typeof this.throttleIds !== 'object') {
        return;
      }
      for(var key in this.throttleIds) {
        if(this.throttleIds.hasOwnProperty(key)) {
          clearTimeout(this.throttleIds[key]);
        }
      }
    }
}
