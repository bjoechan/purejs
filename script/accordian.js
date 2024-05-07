function createCategoryDiv(category) {
  /**
   * return: <div class="category">${category}</div>
   */

  let div = document.createElement("div");
  div.classList.add("category");

  let catHeaderDiv = document.createElement("div");
  catHeaderDiv.classList.add("category-header");

  let h2 = document.createElement("h2");
  h2.innerText = category;

  let btn = document.createElement("button");
  btn.innerText = "open";

  btn.addEventListener("click", () => {
    let items = div.querySelectorAll(".item");
    for (let item of items) {
      if (item.classList.contains("hidden")) {
        btn.innerText = "close";
        item.classList.remove("hidden");
      } else {
        btn.innerText = "open";
        item.classList.add("hidden");
      }
    }
  });

  catHeaderDiv.appendChild(h2);
  catHeaderDiv.appendChild(btn);

  div.appendChild(catHeaderDiv);

  return div;
}

function createItemDiv(item) {
  /**
   * return:
   * <div class="item">
   *   <img src="${item.image}" />
   *   <div class="item-info">
   *     <a href="${item.url}">${item.name}</a>
   *     <p>${item.price}</p>
   *   </div>
   * </div>
   */

  let div = document.createElement("div");
  div.classList.add("item");
  div.classList.add("hidden");

  let img = document.createElement("img");
  img.src = item.image;
  img.alt = item.name;
  div.appendChild(img);

  let itemInfo = document.createElement("div");
  itemInfo.classList.add("item-info");

  let aLink = document.createElement("a");
  aLink.href = item.url;
  aLink.innerText = item.name;
  aLink.target = "_blank";
  itemInfo.appendChild(aLink);

  let description = document.createElement("p");
  description.innerText = item.price;
  itemInfo.appendChild(description);

  div.appendChild(itemInfo);

  return div;
}

export function makeWholeList(_data) {
  let div = document.createElement("div");
  div.classList.add("accordian");
  for (let el of _data) {
    let categoryDiv = createCategoryDiv(el.category);
    for (let item of el.items) {
      let itemDiv = createItemDiv(item);
      categoryDiv.appendChild(itemDiv);
    }
    div.appendChild(categoryDiv);
  }

  return div;
}

// document.querySelector("#app").appendChild(makeWholeList(data));
