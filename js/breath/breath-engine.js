let breathPhase = 0;

let breathPhaseStart =
  performance.now();

let breathScale = 1;


// ELEMENTOS

const lightHaze =
  document.getElementById(
    "light-haze"
  );


// COLORES DE LA PELOTA

const breathColors = {

  rest: [
    245,
    245,
    242
  ],

  inhale: [
    175,
    196,
    204
  ],

  exhale: [
    230,
    216,
    201
  ]

};


// MEZCLAR DOS COLORES

function mixColor(
  from,
  to,
  progress
) {

  const color =
    from.map(
      (value, index) =>
        Math.round(
          value +
          (
            to[index] -
            value
          ) *
          progress
        )
    );

  return `rgb(
    ${color[0]},
    ${color[1]},
    ${color[2]}
  )`;

}


// ACTUALIZAR RESPIRACIÓN

function updateBreathing() {

  const phase =
    breathCycle[
      breathPhase
    ];

  const elapsed =
    performance.now() -
    breathPhaseStart;

  const progress =
    Math.min(
      elapsed /
      phase.duration,
      1
    );


  // INHALAR

  if (
    phase.phase ===
    "inhale"
  ) {

    breathScale =
      1 +
      (
        0.8 *
        progress
      );

    ball.style.backgroundColor =
      mixColor(
        breathColors.exhale,
        breathColors.inhale,
        progress
      );

    lightHaze.style.opacity =
      0.35 +
      (
        0.20 *
        progress
      );

  }


  // EXHALAR

  if (
    phase.phase ===
    "exhale"
  ) {

    breathScale =
      1.8 -
      (
        0.8 *
        progress
      );

    ball.style.backgroundColor =
      mixColor(
        breathColors.inhale,
        breathColors.exhale,
        progress
      );

    lightHaze.style.opacity =
      0.55 -
      (
        0.20 *
        progress
      );

  }


  // MANTENER

  if (
    phase.phase ===
    "hold"
  ) {

    breathScale =
      phase.scale;

    if (
      phase.scale > 1
    ) {

      ball.style.backgroundColor =
        `rgb(
          ${breathColors.inhale.join(",")}
        )`;

      lightHaze.style.opacity =
        0.55;

    } else {

      ball.style.backgroundColor =
        `rgb(
          ${breathColors.exhale.join(",")}
        )`;

      lightHaze.style.opacity =
        0.35;

    }

  }


  // TAMAÑO DE LA PELOTA

  ball.style.scale =
    breathScale;


  // CAMBIAR DE FASE

  if (
    progress >= 1
  ) {

    breathPhase =
      (
        breathPhase + 1
      ) %
      breathCycle.length;

    breathPhaseStart =
      performance.now();

  }

}


// REINICIAR RESPIRACIÓN

function resetBreathing() {

  breathPhase = 0;

  breathPhaseStart =
    performance.now();

  breathScale = 1;

  ball.style.scale = 1;

  ball.style.backgroundColor =
    `rgb(
      ${breathColors.exhale.join(",")}
    )`;

  lightHaze.style.opacity =
    0.35;

}

