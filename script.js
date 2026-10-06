const data = [
  {
    title: "Los Kings",
    description: "Hakuna Matata",
    url_img: "assets/viajes/viajes-2.jpg"
  },
  {
    title: "Vamonoh locooo",
    description: "En la gloria",
    url_img: "assets/viajes/viajes-4.jpg"
  },
  {
    title: "De Chill",
    description: "Guuaauuuu",
    url_img: "assets/viajes/viajes-6.jpg"
  }
];

const contenedor = document.getElementById("tarjetas-container");

for (let i = 0; i < data.length; i++) {
    // Creo div y meto la imagen con su class CSS
    const creadiv = document.createElement("div");
    creadiv.className = "tarjeta";

    const metoimg = document.createElement("img");
    metoimg.src = data[i].url_img;
    
    //Especifico en donde va (dentro del div)
    creadiv.appendChild(metoimg);

    // Ahora creo el elemento titulo y no hace falta especificar el css, ya lo hicimos.
    const creatitulo = document.createElement("h3");
    creatitulo.textContent = data[i].title;
    
    // Especifico que ahora el titulo está dentro del div
    creadiv.appendChild(creatitulo);
    
    // Ahora creo el elemento descripción (<p>) y no hace falta especificar el css, ya lo hicimos.
    const creaP = document.createElement("p");
    creaP.textContent = data[i].description;
    
    // Especifico que ahora la descripción está dentro del div
    creadiv.appendChild(creaP);

    // Añado la tarjeta completa al contenedor de la página
    contenedor.appendChild(creadiv);
    
};

const select = document.getElementById("select-destinos");

const cities = [
"Madrid",
"Barcelona",
"Valencia",
"Seville",
"Bilbao",
"Granada",
"Malaga",
"Palma de Mallorca",
"Alicante",
"Zaragoza"
];

  
for (let i = 0; i < cities.length; i++) {
  const creaOption = document.createElement("option");
    creaOption.textContent = cities[i];
    select.appendChild(creaOption);
}