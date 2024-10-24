const Propiedad = require("../models/propiedad");

const getPropiedades = async(req, res) => {
    const { limit, offset, operacion, tipo, precioMin, precioMax } = req.query;
    try {
        let resp;
        let propiedades;

        resp = await Propiedad.find();
        //filtros
        //por operacion
        if(operacion){
            propiedades = resp.filter(p => 
                p.operacion.some(item => item.operacion === operacion)
            );
        }
        
        res.json(resp);
    } catch (error) {
        console.log(error);
    }
};

const createPropiedad = async(req, res) => {
    const {
        codigoReferencia,
        tituloPublicacion,
        descripcion,
        tipoPropiedad,
        expesnsas,
        ubicacion,
        operacion,
        cantPisos,
        ambientes,
        dormitorios,
        baños,
        imagenes,
        videos,
        supCubierta,
        supSemiCub,
        supDescubierta,
        supTotal,
        unidadMedida,
        servicios,
        estado,
        antiguedad,
        cantCocheras,
    } = req.body;  //console.log("data:", req.body)

    try {
        const nuevaProp = new Propiedad({
            codigoReferencia,
            tituloPublicacion,
            descripcion,
            tipoPropiedad,
            expesnsas,
            ubicacion,
            operacion,
            cantPisos,
            ambientes,
            dormitorios,
            baños,
            imagenes,
            videos,
            supCubierta,
            supSemiCub,
            supDescubierta,
            supTotal,
            unidadMedida,
            servicios,
            estado,
            antiguedad,
            cantCocheras,
        });

        await nuevaProp.save();

        res.status(200).send("Prop creada con exito!!");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error del servidor");
    }
};


module.exports = {
    createPropiedad,
    getPropiedades,
}