var element = document.getElementsByClassName('menu-item');
for(var i = 0; i < element.length; i++){
    element[i].addEventListener('mouseenter', shovSub, false)
    element[i].addEventListener('mouseleave', hideSub, false)
}

function shovSub(){
    if(this.children.length > 1) {
        this.children[1].style.height = "auto";
        this.children[1].style.opacity = "1";
        this.children[1].style.height = "visible";
    }
    else{
        return false;

    }
}

function hideSub(){
    if(this.children.length > 1) {
        this.children[1].style.height = "0";
        this.children[1].style.opacity = "0";
        this.children[1].style.height = "hidden";
    }
    else{
        return false;

    }
}



//===================menu btn

const menubtn = document.querySelector(".menu-btn");

menubtn.addEventListener("click", () => {
    menubtn.classList.toggle("active")
})


//===================menu btn


