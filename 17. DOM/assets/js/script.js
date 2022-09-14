
    var button = document.getElementById('btn_add');

    button.onclick = () =>{
     var div = document.createElement("div");
     var input = document.getElementById("firstInput").value;
     var inputs = document.getElementById("inputs");
     
     inputs.appendChild(div);

     var inpToDoText = document.createElement("h4");

     div.appendChild(inpToDoText);

     var icon =document.createElement("i");
     icon.setAttribute("class", "fa-solid fa-trash-can");

     div.appendChild(icon);
     inpToDoText.innerHTML= input;

     div.setAttribute("class", "todoDiv");
     inputs.setAttribute('class', 'input');
     
     icon.onclick = ()=>{

        if (confirm('Are u sure ? ')) {
           div.remove();
        }
        //  else {
            
        // }
        
     }


}