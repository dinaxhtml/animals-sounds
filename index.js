//Detects the clicked buttons
document.querySelectorAll(".animal").forEach(letterBtn=>{
    
    letterBtn.addEventListener("click",function() {
        var letter = letterBtn.innerText;

        keysSounds(letter);
        animation(letter);
    });
});

//Detects the pressed keys
document.addEventListener("keydown",(keyPressed)=>{

    keysSounds(keyPressed.key);
    animation(keyPressed.key)
});


//Animation to the targeted key/btn
function animation(key) { //e sh
    var targetedBtn= document.querySelector("."+key[0]); 
    //key[0] is for the 'sh' innerText so it only detect the 's' letter key/btn
    
    targetedBtn.classList.add("pressed");

    setTimeout(function() {
        targetedBtn.classList.remove("pressed");
    }, 100);
    //removes the animation after 0.1s
}

//Creates 'Audio' objects depending on the key/btn that is targeted
function keysSounds(key) {
    switch(key[0]) {
        //key[0] is for the 'sh' innerText so it only detect the 's' letter key/btn
        case "c":
        var cat= new Audio("sounds/cat.mp3");
        cat.play();
        break;

        case "d":
        var dog= new Audio("sounds/dog.mp3");
        dog.play();
        break;

        case "b":
        var bird= new Audio("sounds/bird.mp3");
        bird.play();
        break;

        case "l":
        var lion= new Audio("sounds/lion.mp3");
        lion.play();
        break;

        case "e":
        var elephant= new Audio("sounds/elephant.mp3");
        elephant.play();
        break;

        case "s":
        var sheep= new Audio("sounds/sheep.mp3");
        sheep.play();
        break;

        case "m":
        var monkey= new Audio("sounds/monkey.mp3");
        monkey.play();
        break;
    }
}
