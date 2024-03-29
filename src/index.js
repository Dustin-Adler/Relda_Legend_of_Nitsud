import Game from "./game"
import Sound from "./sound"

addEventListener('DOMContentLoaded', function() { 
    const beforeGame = document.getElementById('game-canvas')
    const ctx = beforeGame.getContext('2d')
    beforeGame.classList.add("begin")
    const game = new Game();
    const sounds = new Sound();
    const tag = document.getElementById("instructions")
    const instructions = document.getElementById('instructions-bg')
    addEventListener("keydown", function(e){
        if( e.code === "Enter" && game.start) {
            instructions.classList.add("hidden")
            beforeGame.classList.remove("begin")
            game.draw()
            game.start = false
        } else if (e.code === "Enter" && !game.onGoingGame ) {
            location.reload()
        }
    });

    setInterval(function() {
        if (game.player.dead) {
            tag.innerText = "PRESS ENTER TO TRY AGAIN"
            instructions.classList.remove("hidden")
            beforeGame.classList.add("end")
        }
        if (game.win) {
            tag.innerText = "YOU WON! THANK YOU FOR PLAYING MY GAME! PRESS ENTER IF YOU'DE LIKE TO PLAY AGAIN."
            instructions.classList.remove("hidden")
            beforeGame.classList.add("win")
        }

    });

    const flipButton = document.getElementsByClassName("flip-button");
    const callingCardContent = document.getElementsByClassName("calling-card-content");
    flipButton.forEach(button => {
        button.addEventListener("click", event => {
            callingCardContent[0].classList.toggle('flip-card');
            callingCardContent[0].classList.contains('flip-card') ? sounds.fanfareSound() : sounds.reverseFanfareSound();
        })
    });
})