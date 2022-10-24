function makeSound(key){
    
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        default:
            console.log(letterOfHTML);
    }
}

var numOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i=0; i<numOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var letterOfHTML = this.innerHTML;
        makeSound(letterOfHTML);
        buttonAnimation(letterOfHTML);
    });
}

// Add keyboard event listener

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

// make the button animated

function buttonAnimation(key) {
    var selectedButton = document.querySelector("." + key);
    selectedButton.classList.add("pressed");
    setTimeout(function(){
        selectedButton.classList.remove("pressed");
    }, 100)
    
}