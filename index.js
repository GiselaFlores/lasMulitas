const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");
const contenedor = document.getElementById("contenedor");
let pagina = 1;

btnAnterior.addEventListener("click", ()=>{
    if(pagina > 1){
        pagina -= 1;
        cargarPlatos();
    }
})
btnSiguiente.addEventListener("click", ()=>{
    if(pagina < 1000){
        pagina += 1;
        cargarPlatos();
    }
})

const cargarPlatos = async()=>{

    try{

        const respuesta = await fetch(`https://platos-974f6-default-rtdb.firebaseio.com/platos.json`)
        console.log(respuesta);
        
        if(respuesta.status === 200){
            const datos = await respuesta.json();
            console.log(datos);

            let plato = [];

            datos.forEach(platos => {
                plato += `
                <div class="card orden" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title titulos">${platos.nombrePlato}</h5>
                        <p class="card-text descripcion">Descripcion: ${platos.enlaceFoto}</p>
                        <p class="card-text descripcion">Descripcion: ${platos.descripcion}</p>
                        <p class="card-text descripcion">Ingredientes: ${platos.ingredientes}</p>
                        <p class="card-text descripcion">Elaboración: ${platos.elaboracion}</p>
                        <p class="card-text descripcion">Calorias: ${platos.calorias}</p>
                    </div>
                </div>
                `;
            });
            contenedor.innerHTML = plato;
        }
    }

    catch(error){
        console.log(error.message);
    }

}
cargarPlatos();

  