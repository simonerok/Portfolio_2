/* import of the animation*/
import { animate } from "https://cdn.skypack.dev/motion";

/* animation 1: blink */
animate("body", { opacity: [0, 1] }, { duration: 5 });

/* animation 2: move object from right to center*/
animate(".header_graphics", { x: [1000, 0] }, { duration: 2 });
