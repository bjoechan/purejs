export function header() {
  let data = {
    logoImg: "https://via.placeholder.com/150",
    navItems: [
      {
        text: "Home",
        url: "#",
      },
      {
        text: "About",
        url: "#",
      },
      {
        text: "Contact",
        url: "#",
      },
    ],
  };

  let div = document.createElement("div");
  div.classList.add("header");

  let logoDiv = document.createElement("div");
  logoDiv.classList.add("logoContainer");

  let img = document.createElement("img");
  img.src = "https://via.placeholder.com/150";
  logoDiv.appendChild(img);
  div.appendChild(logoDiv);

  let navDiv = document.createElement("nav");
  navDiv.classList.add("navContainer");

  for (let item of data.navItems) {
    const a = document.createElement("a");
    a.href = item.url;
    a.innerText = item.text;
    navDiv.appendChild(a);
  }

  div.appendChild(navDiv);

  return div;
}
