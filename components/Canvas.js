import { useEffect, useRef, useState } from "react";
import { Settings } from "react-feather";

// ms freq
const SPAWNFREQUENCY = 5000;
let LASTDRAW = 0;
const ELEMENTSEACHFRAME = 80;
const MAXELEMENTS = 80;
const ELEMENTS = [];
let FADINGELEMENTS = [];
const MINRAD = 5;
const MAXRAD = 20;
const MINSPEED = 0.01;
const MAXSPEED = 0.65;
// per second
const MINACCELERATION = 0.05;
// per second
const MAXACCELERATION = 0.1;
const FADEOUTSPEED = 1;
const FADEINSPEED = 2;
const MINALPHA = 0;
const MAXALPHA = 255;
// Based on colors generated using coolors.com
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
  const [showSettings, setShowSettings] = useState(false);
  const [fadeSpeed, setFadeSpeed] = useState(FADEOUTSPEED);
  const [maxAcceleration, setMaxAcceleration] = useState(MAXACCELERATION);
  // useEffect for all canvas updates
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    // Need to align canvas size with window
    const handleResize = (e) => {
      context.canvas.height = canvas.parentElement.offsetHeight;
      context.canvas.width = canvas.parentElement.offsetWidth;
    };
    window.addEventListener("resize", handleResize);
    document.addEventListener("DOMContentLoaded", handleResize, false);
    handleResize();
    // Repeats to handle redraws
    function redrawFn(timestamp) {
      if (LASTDRAW === 0) {
        // Start the visual off with many elements
        const sudden = true;
        createNewElements(canvas, MAXELEMENTS, sudden);
        LASTDRAW = 0.0001;
      } else if (Math.round(timestamp / SPAWNFREQUENCY) > LASTDRAW) {
        // Add new elements every second after the last draw
        createNewElements(canvas);
        LASTDRAW = Math.round(timestamp / SPAWNFREQUENCY);
      }
      // Clear the canvas
      clear(canvas, context);
      // Update old things
      updateElements(canvas, context);
      // Request another animation frame, hoist ID up a scope layer
      animationFrameId = requestAnimationFrame(redrawFn);
    }
    let animationFrameId;
    animationFrameId = requestAnimationFrame(redrawFn);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  //
  useEffect(() => {
    // Generate an orb
    function generateElement(canvas, sudden = false) {
      const w = canvas.width;
      const h = canvas.height;
      const rad = randomPoint(MINRAD, MAXRAD);
      const x = randomPoint(MAXRAD, w - MAXRAD);
      const y = randomPoint(MAXRAD, h - MAXRAD);
      const colorInd = Math.round(randomPoint(0, PALETTE.length));
      const color = PALETTE[colorInd];
      const xSpeed = randomPoint(MINSPEED, MAXSPEED);
      const xDirection = Math.random() > 0.5 / 2 ? -1 : 1;
      const xAcceleration = randomPoint(
        MINACCELERATION / 1000,
        maxAcceleration / 1000
      );
      const ySpeed = randomPoint(MINSPEED, MAXSPEED);
      const yDirection = Math.random() > 0.5 / 2 ? -1 : 1;
      const yAcceleration = randomPoint(
        MINACCELERATION / 1000,
        maxAcceleration / 1000
      );
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
        alpha: sudden ? MAXALPHA : MINALPHA,
      };
    }
  }, [fadeSpeed, maxAcceleration]);

  // Update all the elements on the canvas
  function updateElements(canvas, context) {
    // always update the canvas based on size
    context.canvas.height = canvas.parentElement.offsetHeight;
    context.canvas.width = canvas.parentElement.offsetWidth;
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
    FADINGELEMENTS = FADINGELEMENTS.filter(
      (element) => element.alpha > MINALPHA
    );
  }

  // Create `numElements` many new orbs
  function createNewElements(
    canvas,
    numElements = ELEMENTSEACHFRAME,
    sudden = false
  ) {
    for (let element = 0; element < numElements; element++) {
      const element = generateElement(canvas, sudden);
      ELEMENTS.push(element);
    }
  }

  // Generate an orb
  function generateElement(canvas, sudden = false) {
    const w = canvas.width;
    const h = canvas.height;
    const rad = randomPoint(MINRAD, MAXRAD);
    const x = randomPoint(MAXRAD, w - MAXRAD);
    const y = randomPoint(MAXRAD, h - MAXRAD);
    const colorInd = Math.round(randomPoint(0, PALETTE.length));
    const color = PALETTE[colorInd];
    const xSpeed = randomPoint(MINSPEED, MAXSPEED);
    const xDirection = Math.random() > 0.5 / 2 ? -1 : 1;
    const xAcceleration = randomPoint(
      MINACCELERATION / 1000,
      maxAcceleration / 1000
    );
    const ySpeed = randomPoint(MINSPEED, MAXSPEED);
    const yDirection = Math.random() > 0.5 / 2 ? -1 : 1;
    const yAcceleration = randomPoint(
      MINACCELERATION / 1000,
      maxAcceleration / 1000
    );
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
      alpha: sudden ? MAXALPHA : MINALPHA,
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
      element.alpha = element.alpha - fadeSpeed;
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
    const hex = alpha.toString(16);
    const pad = alpha <= 15 ? "0" : "";
    return pad + hex;
  }

  // Randomly generate a real number between a min and a max
  function randomPoint(min, max) {
    return min + Math.random() * (max - min);
  }

  return (
    <>
      <canvas
        className={`w-full h-full ${className}`}
        id="html-canvas"
        width={1000}
        height={1000}
        ref={canvasRef}
      />
      {/* <div className={`w-full h-0 relative ${className}`}>
        <button
          className="absolute bottom-0 right-0 border m-2 border-black rounded-full shadow-2xl bg-neutral-main w-6 h-6 flex justify-center items-center"
          onClick={() => setShowSettings(!showSettings)}
        >
          <Settings size={16} />
        </button>
        <article
          className={`bottom-9 right-1 border-black border mr-2 rounded-lg bg-neutral-main h-96 w-56 p-4 animate__animated absolute ${
            showSettings ? " animate__fadeIn" : " animate__fadeOut hidden"
          }`}
        >
          <div>
            <label>Fadeout Speed</label>
            <input
              type="number"
              className="w-full px-4 py-3 rounded-full"
              value={fadeSpeed}
              onChange={(e) => setFadeSpeed(e.target.value)}
              min="1"
              max="7"
            />
          </div>
          <div>
            <label>Bubble Acceleration</label>
            <input
              type="number"
              className="w-full px-4 py-3 rounded-full"
              value={maxAcceleration}
              onChange={(e) => setMaxAcceleration(e.target.value)}
              min="1"
              max="10"
            />
          </div>
        </article>
      </div> */}
    </>
  );
}
