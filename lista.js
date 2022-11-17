nombre_alumno_array=[];



function submit(){

    var ver_alumno_array=[];
    for(  var N_uno=1; N_uno<=4; N_uno++  ){
    var T_uno=document.getElementById("nombre_alumno_"+N_uno).value;
    console.log(T_uno);
    nombre_alumno_array.push(T_uno);

    }

    console.log(nombre_alumno_array);
    var longitud_nombre_alumnos_array = nombre_alumno_array.length; 
    console.log(longitud_nombre_alumnos_array);
    for(  var N_dos=0; N_dos<=longitud_nombre_alumnos_array; N_dos++ ){
    
        ver_alumno_array.push("<h4>NOMBRE - "+ nombre_alumno_array[N_dos] + "</h4>");
        console.log(ver_alumno_array);

    }

    console.log(ver_alumno_array);
    document.getElementById("ver_nombre_con_comas").innerHTML = ver_alumno_array;

    var remover_comas = ver_alumno_array.join(" ");
    console.log(remover_comas);
    document.getElementById("ver_nombre_sin_comas").innerHTML = remover_comas;

    

}