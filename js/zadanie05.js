var button=document.querySelectorAll("button");

for(i = 0; i < button.length; i++) {
        button[i].addEventListener('click', function() { 
        document.getElementById("container").innerHTML=this.getAttribute("data-text");
    });
}