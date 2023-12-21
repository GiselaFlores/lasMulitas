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

const sobreNosotros = () => {
    Swal.fire({
        title: "Sobre Nosotros",
        imageUrl: './img/insti.jpg',
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: 'instituto N°28 25 de Mayo',
        html: `
        <div style="text-align: left; font-size: medium";>
        <strong>Materia:</strong> Diseño de sistemas Web.<br>
        <strong>Profesora:</strong> Gisela FLores. <br>
        <strong>Alumnos:</strong> Valensisi Claudio, Ruiz Justiniano, Rodríguez Juan.
        <strong>Curso:</strong> 3ro <br>
        <strong>Año:</strong> 2023
        </div>
        `,
      });
  }

  const alertaEfectivo = () => {
    Swal.fire({
        title: "Elegiste pagar con dinero en efectivo",
        imageUrl: './img/dinero.png',
        imageWidth: 250,
        imageHeight: 250,
        imageAlt: 'dinero en efectivo',
      });
  }

const alertaTarjeta = () => {
    Swal.fire({
        title: "Elegiste pagar con tarjeta",
        imageUrl: './img/tarjeta.png',
        imageWidth: 250,
        imageHeight: 250,
        imageAlt: 'tarjeta o débito',
      });
  }

const alertaPedido = () => {
    Swal.fire({
      title: 'Muchas gracias por tu compra!',
      text: 'En breve recibiras una notificación',
      imageUrl: './img/ok.png',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'ok',
    })
    }
    

     
const alertaAgregar = () => {
        Swal.fire({
            title: 'Agregado',
            text: 'Este producto se agregó a tu pedido',
            imageUrl: './img/ok.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'ok',
          })
          }