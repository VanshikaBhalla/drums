document.querySelectorAll(".drum").forEach((button)=>{
    window.addEventListener("keydown", (e)=>{    // check for keyboard press
        var b = button.innerText;
        if (e.key==b) {
            var a = new Audio(`${b}.mp3`);
            a.play();
        }
        e.preventDefault();
    });
    button.addEventListener("click", ()=>{    // check for button click
        var a = new Audio(`${button.innerText}.mp3`);
        a.play();
    });
});
