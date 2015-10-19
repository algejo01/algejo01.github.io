newitem=function(){
      ulist= document.querySelector("#list1");
      item=document.createElement("li");
      box = document.createElement("input");
      box.type="checkbox";
      text= document.querySelector("#tbox").value;
      prio = document.querySelector("#priority").value;
      li=document.createTextNode(text);
      item.className="prio";
      item.appendChild(li);
      ulist.appendChild(box);
      ulist.appendChild(item);
      
      
    }
