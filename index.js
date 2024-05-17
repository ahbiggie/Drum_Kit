

document.addEventListener("keydown", function (event){
    console.log(event);
})

function playSound(key) {
    switch (key) {
        case "w":
                    var tom1 = new Audio("./sounds/tom-1.mp3");
                    tom1.play();
                    break;
                case "a":
                var tom2 = new Audio("./sounds/tom-2.mp3");
                    tom2.play();
                    break;
                case "s":
                    var tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    break;
                case "d":
                    var tom4 = new Audio("sounds/tom-4.mp3");
                        tom4.play();
                        break;
                case "k":
                    var snare = new Audio("./sounds/snare.mp3");
                        snare.play();
                        break;
                case "l":
                    var crash = new Audio("./sounds/crash.mp3");
                    crash.play();
                    break;
                case "j":
                    var kick = new Audio("./sounds/kick-bass.mp3");
                    kick.play();
                    break;
                default:
                    console.log(key);
                    break;
    }
}
// add event listener to all drum buttons
var numberOfButtons = document.querySelectorAll(".drum").length;

for (i = 0; i<numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

            var buttonInnerHTML = this.innerHTML;
            playSound(buttonInnerHTML);
        }
    )
}

// ADD EVENT LISTENER FOR KEYPRESS
document.addEventListener("keydown",function(e){
    playSound(e.key);
});
