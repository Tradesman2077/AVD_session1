//const density = "Ñ@#W$9876543210?!abc;:+=-,._                    ";
let density = '   .:-i0|ze=+X%';
//const density = '   .:-i|=+HENRY';

let video;
let asciiDiv;
let counter=0;
let fonts = ['Courier', 'Inconsolata Mono', 'Courier New'];


function setup() {
  video = createVideo("unChien.mp4");
  noCanvas();
  //video = createCapture(VIDEO);

  video.size(150, 75);
  
  asciiDiv = createDiv();
  frameRate(24);
}
function switchFont(){
  console.log('switch');
  document.getElementById('content').style.fontFamily = fonts[Math.floor(Math.random()*fonts.length)];
}
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
function switchDensity(){
  if(density == '   .:-i|ze=+X%'){
    density = "Ñ@#W$9876543210?!abc;:+=-,._                    ";
    document.getElementById('content').style.backgroundColor = 'black';
    document.getElementById('content').style.color = 'red';
  }
  else{
    density ='   .:-i|ze=+X%';
    document.getElementById('content').style.backgroundColor = 'black';
    document.getElementById('content').style.color = 'green';
  }
}
function mouseMoved(){
  video.play()
}

function draw() {
  video.size(150, 75);
  video.loadPixels();
  let asciiImage = "";
  document.getElementById('content').style.fontSize = '12pt';
  for (let j = 0; j < video.height; j++) {

    for (let i = 0; i < video.width; i++) {

      let rand = Math.floor(Math.random()*100000);
      if(rand == 2){
        break;
      }
      else if(rand == 8){
        for(let k = 0; k < video.width; k++){
          let size=  randomIntFromInterval(0, 500).toString();
          document.getElementById('content').style.fontSize = size+ "pt";
          asciiImage+="X";
          
        } 
      }
      else if(rand == 100){
        video.size(600, 300);
      }
      const pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;
      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, 0, len));
      const c = density.charAt(charIndex);
      if (c == " ") asciiImage += "&nbsp;";
      else asciiImage += c;
    }
    //add line break
    asciiImage += '<br/>';
  }
  counter++;
  console.log(counter);
  if(counter%50 == 0){
    switchFont();
  }
  if(counter > 100){
    counter = 0;
    switchDensity();
  }
  asciiDiv.html(asciiImage);
}