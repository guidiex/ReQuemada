let breathPhase = 0;

let breathPhaseStart =
  performance.now();

let breathScale = 1;


// ELEMENTOS

const lightHaze =
  document.getElementById(
    "light-haze"
  );








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

      

      lightHaze.style.opacity =
        0.55;

    } else {

      
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

 
  lightHaze.style.opacity =
    0.35;

}

