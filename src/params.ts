export function getId() {
  const params: URLSearchParams = new URLSearchParams(window.location.search);
  const idElement = document.querySelector<HTMLElement>("#id");
  if (idElement !== null) {
    idElement.innerHTML = `id: ${params.get("id")}`;
  }
}
