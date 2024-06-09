function categoriesCounter() {
  const categories = document.querySelectorAll("#categories .item");
  console.log(`Number of categories: ${categories.length}`);

  categories.forEach((element) => {
    if (element.classList.contains("item")) {
      console.log(`Category: ${element.querySelector("h2").textContent}`);
      console.log(`Elements: ${element.querySelectorAll("ul li").length}`);
    }
  });
}
categoriesCounter();
