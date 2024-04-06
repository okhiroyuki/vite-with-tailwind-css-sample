import axios from "axios";

export function setupCounter(element: HTMLButtonElement) {
	let counter = 0;
	const setCounter = (count: number) => {
		counter = count;
		element.innerHTML = `count is ${counter}`;
		axios
			.get("https://umayadia-apisample.azurewebsites.net/api/management")
			.then((response) => {
				console.log(response.data);
			});
	};
	element.addEventListener("click", () => setCounter(counter + 1));
	setCounter(0);
}
