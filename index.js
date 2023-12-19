window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.go-top-container').classList.add('show');
    }else{
        document.querySelector('.go-top-container').classList.remove('show');
    }
}

document.querySelector('.go-top-container')
.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
});


const contenedor = document.getElementById("contenedor");
let pagina = 1;

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
                        <img src="${platos.enlaceFoto}" class="card-img-top" alt="...">
                        <h5 class="card-title titulos">${platos.nombrePlato}</h5>
                        <ph1 class="card-text descripcion">Descripcion: ${platos.descripcion}</p>
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

  