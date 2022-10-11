let noiseMachine = new p5.Noise();
let filter, startButton, stopButton, chooseNoise, setVolume, setTuning;

function setup() {
  createCanvas(400, 400);

  filter = new p5.LowPass();
  noiseMachine.disconnect();
  noiseMachine.connect(filter);

  filter.res(0);

  chooseNoise = createSelect();
  chooseNoise.option("brown");
  chooseNoise.option("white");
  chooseNoise.option("pink");

  chooseNoise.changed(() => {
    noiseMachine.setType(chooseNoise.value());
  });

  setVolume = createSlider(0, 2, 1, 0);
  setTuning = createSlider(220, 1760, 440, 0);

  setVolume.changed(() => {
    noiseMachine.amp(setVolume.value());
  });

  setTuning.changed(() => {
    filter.freq(setTuning.value());
  });

  startButton = createButton("start").mousePressed(() => {
    noiseMachine.start();
  });

  stopButton = createButton("stop").mousePressed(() => {
    noiseMachine.stop();
  });
}

function draw() {
  background(200);
}
