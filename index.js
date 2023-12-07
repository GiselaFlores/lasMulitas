
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

        const respuesta = await fetch(`http://vps-3568255-x.dattaweb.com:3000/platos.json`)
        console.log(respuesta);
        
        if(respuesta.status === 200){
            const datos = await respuesta.json();
            console.log(datos);

            let plato = [];

            datos.forEach(platos => {
                plato += `
                <div class="card orden" style="width: 18rem;">
                    <img src="${platos.enlaceFoto}" class="card-img-top" alt="foto del plato a la venta">
                    
                    <div class="card-body"> 
                        <h5 class="card-title h5titulos">${platos.nombrePlato}</h5>
                        <p class="card-text descripcion"><p class= titulos> Descripción: </p> ${platos.descripcion}</p>
                        <p class="card-text descripcion"><p class= titulos> Ingresientes: </p> ${platos.ingredientes}</p>
                        <p class="card-text descripcion"><p class= titulos> Elaboración: </p> ${platos.elaboracion}</p>
                        <p class="card-text descripcion"><p class= titulos> Calorias: </p> ${platos.calorias}</p>
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

  