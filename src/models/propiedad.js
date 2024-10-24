const { Schema, model } = require('mongoose');

const PropiedadSchema = Schema({
    codigoReferencia: { type: Number},
    tituloPublicacion: { type: String, required: true, },
    //direccionReal: { type: String, required: true, unique: true},
    //direccionPublicacion: { type: String, required: true, unique: true},
    descripcion: { type: String, required: true },
    tipoPropiedad: { type: String, required: true },
    expesnsas: { type: Boolean},
    //location: { type: Point, coordinates: [-73.935242, 40.730610] }
    ubicacion: { type: Object, required: true }, //direc real, direc publi, pais, prov, ciudad, barrio
    operacion: { type: Array, required: true }, //{operacionID: 1-venta o 2-Alq, tipoOperacion, precio, moneda}
    cantPisos: { type: Number, required: true},
    ambientes: { type: Number, required: true},
    dormitorios: { type: Number, required: true},
    baños: { type: Number, required: true},
    imagenes: { type: Array },
    videos: { type: Array },
    supCubierta: { type: Number, required: true },
    supSemiCub: { type: Number, required: true },
    supDescubierta: { type: Number, required: true },
    supTotal: { type: Number, required: true },
    unidadMedida: { type: String }, /* M2 o HA(hectarea) SOLO p/lotes*/
    servicios: { type: Array },
    estado: { type: String },
    antiguedad: { type: Number },
    cantCocheras: { type: Number },
});

module.exports = model("Propiedades", PropiedadSchema);