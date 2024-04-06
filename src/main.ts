import { setupCounter } from "./counter.ts";
import { getId } from "./params.ts";

const counter = document.querySelector<HTMLButtonElement>("#counter");
if (counter !== null) {
  setupCounter(counter);
}

getId();
