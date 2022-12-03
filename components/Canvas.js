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
  const [hideGraphic, setHideGraphic] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [fadeSpeed, setFadeSpeed] = useState(FADEOUTSPEED);
  const [redrawFrequency, setRedrawFrequency] = useState(SPAWNFREQUENCY);
  const [maxAcceleration, setMaxAcceleration] = useState(MAXACCELERATION);

  useEffect(() => {
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
        const element = {
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
        ELEMENTS.push(element);
      }
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
        // Fade in at double the typical speed
        element.alpha = Math.min(element.alpha + fadeSpeed * 2, MAXALPHA);
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
        LASTDRAW = timestamp;
      } else if (Math.round(timestamp - LASTDRAW) > redrawFrequency) {
        // Add new elements every second after the last draw
        createNewElements(canvas);
        LASTDRAW = timestamp;
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
  }, [redrawFrequency, fadeSpeed, maxAcceleration, hideGraphic]);

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
        className={`w-full h-full ${className} ${hideGraphic && "hidden"}`}
        id="html-canvas"
        width={1000}
        height={1000}
        ref={canvasRef}
      />
      <div
        className={`w-full h-0 relative ${className} ${
          hideGraphic && "!h-full"
        }`}
      >
        <button
          className={`absolute bottom-0 right-0 border m-2 border-black rounded-full shadow-2xl bg-neutral-main w-8 h-8 flex justify-center items-center ${className}`}
          onClick={() => setShowSettings(!showSettings)}
        >
          <Settings size={20} />
        </button>
        <article
          className={`absolute bottom-9 right-[-12.5rem] border-black border mr-2 rounded-lg bg-neutral-main h-96 w-56 overflow-auto p-4 animate__animated ${
            showSettings ? " animate__fadeIn" : " animate__fadeOut hidden"
          }`}
        >
          <div className="pt-0">
            <label htmlFor="maxAcceleration">
              Acceleration <span className="text-xs">(px/sec/sec)</span>
            </label>
            <input
              type="number"
              id="maxAcceleration"
              className="w-full px-4 py-3 rounded-full"
              value={maxAcceleration}
              onChange={(e) => setMaxAcceleration(e.target.value)}
              min="0.1"
              max="10"
              step="0.1"
            />
          </div>
          <div className="pt-2">
            <label htmlFor="redrawFrequency">
              Redraw <span className="text-xs">(in ms)</span>
            </label>
            <input
              type="number"
              id="redrawFrequency"
              className="w-full px-4 py-3 rounded-full"
              value={redrawFrequency}
              onChange={(e) => setRedrawFrequency(e.target.value)}
              min="1000"
              max="10000"
              step="1000"
            />
          </div>
          <div className="pt-2">
            <label htmlFor="fadeSpeed">
              Fade <span className="text-xs">(⍺ per sec)</span>
            </label>
            <input
              type="number"
              id="fadeSpeed"
              className="w-full px-4 py-3 rounded-full"
              value={fadeSpeed}
              onChange={(e) => setFadeSpeed(Number(e.target.value))}
              min="1"
              max="8"
              step="1"
            />
          </div>
          <div className="pt-2">
            <label htmlFor="hideGraphic" className="mr-2">
              Hide graphic
            </label>
            <input
              type="checkbox"
              id="hideGraphic"
              // className="w-full px-4 py-3 rounded-full"
              checked={hideGraphic}
              onChange={(e) => {
                setHideGraphic(!hideGraphic);
              }}
            />
          </div>
        </article>
      </div>
    </>
  );
}
