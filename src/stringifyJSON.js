// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //var stringedJSON;

    if (typeof obj === 'string') {
      return '"' + obj + '"';
    }

 else { return '' + obj;
}

  

  //return '['+//result+']'

  //return stringedJSON;

};
