window.onload = function() {
    'use strict';

    var deadline = new Date(2018, 8, 20);

    var timer = setInterval(() => {
        var timeLeft = deadline - new Date();

        if (timeLeft <= 0) {
            clearInterval(timer);
            console.log("you are after deadline");
            document.getElementById("days").innerHTML = "00";
            document.getElementById("hours").innerHTML = "00";
            document.getElementById("minutes").innerHTML = "00";
            document.getElementById("seconds").innerHTML = "00";
        }

        else {
            var daysLeft = Math.floor( timeLeft / (24*60*60*1000) );
            document.getElementById("days").innerHTML = daysLeft < 10 ? "0" + daysLeft : daysLeft;

            var hoursLeft = Math.floor( ( timeLeft % (24*60*60*1000) ) / (60*60*1000) );
            document.getElementById("hours").innerHTML = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;

            var minutesLeft = Math.floor( ( timeLeft % (24*60*60*1000) / (60*1000) % 60) );
            document.getElementById("minutes").innerHTML = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;

            var secondsLeft = Math.floor( ( ( timeLeft % (24*60*60*1000) ) / 1000 ) % 60 % 60 );
            document.getElementById("seconds").innerHTML = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
        }
    }, 1000);

    var sliderData = {
        minValue: 0,
        maxValue: 56,
        curentValue: 12.83,
    }

    var currentSliderValuePercent = sliderData.curentValue / (sliderData.maxValue - sliderData.minValue) * 100;

    document.getElementById("slider-value").innerHTML = sliderData.curentValue + " min";
    document.getElementById("min-value").innerHTML = sliderData.minValue;
    document.getElementById("mid-value").innerHTML = ( sliderData.maxValue + sliderData.minValue ) / 2 + " min";
    document.getElementById("max-value").innerHTML = sliderData.maxValue + " min";
    document.getElementById("icon-slider").style = `left: calc(${currentSliderValuePercent}% - 16px)`;
    document.getElementById("scale-active").style = `width: ${currentSliderValuePercent}%`;

};