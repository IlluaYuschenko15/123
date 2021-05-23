let elements = document.getElementsByClassName("menu__item");
for(i=0;i<elements.length;i++){
    elements[i].addEventListener('mouseover', showMenu)
    elements[i].addEventListener('mouseout', hideMenu)
}

function showMenu(){
    if(this.children.length>1){
        this.children[1].style.display = 'block';
    }
}

function hideMenu(){
    if(this.children.length>1){
        this.children[1].style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const slider = new ChiefSlider('.slider', {
      loop: true,
      autoplay: true,
      interval: 7000,
    });
});
