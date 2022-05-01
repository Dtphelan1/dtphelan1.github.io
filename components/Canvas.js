import { useEffect, useRef } from "react";

let LASTDRAW = 0;
const ELEMENTSEACHFRAME = 20;
const MAXELEMENTS = 60;
const ELEMENTS = [];
let FADINGELEMENTS = [];
const MINRAD = 10;
const MAXRAD = 40;
const MINSPEED = 0.1;
const MAXSPEED = 1.25;
const MINACCELERATION = 0.0001;
const MAXACCELERATION = 0.00075;
const FADESPEED = 1;
const FADEINSPEED = 5;
// Really don't know why I need this, but the colors flicker without it
const MINALPHA = 20;
const MAXALPHA = 255;
const PALETTE = [
  "#582f0e",
  "#7f4f24",
  "#936639",
  "#a68a64",
  "#b6ad90",
  "#c2c5aa",
  "#a4ac86",
  "#656d4a",
  "#414833",
  "#333d29",
];

export default function Canvas({ className }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    // Repeats to handle redraws
    function onRepeat(timestamp) {
      if (LASTDRAW === 0) {
        // Start the visual off with many elements
        createNewElements(canvas, MAXELEMENTS);
        LASTDRAW = 0.0001;
      } else if (Math.round(timestamp / 1000) > LASTDRAW) {
        // Add new elements every second after the last draw
        createNewElements(canvas);
        LASTDRAW = Math.round(timestamp / 1000);
      }
      // Clear the canvas
      clear(canvas, context);
      // Update old things
      updateElements(canvas, context);
      // Request another animation frame, hoist ID up a scope layer
      animationFrameId = requestAnimationFrame(onRepeat);
    }
    let animationFrameId;
    animationFrameId = requestAnimationFrame(onRepeat);

    // Need to align canvas size with window
    const handleResize = (e) => {
      context.canvas.height = window.innerHeight;
      context.canvas.width = window.innerWidth;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      id="html-canvas"
      ref={canvasRef}
      width="1200px"
      height="1200px"
      className={`w-full h-full ${className}`}
    />
  );
}

// Update all the elements on the canvas
function updateElements(canvas, context) {
  const w = canvas.width;
  const h = canvas.height;
  if (ELEMENTS.length > MAXELEMENTS) {
    // Remove elements if we're over max
    FADINGELEMENTS = [
      ...FADINGELEMENTS,
      ...ELEMENTS.splice(0, ELEMENTSEACHFRAME),
    ];
  }
  // Draw updated versions of all main elements
  ELEMENTS.forEach((element) => {
    drawAndUpdateElement(context, element, w, h);
  });
  // Draw fading elements, incrementally bumping their alphas
  FADINGELEMENTS.forEach((element) => {
    const fading = true;
    drawAndUpdateElement(context, element, w, h, fading);
  });
  // Totally remove any fading elements below our minimum alpha value
  FADINGELEMENTS = FADINGELEMENTS.filter((element) => element.alpha > MINALPHA);
}

// Create `numElements` many new orbs
function createNewElements(canvas, numElements = ELEMENTSEACHFRAME) {
  for (let element = 0; element < numElements; element++) {
    const element = generateElement(canvas);
    ELEMENTS.push(element);
  }
}

// Generate an orb
function generateElement(canvas) {
  const w = canvas.width;
  const h = canvas.height;
  const rad = randomPoint(MINRAD, MAXRAD);
  const x = randomPoint(MAXRAD, w - MAXRAD);
  const y = randomPoint(MAXRAD, h - MAXRAD);
  const colorInd = Math.round(randomPoint(0, PALETTE.length));
  const color = PALETTE[colorInd];
  const xSpeed = randomPoint(MINSPEED, MAXSPEED);
  const xDirection = Math.random() > 0.5 / 2 ? -1 : 1;
  const xAcceleration = randomPoint(MINACCELERATION, MAXACCELERATION);
  const ySpeed = randomPoint(MINSPEED, MAXSPEED);
  const yDirection = Math.random() > 0.5 / 2 ? -1 : 1;
  const yAcceleration = randomPoint(MINACCELERATION, MAXACCELERATION);
  return {
    rad,
    x,
    y,
    color,
    xSpeed,
    xDirection,
    xAcceleration,
    ySpeed,
    yDirection,
    yAcceleration,
    alpha: MINALPHA,
  };
}

// Draw a given orb, updating any dynamic values (position, velocity, alpha value)
function drawAndUpdateElement(context, element, w, h, disappear = false) {
  const {
    rad,
    x,
    y,
    color,
    xSpeed,
    xDirection,
    xAcceleration,
    ySpeed,
    yDirection,
    yAcceleration,
    alpha,
  } = element;
  // update position based on speed
  element.x = x + xSpeed * xDirection;
  element.y = y + ySpeed * yDirection;
  // update speed based on acceleration
  element.xSpeed = xSpeed + xSpeed * xAcceleration;
  element.ySpeed = ySpeed + ySpeed * yAcceleration;
  // update alpha if disappear
  if (disappear) {
    element.alpha = element.alpha - FADESPEED;
  } else if (element.alpha < MAXALPHA) {
    element.alpha = Math.min(element.alpha + FADEINSPEED, MAXALPHA);
  }
  // bounce off walls if needed
  if (element.x + rad > w) {
    element.xDirection *= -1;
  }
  if (element.x - rad < 0) {
    element.xDirection *= -1;
  }
  if (element.y + rad > h) {
    element.yDirection *= -1;
  }
  if (element.y - rad < 0) {
    element.yDirection *= -1;
  }
  // draw the element based on original values
  context.beginPath();
  context.fillStyle = `${color}${alphaToHex(alpha)}`;
  context.arc(x, y, rad, 0, 2 * Math.PI);
  context.fill();
}

// Clear the canvas with the bg color
function clear(canvas, context) {
  context.fillStyle = "#F3EDE1";
  context.fillRect(0, 0, canvas.width, canvas.height);
}

// Convert alpha to hex
function alphaToHex(alpha) {
  return alpha.toString(16);
}

// Randomly generate a real number between a min and a max
function randomPoint(min, max) {
  return min + Math.random() * (max - min);
}
