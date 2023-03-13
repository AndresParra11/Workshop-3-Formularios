/* Captura de elementos del DOM */

const nombreProducto = document.getElementById("nombreProducto");
const precioProducto = document.getElementById("precioProducto");
const cantidadProducto = document.getElementById("cantidadProducto");
const categoriaProducto = document.getElementById("categoriaProducto");
const botonAñadir = document.getElementById("añadir");

botonAñadir.addEventListener("click", function(){
    /* Luego, agregue estos datos en un array y mostrarlo en consola. */
    const arregloProducto = [];
    arregloProducto.push(nombreProducto.value);
    arregloProducto.push(precioProducto.value);
    arregloProducto.push(cantidadProducto.value);
    arregloProducto.push(categoriaProducto.value);

    console.log(arregloProducto);
    
    /* Posteriormente, muestre los elementos del array en una tabla.*/

    
    let filaDatos = document.getElementById("tablaProductos").insertRow(-1);
    for(let i = 0; i < arregloProducto.length; i++){
        filaDatos.insertCell(i).innerHTML = arregloProducto[i];
    }

    /* Y la última columna de esta tabla contenga unos botones con las acciones de eliminar y actualizar información del producto. */

    const ultimaCelda = filaDatos.insertCell(4);   
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar"
    const botonEditar = document.createElement("button");
    botonEditar.textContent = "Editar"
    ultimaCelda.appendChild(botonEliminar);
    ultimaCelda.appendChild(botonEditar);
    
    botonEliminar.addEventListener("click", (event) => {
        event.target.parentNode.parentNode.remove();
    });

    botonEditar.addEventListener("click", (event) => {
        event.target.parentNode.parentNode.cells[0].innerHTML = prompt("Ingrese un nuevo nombre para el producto: ");

        event.target.parentNode.parentNode.cells[1].innerHTML = parseInt(prompt("Ingrese un nuevo precio: "));

        event.target.parentNode.parentNode.cells[2].innerHTML = parseInt(prompt("Ingrese una nueva cantidad: "));

        event.target.parentNode.parentNode.cells[3].innerHTML = prompt("Ingrese una nueva categoría (A, B, C ó D): ");
    });
});


