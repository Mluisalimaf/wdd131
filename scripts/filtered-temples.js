const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Rio de Janeiro",
        location: "Rio de Janeiro, Brazil",
        dedicated: "2022, May, 8",
        area: 29966,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/rio-de-janeiro-brazil-temple/rio-de-janeiro-brazil-temple-8183.jpg"
      },
      {
        templeName: "Salt Lake City",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6-24",
        area:  382207,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-55690.jpg"
      },
      {
        templeName: "Lisbon Portugal Temple",
        location: "Lisbon, Portugal",
        dedicated: "2019, September, 15",
        area:  23730,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/lisbon-portugal-temple/lisbon-portugal-temple-6310.jpg"
      }
  ];

  function createTempleCard(temple) { 
    const card = document.createElement('div');
    card.className = 'temple-card'; 
        
        card.innerHTML = ` 
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy"> 
            <h2>${temple.templeName}</h2> 
            <p>Location: ${temple.location}</p> 
            <p>Dedicated: ${temple.dedicated}</p> 
            <p>Area: ${temple.area} sq ft</p> 
        `; 
        
        return card; 
    } 
    
    function displayTemples(filterFn = () => true) { 
        const container = document.getElementById('temples-container'); 
        container.innerHTML = ''; 
         
        temples.filter(filterFn).forEach(temple => {
            const templeCard = createTempleCard(temple); 
            container.appendChild(templeCard); }); 
    } 
    
    displayTemples(); 
    
    
    document.getElementById('home').addEventListener('click', () => displayTemples()); 
    document.getElementById('old').addEventListener('click', () => displayTemples(temple => new Date(temple.dedicated).getFullYear() < 1900)); 
    document.getElementById('new').addEventListener('click', () => displayTemples(temple => new Date(temple.dedicated).getFullYear() > 2000)); 
    document.getElementById('large').addEventListener('click', () => displayTemples(temple => temple.area > 90000)); 
    document.getElementById('small').addEventListener('click', () => displayTemples(temple => temple.area < 10000));

    document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified