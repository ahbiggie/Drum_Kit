var numberOfButtons = document.querySelectorAll(".drum").length;

for (i = 0; i<numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", 
        function () {
            alert = "I got clicked";
        }
    )
}