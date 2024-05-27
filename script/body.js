export function container(_class = "container") {
  let div = document.createElement("div");
  div.classList.add(_class);
  return div;
}
