// //####EJERCICIOS CONDICIONALES#####
// 1 Puede ver película
// const puedeVerPelicula = (edad, tieneAutorizacion) => {
//     return (edad >= 15 || tieneAutorizacion);
// }
// EJERCICIO 2: Está en rango
// const estaEnRango = (valor, minimo, maximo) => {
//     return (valor <= maximo && valor >= minimo);
// }
// EJERCICIO 3: Puede avanzar
// const puedeAvanzar = (color) => {
//     return (color === 'verde');
// }
// EJERCICIO 4: ¿Es vocal ?
//     let esVocal = (letra) => {
//         return (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u');
//     }

// EJERCICIO 5: ¿Es consonante ?
//     const esConsonante = (letra) => {
//         let vocales = esVocal(letra);
//         return !vocales
//     }

// EJERCICIO 6: ¿Puede renovar el carnet?
// const puedeRenovarCarnet=(pasoTests,tieneMultasImpagas,pagoImpuestos)=>{
//     return (pasoTests && !tieneMultasImpagas && pagoImpuestos);
//   }

// EJERCICIO 7: ¿Puede graduarse?
// const puedeGraduarse=(asistencia,materiasAprobadas,tesisAprobada)=>{
//     return(asistencia>=75 && materiasAprobadas>=50 && tesisAprobada);
//   }

// EJERCICIO 8: Par o impar
//   const esParOImpar=(numero)=>{
//     if (numero%2===0)
//    return ('par')
//  else
//    return ('impar')

// }
// EJERCICIO 9: Positivo o negativo
// const esPositivoONegativo = (numero)=>{
//     if (numero>0)
//       return ('positivo')
//     else
//       return ('negativo')
//   }

// EJERCICIO  10: Avanzar semáforo
// const avanzarSemaforo=(colorActual)=>{
//     if (colorActual==='verde')
//       return ('amarillo')
//     else if (colorActual==='amarillo'){
//        return ('rojo') 
//     }
//     else if (colorActual==='rojo'){
//        return ('verde')
//     }

//   }

// EJERCICIO 11: Obtener sensación
// const obtenerSensacion=(temperatura)=>{
//     if (temperatura<0)
//       return (`¡Está helando!`)
//     else if (temperatura>=0 && temperatura<15){
//       return (`¡Hace frío!`)
//     }
//     else if (temperatura>=12 && temperatura<25){
//        return (`Está lindo`)
//     }
//     else if (temperatura>=25 && temperatura<30){
//       return (`Hace calor`)
//     }
//     else if (temperatura>=30){
//       return (`¡Hace mucho calor!`)
//     }
//   }

//EJERCICIO 12: Obtener nota
// const obtenerNota=(puntaje)=>{
//     if (puntaje<6)
//       return `Desaprobado`
//     else if (puntaje>=6 && puntaje<7) {
//       return `Regular`
//     }
//     else if (puntaje>=7 && puntaje<8) {
//       return `Bueno`
//     }
//     else if (puntaje>=8 && puntaje<10) {
//       return `Muy bueno`
//     }
//     else if (puntaje===10) {
//       return `Excelente`
//     }
//     else if (puntaje<0 || puntaje>10) {
//       return `Puntaje inválido`
//     }
//   }

// EJERCICIO 13: Piedra, papel o tijera
// const jugarPiedraPapelTijera=(a,b)=>{
//     if (a===`tijera` && b===`piedra` || b===`tijera` && a===`piedra`) 
//       return (`¡Ganó piedra!`)
//     else if (a===`papel` && b===`piedra` || b===`papel` && a===`piedra`) {
//       return (`¡Ganó papel!`)
//     }
//     else if (a===`papel` && b===`tijera` || b===`papel` && a===`tijera`) {
//       return (`¡Ganó tijera!`)
//     }
//     else if (a===b) {
//       return (`¡Empate!`)
//     }
//   }