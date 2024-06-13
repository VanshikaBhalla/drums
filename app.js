document.querySelectorAll(".drum").forEach((button)=>{
    window.addEventListener("keydown", (e)=>{
        var b = button.innerText;
        if (e.key==b) {
            var a = new Audio(`${b}.mp3`);
            a.play();
        }
        e.preventDefault();
    });
});