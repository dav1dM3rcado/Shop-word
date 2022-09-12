// metodos de filtrado de array
const palabras =[ 'david',  'nico','colo','tesla','aritosteles']

// con for 
 const palabras_filtradas =[]
 for(p of palabras){
    if(p.length>5){
        palabras_filtradas.push(p)
    }
 }
 console.log(palabras_filtradas)

 // con filter
 const palabras_filtradas2 = palabras.filter(
    function(p){
        return p.length>5
    }
 )
 console.log(palabras_filtradas2)
