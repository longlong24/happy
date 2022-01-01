var countHeart = document.getElementById('heartNumb');
var heart = document.getElementById('fa-heart');
var audio = document.getElementById('audio');
var source = document.getElementById('source');
var svgContainer = document.getElementById('svg'); 

let check = 10;
heart.addEventListener("click",function(){
    if(check == 22){
        source.src = "./hpbd.mp3";
        svgContainer.style.display = 'block';
        audio.load();
        audio.play();
        animation.play();
        check = 9;
    }
    else{
        if(check == 9){
            svgContainer.style.display = 'none';
            source.src = "./sound.mp3";
            audio.load();
            animation.stop();
        }
        check++;
        countHeart.innerHTML = check;
        audio.load();
        audio.play();
    }
    
});
var animation = bodymovin.loadAnimation({
    container: svgContainer, // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: 'https://assets7.lottiefiles.com/packages/lf20_i6sqnxav.json' // the path to the animation json
  });
