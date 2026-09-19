const audioContext =
  new AudioContext();


function playTone(
  startFrequency,
  endFrequency,
  duration,
  volume
) {

  const osc =
    audioContext.createOscillator();

  const gain =
    audioContext.createGain();

  osc.type = "sine";

  osc.frequency.setValueAtTime(
    startFrequency,
    audioContext.currentTime
  );

  osc.frequency.exponentialRampToValueAtTime(
    endFrequency,
    audioContext.currentTime + duration
  );

  gain.gain.setValueAtTime(
    volume,
    audioContext.currentTime
  );

  gain.gain.exponentialRampToValueAtTime(
    0.001,
    audioContext.currentTime + duration
  );

  osc.connect(gain);
  gain.connect(audioContext.destination);

  osc.start();

  osc.stop(
    audioContext.currentTime + duration
  );

}


function playPaddleSound() {

  playTone(
    180,
    110,
    0.12,
    0.18
  );

}


function playWallSound() {

  playTone(
    320,
    220,
    0.07,
    0.10
  );

}