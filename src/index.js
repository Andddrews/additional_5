module.exports = function check(str, bracketsConfig) {
 bracketsConfig = {'(': ')', '{': '}', '[': ']', '|': '|'};
  
  var arr = str.split('');

  for (i=0; i<=arr.length; i++) {
      var a = -1;
      var b = -1;
      var a = arr.indexOf( "(", 0 );
      var b = arr.indexOf( ")", 0 );
      if (a >= 0 && b>=0) {
        arr.splice (a, 1);
        arr.splice (b, 1);
      } else {
        return false;
      }
      if (a===-1 || b===-1) {
        return true;
      }
  }
var arr = str.split('');
  for (i=0; i<=arr.length; i++) {
    var a = -1;
    var b = -1;
    var a = arr.indexOf( "{", 0 );
    var b = arr.indexOf( "}", 0 );
    if (a >= 0 && b>=0) {
      arr.splice (a, 1);
      arr.splice (b, 1);
    } else {
      return false;
    }
    if (a===-1 || b===-1) {
      return true;
    }
    
  }
  var arr = str.split('');
  for (i=0; i<=arr.length; i++) {
    var a = -1;
    var b = -1;
    var a = arr.indexOf( "[", 0 );
    var b = arr.indexOf( "]", 0 );
    if (a >= 0 && b>=0) {
      arr.splice (a, 1);
      arr.splice (b, 1);
    } else {
      return false;
    }
    if (a===-1 || b===-1) {
      return true;
    }
}

var arr = str.split('');
for (i=0; i<=arr.length; i++) {
  var a = -1;
  var b = -1;
  var a = arr.indexOf( "|", 0 );
  var b = arr.indexOf( "|", 0 );
  if (a >= 0 && b>=0) {
    arr.splice (a, 1);
    arr.splice (b, 1);
  } else {
    return false;
  }
  if (a===-1 || b===-1) {
    return true;
  }
}

}



