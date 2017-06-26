// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //var stringedJSON;
//result var = []
    //if statement for array
//iterate through the array and apply stringifyJSON to all elements
  
  if (Array.isArray(obj)) {
    var results = [];
    obj.forEach(function(element){
      results.push(stringifyJSON(element));
    });
    //push results to result var
    return '[' + results.join(',') + ']';
  } else if (obj === null) {
    return '' + null
  } else if (typeof obj === 'object') {
    var results = [];
    var objcopy = obj; //create a copy of it so obj is not changed
    // for (var key in objcopy) { //iterate through all keys
    //   objcopy[key] = stringifyJSON(obj[key]); //setting the value of the property to the JSON version
    //   key = stringifyJSON(key); 
    // }


    for (var key in objcopy) {
      if (objcopy[key] === undefined || typeof objcopy[key] === 'function') {
        continue;
      }
      var string = stringifyJSON(key) + ':' + stringifyJSON(objcopy[key]);
      results.push(string);
    }

    /*
    { 'key1':key1, 'key2':key2}
    ["'key1'":'key1', ]
    '["key1":key1]'    
    stringifyJSON(key+objcopy[key])

    '[' + '"key1"' :'key1'', + ']'
    //get the list of all the keys
    //get the list of all the values
    //make string ' 'key':'value' '
    //push that to results

    */

    return '{' + results + '}';
  }


    if (typeof obj === 'string') {
      return '"' + obj + '"';

    } else {
      return '' + obj;
    }
    }

  

  //return '['+//result+']'

  //return stringedJSON;
