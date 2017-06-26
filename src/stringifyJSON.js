// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  if (typeof obj === 'string') {
    return '"' + obj + '"';

  } else if (Array.isArray(obj)) {
    var results = [];
    obj.forEach(function(element) {
      results.push(stringifyJSON(element));
    });
    return '[' + results.join(',') + ']';
  
  } else if (obj === null) {
    return '' + null;
  
  } else if (typeof obj === 'object') {
    var results = [];
    var objcopy = obj;

    for (var key in objcopy) {
      if (objcopy[key] !== undefined && typeof objcopy[key] !== 'function') {
        var string = stringifyJSON(key) + ':' + stringifyJSON(objcopy[key]);
        results.push(string);
      }
    }
    return '{' + results + '}';
  
  } else {
    return '' + obj;
  }  
};
