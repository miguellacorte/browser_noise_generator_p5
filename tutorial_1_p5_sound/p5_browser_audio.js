let noiseMachine = new p5.Noise("brown");
let filter, startButton, stopButton

function setup() {
  createCanvas(400, 400);
  noiseMachine.amp(1);
  

  filter = new p5.LowPass();
  noiseMachine.disconnect();
  noiseMachine.connect(filter);
  filter.freq(440);
  filter.res(0);

  startButton = createButton("start");
  startButton.mousePressed(() => {
    noiseMachine.start();
  });

  stopButton = createButton("stop");
  stopButton.mousePressed(stopAudioEngine);

  // let people control tuning, volume and resonance

}



function stopAudioEngine() {
    noiseMachine.stop();
  //   add fade in ADSR
  }

function draw() {
  background(200);
}
