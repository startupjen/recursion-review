// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var elementsWithClassName = [];
  var documentBody = document.body;

  var findClassName = function(className, element) {
    var classList = Array.prototype.slice.call(element.classList); 

    for (var i = 0; i < classList.length; i++) {
      if (classList[i] === className) {
        elementsWithClassName.push(element);
      }
    }

    var children = Array.prototype.slice.call(element.children);
    for (var i = 0; i < children.length; i++) {
      findClassName(className, children[i]);
    }
  };

  findClassName(className, documentBody);  
  return elementsWithClassName; 
};
