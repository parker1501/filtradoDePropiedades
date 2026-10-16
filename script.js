let objeto1 = {
    nombre: "zadkiel",
    apellido: "basurto",
    edad: 18
};
let objeto2 = {
    nombre: "diego",
    apellido: "iniesta",
    edad: 18 
};
let objeto3 = {
    nombre: "dylan",
    apellido: "garcia",
    edad: 19
};

let arreglo = [objeto1, objeto2, objeto3];
let resultado = []
for (let i = 0; i < arreglo.length; i++) {
    resultado.push({
        nombre: arreglo[i].nombre,
        apellido: arreglo[i].apellido
    })
}

console.log(resultado);

//let array = [ 
//    {
//        nombre: "zadkiel",
//    apellido: "basurto",
//    edad: 18
//    },
//    {
//        nombre: "diego",
//    apellido: "iniesta",
//    edad: 18 
//    },
//    {
//        nombre: "dylan",
//    apellido: "garcia",
//    edad: 1//9
//    }
//]