$(document).ready(function () {
    $('#klavir1').click(function () {
        window.open('https://sr.wikipedia.org/wiki/%D0%9A%D0%BB%D0%B0%D0%B2%D0%B8%D1%80');
    });
    var klavirAudio = document.getElementById("klavirZvuk");
    $('#klavir2').mouseover(function () {
        klavirAudio.play();
    });

    $('#violina1').click(function () {
        window.open('https://sr.wikipedia.org/wiki/%D0%92%D0%B8%D0%BE%D0%BB%D0%B8%D0%BD%D0%B0');
    });
    var violinaAudio = document.getElementById("violinaZvuk");
    $('#violina2').mouseover(function () {
        violinaAudio.play();
    });

    $('#kontrabas1').click(function () {
        window.open('https://sr.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BD%D1%82%D1%80%D0%B0%D0%B1%D0%B0%D1%81');
    });
    var kontrabasAudio = document.getElementById("kontrabasZvuk");
    $('#kontrabas2').mouseover(function () {
        kontrabasAudio.play();
    });

    $('#flauta1').click(function () {
        window.open('https://sr.wikipedia.org/wiki/%D0%A4%D0%BB%D0%B0%D1%83%D1%82%D0%B0');
    });
    var flautaAudio = document.getElementById("flautaZvuk");
    $('#flauta2').mouseover(function () {
        flautaAudio.play();
    });

    $('#bubnjevi1').click(function () {
        window.open('https://sr.wikipedia.org/wiki/%D0%91%D1%83%D0%B1%D0%B0%D1%9A');
    });
    var bubnjeviAudio = document.getElementById("bubnjeviZvuk");
    $('#bubnjevi2').mouseover(function () {
        bubnjeviAudio.play();
    });

    $('#gitara1').click(function () {
        window.open('https://sr.wikipedia.org/wiki/%D0%93%D0%B8%D1%82%D0%B0%D1%80%D0%B0');
    });
    var gitaraAudio = document.getElementById("gitaraZvuk");
    $('#gitara2').mouseover(function () {
        gitaraAudio.play();
    });
});