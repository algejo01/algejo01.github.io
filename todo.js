newitem=function(){
      ulist= document.querySelector("#list1")
      item=document.createElement("i");
      text= document.querySelector("#tbox").value;
      i=document.createTextNode(text);
      item.appendChild(li);
      ulist.appendChild(item);
      
    }
