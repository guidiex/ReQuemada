let breathPhase = 0;
let breathPhaseStart = performance.now();

let breathScale = 1;
const breathColors = {
  rest: [245, 245, 242],
  inhale: [175, 196, 204],
  exhale: [230, 216, 201]
};

function mixColor(from, to, progress) {

  const color = from.map(
    (value, index) =>
      Math.round(
        value +
        (to[index] - value) *
        progress
      )
  );

  return `rgb(
    ${color[0]},
    ${color[1]},
    ${color[2]}
  )`;

}

function updateBreathing() {

  const phase =
    breathCycle[breathPhase];

  const elapsed =
    performance.now() - breathPhaseStart;

  const progress =
    Math.min(
      elapsed / phase.duration,
      1
    );


  // INHALAR
  if (phase.phase === "inhale") {

    breathScale =
      1 + (0.8 * progress);
    ball.style.backgroundColor =
  mixColor(
    breathColors.exhale,
    breathColors.inhale,
    progress
  );
  }


  // EXHALAR
  if (phase.phase === "exhale") {

    breathScale =
      1.8 - (0.8 * progress);
    ball.style.backgroundColor =
  mixColor(
    breathColors.inhale,
    breathColors.exhale,
    progress
  );
  }


  // MANTENER
  if (phase.phase === "hold") {

    breathScale =
      phase.scale;
if (phase.scale > 1) {

  ball.style.backgroundColor =
    `rgb(${breathColors.inhale.join(",")})`;

} else {

  ball.style.backgroundColor =
    `rgb(${breathColors.exhale.join(",")})`;

}
  }


  ball.style.scale =
    breathScale;


  // CAMBIAR DE FASE
  if (progress >= 1) {

    breathPhase =
      (breathPhase + 1) %
      breathCycle.length;

    breathPhaseStart =
      performance.now();

  }

}

function resetBreathing() {

  breathPhase = 0;
  breathPhaseStart = performance.now();
  breathScale = 1;

  ball.style.scale = 1;

}