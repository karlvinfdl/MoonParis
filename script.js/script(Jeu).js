document.addEventListener("keydown", function (event) {
  const key = event.key.toLowerCase();

  const allShoes = document.querySelectorAll(".chaussure");
  console.log(allShoes)

  allShoes.forEach(function (shoe) {
    shoe.classList.remove("visible");
  });

  const shoeToShow = document.getElementById(key);
  console.log(shoeToShow)

  if (shoeToShow) {
    shoeToShow.classList.add("visible");
    document.getElementById("message").textContent = `Tu as appuyé sur "${key.toUpperCase()}"`;
  } else {
    document.getElementById("message").textContent = `Touche inconnue : "${key.toUpperCase()}" (essaie j, b ou v)`;
  }
});

