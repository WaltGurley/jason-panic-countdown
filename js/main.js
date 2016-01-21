var img;
var countdown = false;
var time;
var frame = 0;
var endTime = new Date(2016, 0, 21, 15, 0, 0).getTime();

function setup() {
  var container = select('.vis-container');

  canvas = createCanvas(container.width, container.height);
  canvas.parent('vis-container');
  img = loadImage("./jasonSnow.png");
  time = select(".time");
  console.log(day());
}

function draw() {
  var hr = 0;
  var min = 60 - minute() <= 10 ? "0" + (59 - minute()) : 59 - minute();
  var sec = 60 - second() <= 10 ? "0" + (59 - second()) : 59 - second();
  time.html(
    hr + ":" +
    min + ":" +
    sec
  );
  background(random(255), random(255), random(255), 6);

  if (Date.now() >= endTime) {
    countdown = true;
    time.html("PANIC!!!!");
    time.style("color", "#f00");
    time.style("transform", "rotate(" + -(frame % 360) + "deg)");
  }

  if (countdown) {
    var randSizeFactor = Math.random();
    image(img,
      random(-img.width, width), random(-img.height, height),
      img.width * randSizeFactor, img.width * randSizeFactor
    );
  }

  frame++;
}
