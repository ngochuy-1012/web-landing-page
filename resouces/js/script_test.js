var btn = document.getElementById("btnhopthoai");
btn.addEventListener("click", function(){
    var x = document.getElementById("hopthoai");
    if(x.open == true){
        x.open = false;
    }else{
        x.open = true;
    }
})