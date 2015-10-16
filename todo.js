newitem=function(){
      ulist= document.querySelector("#list1")
      item=document.createElement("li");
      text= document.querySelector("#tbox").value;
      box = document.querySelector("cbox").type;
      li=document.createTextNode(text);
      item.appendChild(li);
      ulist.appendChild(box);
      ulist.appendChild(item);
      
      
    }
