const express = require('express');
const { createPropiedad, getPropiedades } = require('../controllers/propiedad');

const router = express.Router();

//rutas
//trae props
router.get('/', getPropiedades);

//crea
router.post('/', createPropiedad);


module.exports = router;