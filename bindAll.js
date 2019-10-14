/**
 * Bind instance methods of JavaScript classes to the class itself.
 * Useful for passing methods through React components, etc.
 *
 * @param  {object}    target  Usually `this` in the constructor of a class.
 * @param  {...[array|string]} methods The methods to be bound. Can be a running list of arguments or an array. example: 'methodOne', ['methodTwo', 'methodThree']
 */
export default function(target, ...methods){
  [].concat(...methods).forEach(ele => {
    const fn = target[ele];
    if(fn && typeof(fn) === 'function'){
      target[ele] = fn.bind(target);
    }
  });
}