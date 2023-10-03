/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function filtrar(funcion){
  // Escribi una función filtrar en el prototipo de Arrays,
  // que recibe una funcion (callback) que devuelve true o false.

  // filtrar los elementos de ese arreglo en base al resultado de esa funcion comparadora, devolver un nuevo arreglo con los elementos filtrados.

  // NO USAR LA FUNCION FILTER DE LOS ARREGLOS.

  // ej:
  // var productos = [{ price: 100, name: 'tv' }, { price: 50, name: 'phone' }, { price: 30, name: 'lamp' }]
  // productos.filtrar(function(p) { return p.price >= 50; }) => [{price: 100, name:'tv'}]

  /*var niu=[];

  for(var ga in funcion){
    if(funcion[ga]==true){
      niu.push(funcion);
    }  
  }

  Array.prototype.filt = function(sas){
    if(funcion){
      sas.push(funcion);
    }
    else{
      return;
    }
  }

  var eu =funcion.filtrar();
  var bue=[];
  for(var a=0; a<funcion.length; a++){
    if(eu[a]){
      bue.push(funcion[a]);
    }
    else{}
  }

  return bue;
    
  var q=[];

  for(var a=0; a<funcion.length; a++){
    if(funcion[a]){
      q.push(this[a]);
    }
    else{}
  }

  return q;
  
  var ou=funcion.filtrar();
  var si=[];
  for(var ga in ou){
    if(ou[ga]==true){
      si.push(this[ga]);
    }
  }
  return si;*/

  Array.prototype.filtrar=function(cb){
    var newarr=[];
    this.forEach(item=>{if(cb(item)){newarr.push(item);}});
    return newarr;
  }

};

// No modifiques nada debajo de esta linea //

module.exports = filtrar