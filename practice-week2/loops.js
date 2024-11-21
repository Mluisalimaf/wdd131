
myInfo = {
  name: "Maria F",
  photo: "images/photo.jpg",
  favoriteFoods: ["Pork belly", "French fries", "Açaí", "Empadão", "Espaguete"],
  hobbies: ["Sleeping", "Baking", "Reading"],
  placesLived: [
    {
      place: "Rio de Janeiro, RJ",
      length: "7 years",
    },
    {
      place: "Piracicaba, SP",
      length: "18 months",
    },
    {
      place: "Santa Cruz, RJ",
      length: "19 years",
    },
  ],
};

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
function foodsTemplate(food) {
  return `<li>${food}</li>`;
}

// Função para criar o HTML de cada local vivido
function placesTemplate(place) {
  return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

// Função genérica para transformar uma lista em HTML com base em um template
function generateListMarkup(list, templateCallback) {
  return list.map(templateCallback).join('');
}

// Localiza os elementos do DOM onde os dados serão inseridos
const foodsElement = document.querySelector("#favorite-foods");
const placesElement = document.querySelector("#places-lived");

// Gera o HTML e insere os alimentos favoritos no DOM
foodsElement.innerHTML = generateListMarkup(myInfo.favoriteFoods, foodsTemplate);

// Gera o HTML e insere os locais vividos no DOM
placesElement.innerHTML = generateListMarkup(myInfo.placesLived, placesTemplate);
