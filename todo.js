var list = document.getElementsByTagName("LI");
var i;
for (i = 0; i < list.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("DELETE");
  span.className = "DELETE";
  span.appendChild(txt);
  list[i].appendChild(span);
}

var list1 = document.getElementsByTagName("LI");
var i;
for (i = 0; i < list1.length; i++) {
  var span1 = document.createElement("SPAN1");
  var txt1 = document.createTextNode("EDIT");
  span1.className = "EDIT";
  list1.contentEditable="true";
  span1.appendChild(txt1);
  list1[i].appendChild(span1);
}


var DELETE = document.getElementsByClassName("DELETE");
var i;
for (i = 0; i < DELETE.length; i++) {
  DELETE[i].onclick = function() {
  var div = this.parentElement;
  div.style.display = "none";
  }
}

var EDIT = document.getElementsByClassName("EDIT");
var i;
for (i = 0; i < EDIT.length; i++) {
  EDIT[i].onclick = function() {
  var ed=this.parentElement.getAttribute("id")
  document.getElementById("EDIT").value=ed;
  
  }
}




function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
   li.appendChild(t);

    document.getElementById("myUL").appendChild(li);
  
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("DELETE");
  span.className = "DELETE";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < DELETE.length; i++) {
    DELETE[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
  }
  var span1 = document.createElement("SPAN1");
  var txt1 = document.createTextNode("EDIT");
  span1.className = "EDIT";
  span1.appendChild(txt1);
  li.appendChild(span1);

  for (i = 0; i < EDIT.length; i++) {
    EDIT[i].onclick = function() {
      var ed=document.getElementsByClassName("EDIT");
      ed.contentEditable="true";
    }
  }
  
  
  
  
  
  
}
function removeAll(){
  var lst = document.getElementsByTagName("ul");
    lst[0].innerHTML = "";
}

