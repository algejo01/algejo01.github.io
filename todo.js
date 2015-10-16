newitem=function(){
      ulist= document.querySelector("#list1")
      item=document.createElement("l");
      text= document.querySelector("#tbox").value;
      l=document.createTextNode(text);
      item.appendChild(li);
      box=document.createElement("checkbox");
      ulist.appendChild(box);
      ulist.appendChild(item);
      
    }
