
newitem=function(){
      ulist= document.querySelector("#list1");
      item=document.createElement("li");
      box = document.createElement("input");
      box.type="checkbox";
      box.onclick=donetask;
      text= document.querySelector("#tbox").value;
      prio = document.querySelector("#priority").value;
      li=document.createTextNode(text);
      item.className=prio;
      //item.style.display="inline";
      item.appendChild(box);
      item.appendChild(li);
      ulist.appendChild(item);
      
    }
    
donetask = function(){
      if (this.checked){
      this.parentNode.classList.add("done");
      }
      else{
            this.parentNode.classList.remove("done");
      }
     
}


