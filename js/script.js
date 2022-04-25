// alert("Wait and see all animation \n Double Tap to start the song")

window.addEventListener('dblclick', function() {

    var audio = document.getElementById("Play");
    audio.play();

});

window.addEventListener('click', function() {

    var audio = document.getElementById("Play");
    audio.pause();

});