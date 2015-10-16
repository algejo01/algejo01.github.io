newitem=function(){
      ulist= document.querySelector("#list1")
      item=document.createElement("li");
      text= document.querySelector("#tbox").value;
      li=document.createTextNode(text);
      item.appendChild(text);
      ulist.appendChild(item);
    }
