(function(){

    function getEdad(){
        return 10 + 10 + 3;
    }
    
    const nombre   = 'Jose';
    const apellido = 'Espiritu';
    const edad     = 23;

    /* const salida = nombre + " " + apellido + " ( " + edad + " )"; */
    // Jose Espiritu (Edad: 23)

    /* const salida = `${ nombre } ${ apellido } ( ${ edad } )`; */
    const salida = `${ nombre } ${ apellido } ( ${ getEdad() } )`;
    console.log(salida);

})();
