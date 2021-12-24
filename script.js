function goAway(event){
    const target = event.target;
    const randomRightPosition = Math.floor(Math.random() * 92);
    const randomTopPosition = Math.floor(Math.random() * 92);

    target.style.right = `${randomRightPosition}%`
    target.style.top = `${randomTopPosition}%`
}




function showResult(event){
    const popUp = document.querySelector("#pop-up");
    const button = document.querySelector(".no")
    const audio = document.querySelector("audio")
    audio.play();
    document.body.style.backgroundImage = "url('https://thuthuatnhanh.com/wp-content/uploads/2020/03/anh-dong-tuyet-roi-dem-noel.gif')"
    popUp.classList.add("show");
    button.classList.add("disappear")
}