// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var elementsWithClassName = [];

  
  //we'll start on document.body level
  var documentBody = document.body;
  var bodyClassList = documentBody.classList;


  var findClassName = function(className,element) {
    var classList = Array.prototype.slice.call(element.classList); 

    for (var i = 0; i < classList.length; i++) {
      if (classList[i] === className) {
        elementsWithClassName.push(element);
      }
    }

  //grab all the children nodes
  //iterate through the children nodes and see if children nodes have classname
  //push to array if it has it
  //recursion

    var children = Array.prototype.slice.call(element.children);
    for (var i = 0; i < children.length; i++) {
      findClassName(className,children[i]);
    }
  };
  //element.classlist || element.children()

  //if body level has classname

  findClassName(className,documentBody);
  
//if classname found in element, push it to the result array
  
  return elementsWithClassName; 
  };
