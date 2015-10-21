
newitem=function(){
      ulist= document.querySelector("#list1");
      item=document.createElement("li");
      box = document.createElement("input");
      box.type="checkbox";
      box.onclick=changefunc;
      text= document.querySelector("#tbox").value;
      prio = document.querySelector("#priority").value;
      li=document.createTextNode(text);
      item.className=prio;
      item.style.display="inline";
      item.appendChild(li);
      ulist.appendChild(box);
      ulist.appendChild(item);
      
    }
    
changefunc = function(){
      this.classList.add(Done);
}

