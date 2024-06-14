document.querySelectorAll(".drum").forEach((button)=>{
    window.addEventListener("keydown", (e)=>{    // for key press
        var b = button.innerText;
        if (e.key==b) {
            var a = new Audio(`${b}.mp3`);
            a.play();
            button.classList.add("flash");
            setTimeout(()=>{
                button.classList.remove("flash");
            },0.5);
        }
        e.preventDefault();
    });
    button.addEventListener("click", ()=>{    // for mouse click
        button.classList.add("flash");
        var a = new Audio(`${button.innerText}.mp3`);
        a.play();
        setTimeout(()=>{
            button.classList.remove("flash");
        },0.5);
    });
});
