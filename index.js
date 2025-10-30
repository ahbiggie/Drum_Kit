/*

document.addEventListener("keydown", function (event){
    console.log(event);
})
*/
// Step 1: Define function to play sounds based on key pressed
function makeSound(key) {
    // Step 2: Use switch statement to match key with corresponding sound
    switch (key) {
        case "w":
            // Create and play tom-1 sound
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            // Create and play tom-2 sound
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            // Create and play tom-3 sound
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            // Create and play tom-4 sound
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "k":
            // Create and play snare sound
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "l":
            // Create and play crash sound
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "j":
            // Create and play kick-bass sound
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            // Log any unrecognized key
            console.log(key);
            break;
    }
}

// Step 3: Add click event listeners to all drum buttons
var numberOfButtons = document.querySelectorAll(".drum").length;

// Step 4: Loop through each drum button
for (i = 0; i < numberOfButtons; i++) {
    // Step 5: Add click event listener to each button
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // Step 6: Get the button's inner HTML (the key character)
        var buttonInnerHTML = this.innerHTML;
        // Step 7: Play sound and animate button
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
}

// Step 8: Add keyboard event listener for key presses
document.addEventListener("keydown", function (e) {
    // Step 9: Play sound and animate corresponding button when key is pressed
    makeSound(e.key);
    buttonAnimation(e.key);
});

// Step 10: Define function to animate button press
function buttonAnimation(currentKey) {
    // Step 11: Select the button corresponding to the pressed key
    var activeButton = document.querySelector("." + currentKey);
    // Step 12: Add 'pressed' class to create visual feedback
    activeButton.classList.add("pressed");

    // Step 13: Remove the 'pressed' class after 100ms to complete animation
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}
