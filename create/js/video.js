var active = document.getElementsByClassName("active");

for( var i = 0 ; i < active.length ; i++ ){
    active[i].onmouseenter = function(){
        for( var j = 0 ; j < active.length ; j ++ ){
            active[j].style.background = "#f6f6f6";
            active[j].style.color = "#000";
            active[j].style.borderColor = "#000";
        }
        this.style.background = "red";
        this.style.color = "#fff";
        this.style.borderColor = "red";
    }
    active[i].onmouseleave = function(){
        for( var j = 0 ; j < active.length ; j ++ ){
            active[j].style.background = "#f6f6f6";
            active[j].style.color = "#000";
            active[j].style.borderColor = "#000";
        }

    }
}

