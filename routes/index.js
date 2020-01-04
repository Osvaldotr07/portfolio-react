var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/data', function(req, res, next) {
  res.json([
    {id: 1, title:"Paint Online", description: "This project is done with HTML, CSS and JS. Also this project is too basic but the functionality is good", image: 'https://res.cloudinary.com/osvitrejo/image/upload/v1577488687/osvaldotr07.github.io_Paint-online__dgpav8.png', url: 'https://github.com/Osvaldotr07/Paint-online'},
    {id: 2, title: "Rick and Mrty API", description: "This app is a request to API called Rick and Morty is made with reactjs", image: 'https://res.cloudinary.com/osvitrejo/image/upload/v1577511624/rickAndMorty_agbssv.png', url: 'https://github.com/Osvaldotr07/rick-and-morty-app'},
    {id: 3, title: "Portfolio with Django", description: "This project is made with Python and Django like MVC model, it is my first portfolio", image: 'https://res.cloudinary.com/osvitrejo/image/upload/v1577501573/osvaldo-trejo.herokuapp.com_contacto_contactame__1_mhf1km.png', url: 'https://github.com/Osvaldotr07/Portafolio-Osvaldo'},
    {id: 4, title: "Overlay Form Faded", description: "This little project was done with web technologies, it is little but with a good design", image: 'https://res.cloudinary.com/osvitrejo/image/upload/v1577510594/overlay_scwfla.png', url: 'https://github.com/Osvaldotr07/overlay-formulario'},

  ])
});

module.exports = router;
