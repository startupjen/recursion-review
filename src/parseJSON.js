// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here

  //input => '[]', '['one','two']'
  //result ==> [], ['one','two']
  //if the string has '[' && ']' then, it's a array
    //an arrray is separated by commas
  if (json[0] === '[' && json.length > 2) {
    //implement solution for arrays that aren't empty
    // '[' ']'
    // element1, element2
    var results = [];
    var slicedJSON = json.slice(1, json.length - 1);
    var splitJSON = slicedJSON.split(','); 
    for (var i = 0; i < splitJSON.length; i++) {
      results.push(splitJSON[i].slice(1, splitJSON[i].length - 1));
      return results;
    }
  } else if (json[0] === '[') {
    var result = [];
    return result;
  } else if (json[0] === '{') {
    var result = {};
    return result;
  }

  //if the string has '{' && '}' then, it's an object
    //an object, the PROPERTIES are separated by commas
    //the keys and values are separated by :

};
