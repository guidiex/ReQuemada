# ReQuemada

**Bajá un cambio.**

ReQuemada es un pequeño juego web pensado como una pausa breve durante el día.

La mecánica parte de una idea simple: mantener una pelota en movimiento utilizando una barra horizontal mientras el entorno acompaña un ritmo de respiración.

El objetivo no es competir ni permanecer jugando indefinidamente.

**Entrar → jugar un momento → bajar un cambio → respirar → seguir con el día.**

## Estado del proyecto

🟢 En desarrollo

Primera versión jugable:

`v0.1-playable`

Demo:

https://guidiex.github.io/ReQuemada/

## FLOW 24/24

Una sesión tiene un objetivo deliberadamente corto:

**24 contactos con la barra.**

La interfaz lo representa como:

`FLOW 0/24 → FLOW 24/24`

Al alcanzar `24/24` la partida termina.

No se habilita un nivel más difícil ni una nueva recompensa. El objetivo cumplido habilita la salida.

La secuencia actual es:

`START → juego → respiración → FLOW 24/24 → fade → RESPIRÁ HONDO Y A SEGUIR`

## Controles

### Mouse

Mover el mouse horizontalmente dentro del área de juego.

### Pantalla táctil

Deslizar el dedo horizontalmente.

### Teclado

- `A` — mover a la izquierda
- `D` — mover a la derecha
- `←` — mover a la izquierda
- `→` — mover a la derecha
- `Enter` — START / continuar

## Mecánica actual

- Una pelota
- Una barra
- Una sola vida
- FLOW máximo de 24
- Final deliberado de sesión
- Reinicio al perder
- Control por mouse
- Control táctil
- Control por teclado
- Sonidos generados por Web Audio
- Respiración visual
- Cielo dinámico
- Nubes en movimiento
- Transición visual al completar FLOW
- Pantalla final

## Respiración

ReQuemada incorpora un prototipo de respiración sincronizado con elementos visuales.

El ciclo actual utiliza cuatro fases:

- inhalar
- sostener
- exhalar
- sostener

La pelota y la atmósfera acompañan visualmente ese ritmo.

La respiración no funciona como puntuación ni como requisito para ganar: forma parte del ambiente de la sesión.

## Filosofía

ReQuemada está diseñada como una **micro pausa**, no como un sistema de retención.

Por eso evita deliberadamente:

- vidas infinitas
- monedas
- rankings
- rachas
- recompensas compulsivas
- niveles interminables
- mecánicas destinadas a prolongar artificialmente la sesión

La lógica es simple:

**24 contactos permiten terminar, no seguir jugando más.**

## Arquitectura

El proyecto utiliza HTML, CSS y JavaScript sin frameworks.

La lógica está dividida en archivos pequeños para que cada componente tenga una responsabilidad clara.

```text
MiPrimerGame/
│
├── assets/
│   └── backgrounds/
│       ├── banner.jpg
│       ├── banner.png
│       ├── clouds.png
│       ├── clouds-sky.png
│       ├── clouds-back.png
│       ├── clouds-front.png
│       ├── sky-cycle.png
│       └── fin.png
│
├── css/
│   ├── base.css
│   ├── game.css
│   └── ui.css
│
├── js/
│   ├── audio/
│   │   └── audio.js
│   │
│   ├── breath/
│   │   ├── breath.js
│   │   └── breath-engine.js
│   │
│   ├── game/
│   │   ├── ball.js
│   │   ├── collisions.js
│   │   ├── loop.js
│   │   ├── paddle.js
│   │   └── state.js
│   │
│   ├── input/
│   │   ├── keyboard.js
│   │   ├── mouse.js
│   │   └── touch.js
│   │
│   ├── ui/
│   │   └── score.js
│   │
│   ├── config.js
│   └── main.js
│
├── index.html
└── README.md
```

## Principio de desarrollo

El proyecto prioriza una arquitectura modular y fácil de modificar.

En lugar de concentrar toda la lógica en un único archivo grande, cada sistema tiene su propio módulo:

- `game/` — mecánica del juego
- `input/` — controles
- `breath/` — respiración
- `audio/` — sonido
- `ui/` — interfaz

Esto permite experimentar sin modificar innecesariamente otras partes del juego.

## Próximos pasos

- mejorar el motor de respiración
- ajustar el movimiento atmosférico
- revisar comportamiento responsive
- modo Día / Noche
- probar sesiones completas en móvil
- optimizar detalles de audio
- desarrollar **Modo Solo Cielo**

### Modo Solo Cielo

Concepto para una versión futura:

ocultar pelota, barra, FLOW y START y dejar únicamente el cielo, las nubes, la luz y la respiración visual.

Sin objetivo.

Sin contador.

Sin recompensa.

Solo una pausa visual.

---

**ReQuemada**

*Bajá un cambio. Respirá hondo y a seguir.*