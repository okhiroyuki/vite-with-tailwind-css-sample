import { setupCounter } from "./counter.ts";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
