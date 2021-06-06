(function(){
    var countDownDate = new Date("Nov 9, 2021 16:00:00").getTime();

    var x = setInterval(function(){

        var now = new Date().getTime();

        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown-day").innerHTML = days;
        document.getElementById("countdown-hrs").innerHTML = hours;
        document.getElementById("countdown-min").innerHTML = minutes;
        document.getElementById("countdown-sec").innerHTML = seconds;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
}());