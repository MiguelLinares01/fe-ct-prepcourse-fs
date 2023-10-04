/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var pa=[];
   for(var sas in objeto){
      pa.push([sas, objeto[sas]]);
   }
   return pa;

}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var qua=string.split('');
   var uaq=qua.sort();
   var obj={};
   for(var ga=0; ga<uaq.length; ga++){
      if(ga==0){
         obj[uaq[ga]]=1;
      }
      else if(ga!=0 && uaq[ga]==uaq[ga-1]){
         obj[uaq[ga]]+=1;
      }
      else if(ga!=0 && uaq[ga]!=uaq[ga-1]){
         obj[uaq[ga]]=1;
      }
   }
   return obj;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var iuc=string.split('');
   var suo=[];
   for(var u=0; u<iuc.length; u++){
      if(iuc[u].toUpperCase()==iuc[u]){
         suo.push(iuc[u]);
      }
   }
   for(var a=0; a<suo.length; a++){
      if(iuc[a].toUpperCase()!=iuc[a]){
         suo.push(iuc[a]);
      }
   }
   suo=suo.join('');
   return suo;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   var ser=frase.split('');
   var io=[];
   for(var u=0; u<ser.length; u++){
      if(ser[u]==' '){    
         for(var a=1; a<=u; a++){
            if(ser[u-a]==' '){break}
            io.push(ser[u-a]);      
         }
         io.push(' ');
      }
      else if(u==ser.length-1){
         for(var a=0; a<u; a++){
            if(ser[u-a]==' '){break}
            else{io.push(ser[u-a]);}      
         }
      }
   }
   io=io.join('');
   return io;

}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var sapo=numero.toString();
   sap=sapo.split('');
   var ou=[];
   for(var t=0; t<sap.length; t++){
   ou.unshift(sap[t]);
   }
   ou=ou.join('');
   if(ou==sapo){
      return('Es capicua');
   }
   else{
      return('No es capicua');
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

   var awo=string.split('');
   var ut=[];
   for(var sat=0; sat<awo.length; sat++){
   if(awo[sat]!='a' && awo[sat]!='b' && awo[sat]!='c'){
      ut.push(awo[sat]);
   }
   }
   ut=ut.join('');
   return ut;

}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   var s0s=arrayOfStrings;
   var op=[];
   var max;
   for(var yu=0; yu<=s0s.length; yu++){
      max=s0s[0];
      for(var t=0; t<s0s.length; t++){
         if(s0s[t].length>=max.length){max=s0s[t];}
         if(t==s0s.length-1){s0s=s0s.filter(s0s=> s0s!=max);}
      }
      op.unshift(max);
      if(s0s.length==1){op.unshift(s0s[0]);}
   }
   return op;

}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

   var k=array1;
   var kk=array2;
   var reps=[];
   for(var u=0; u<k.length; u++){
   for(var uu=0; uu<kk.length; uu++){
      if(k[u]==kk[uu]){reps.push(k[u]);}
   }
   }
   return reps;

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
