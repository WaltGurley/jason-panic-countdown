var img;
var imgArray = [];
var countdown = false;
var time;
var frame = 0;

function setup() {
  var container = select('.vis-container');

  canvas = createCanvas(container.width, container.height);
  canvas.parent('vis-container');
  img = loadImage("./jasonSnow.png");
  time = select(".time");
  console.log(day());
}

function draw() {
  var hr = (21 * 24 + 12) - day() * 24 - hour();
  var min = 60 - minute() < 10 ? "0" + (60 - minute()) : 60 - minute();
  var sec = 60 - second() < 10 ? "0" + (60 - second()) : 60 - second();
  time.html(
    hr + ":" +
    min + ":" +
    sec
  );
  background(random(255), random(255), random(255), 6);

  if (hr <= 0 && min <= 0 && sec <= 0) {
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
