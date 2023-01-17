const beers = {
  id: "beers",
  logo: "Best Beers",
  button: "details",
  cards: [
    {
      title: "Mango Bay",
      sub: "Mad Scientist Beer",
      text: "Pale Ale - American",
    },
    {
      title: "Távoli Galaxis",
      sub: "Rothbeer Brewery",
      text: "IPA - American",
    },
    {
      title: "Flying Rabbit AIPA",
      sub: "MONYO Brewing Co.",
      text: "IPA - American",
    },
    {
      title: "Liquid Cocaine",
      sub: "Mad Scientist Beer",
      text: "IPA - Imperial",
    },
    {
      title: "Organic Chocolate Stout",
      sub: "Samuel Smith Old Brewery",
      text: "Stout - English",
    },
    {
      title: "Bracia",
      sub: "Thornbridge Brewery",
      text: "Strong Ale - English",
    },
    {
      title: "Oatmeal Stout",
      sub: "Samuel Smith Old Brewery",
      text: "Stout - Oatmeal",
    },
    {
      title: "Black Tokyo Horizon",
      sub: "BrewDog",
      text: "Stout - American Imperial",
    },
    {
      title: "Vintage Ale",
      sub: "Fuller's",
      text: "Old Ale",
    },
    {
      title: "All the Leaves are Brown",
      sub: "Tempest Brewing Company",
      text: "Brown Ale - American",
    },
  ],
};

const beerComp = function (title, sub, text, id) {

  return `
 <div class="beer">
  <div class="id">${id}</div>
  <h1 class="title">${title}</h1>
  <hr />
  <p class="sub">${sub}</p>
  <p class="text">${text}</p>
  <button>
    <div class="button-left">
      <p>details</p>
    </div>
    <div class="button-right">
      <span class="material-icons md-36"> arrow_forward </span>
    </div>
  </button>
</div>
`;
};

const beersCont = document.querySelector(".beers-container");
for (let i = 0; i < beers.cards.length; i++) {
  beersCont.insertAdjacentHTML(
    "beforeend",
    beerComp(
     beers.cards[i].title,
     beers.cards[i].sub,
     beers.cards[i].text,
     i+1
     )
  );
}
