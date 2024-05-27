export function callToAction(_data) {
  let div = document.createElement("div");
  div.classList.add("callToAction");

  for (let item of _data) {
    let itemDiv = document.createElement("div");
    itemDiv.classList.add("cta-item");

    let textDiv = document.createElement("div");
    textDiv.classList.add("cta-text");

    let h3 = document.createElement("h3");
    h3.innerText = item.title;

    let p = document.createElement("p");
    p.innerText = item.description;

    let img = document.createElement("img");
    img.src = item.image;
    img.alt = item.title;

    itemDiv.appendChild(img);
    textDiv.appendChild(h3);
    textDiv.appendChild(p);
    itemDiv.appendChild(textDiv);

    div.appendChild(itemDiv);

    itemDiv.addEventListener("click", () => {
      window.location.href = item.url;
    });
  }

  return div;
}
