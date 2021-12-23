function goAway(event){
    const target = event.target;
    const randomRightPosition = Math.floor(Math.random() * 92);
    const randomTopPosition = Math.floor(Math.random() * 92);

    target.style.right = `${randomRightPosition}%`
    target.style.top = `${randomTopPosition}%`
}




function showResult(){
    const popUp = document.querySelector("#pop-up");
    popUp.classList.add("show");

    const button = document.querySelector(".no")

    button.classList.add("disappear")
}