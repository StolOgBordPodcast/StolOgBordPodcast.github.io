console.log("This website was made by 2003mi main website is: 2003mi.github.io")
console.log("OWO whats this")
var meme = "hax";

// Set the date we're counting down to
var countDownDate = new Date("Nov 19, 2018 9:15:00").getTime();
//var countDownDate = new Date("Nov 15, 2018 9:15:00").getTime();

// Get todays date and time
var now = new Date().getTime();
// Find the distance between now and the count down date
var distance = countDownDate - now;

if (distance < 0) {
    console.log("YE the time is now")

    var audio = document.getElementById('audio');
    var source = document.getElementById('audioSource');
    source.src = ("resources/music/jeff.wav");
    audio.load(); //call this to just preload the audio without playing
    //audio.play(); //call this to play the song right away

} else {
    console.log("Wlep begining countdown")
    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("duck").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("duck").innerHTML = "";


            //e.preventDefault();

            //var elm = e.target;
            var audio = document.getElementById('audio');

            var source = document.getElementById('audioSource');

            source.src = ("resources/music/jeff.wav");



            audio.load(); //call this to just preload the audio without playing
            //audio.play(); //call this to play the song right away

        }
    }, 1000);
}

function myFunction(elmnt, clr) {
    var audio = document.getElementById('audio');

    var source = document.getElementById('audioSource');
    if (meme == "sans") {
        source.src = ("resources/music/sans.ogg");
        audio.load();
    }

}