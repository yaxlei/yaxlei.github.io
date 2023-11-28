/*function lerpColor(color1, color2, ratio) {
    const result = [];
    for (let i = 0; i < 3; i++) {
        result.push(Math.round(color1[i] + ratio * (color2[i] - color1[i])));
    }
    return result;
}

document.addEventListener("scroll", function() {
    const scrollTop = document.documentElement.scrollTop;
    const skyratio = scrollTop / (document.body.scrollHeight - window.innerHeight);

    const nighttime = [1, 5, 28];
    const sunrise = [83, 148, 252];

    const skyColor = lerpColor(nighttime, sunrise, skyratio);

    sky.style.backgroundColor = `rgb(${skyColor[0]}, ${skyColor[1]}, ${skyColor[2]})`;
});*/



//SUN POSITION
/*{
    const sun = document.getElementById("sun");

    const windowHeight = window.innerHeight;

    window.scrollTo({
        top: windowHeight * 0.5 ,
        behavior: "smooth"
    });
}*/



//SPOTIFY LOGO
/*function spotifyLogo() {
    const spotifyLogo = document.getElementById("spotify-logo");
    const windowHeight = window.innerHeight;

    window.scrollTo({
        top: windowHeight * 0.75,
        behavior: "smooth"
    });

    setTimeout(() => {
        spotifyLogo.style.opacity = 1;
    }, 1000); // You can adjust the delay as needed
}*/



