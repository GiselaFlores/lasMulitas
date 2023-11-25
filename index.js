const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");
const contenedor = document.getElementById("contenedor");
let pagina = 1;

btnAnterior.addEventListener("click", ()=>{
    if(pagina > 1){
        pagina -= 1;
        cargarPeliculas();
    }
})
btnSiguiente.addEventListener("click", ()=>{
    if(pagina < 1000){
        pagina += 1;
        cargarPeliculas();
    }
})

const cargarPeliculas = async()=>{

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
                        <p class="card-text descripcion">${platos.descripcion}</p>
                        <p class="card-text descripcion">${platos.ingredientes}</p>
                        <p class="card-text descripcion">${platos.elaboracion}</p>
                        <p class="card-text descripcion">${platos.calorias}</p>
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
cargarPeliculas();

  