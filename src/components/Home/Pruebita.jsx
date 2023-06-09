import eco from "../img/ecovidrio-bg-inv.jpg";
import Map from "../pages/Map";
import Contenedor from "./Contenedor";


function Pruebita() {
  return (
    <section className="shadow-lg">
      <div
        className="h-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 bg-cover"
        style={{ backgroundImage: `url(${eco})` }}
      >
        <div className="text-lg h-auto grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h2 id="puntos-inf" className="text-lg font-bold sm:text-7xl">
              Busca los puntos más cercanos para poder reciclar.
            </h2>

            <a
              id="saber-mas"
              href="#"
              className="mt-8 inline-block rounded bg-amber-100 px-12 py-3 text-sm font-bold text-teal-600 transition hover:bg-teal-600 focus:outline-none focus:ring focus:ring-amber-100 border-0 !important"
            >
              Saber Más
            </a>
          </div>
        </div>
      </div>
    <Contenedor/>
      <div className="container mx-auto relative">
      <div id="map" style={{ height: '400px', width: '100%' }}></div>
      <div className="absolute bottom-0 left-0 mb-4 ml-4">
        <Map />
        <button
          id="button"
          className="bg-teal-600 text-amber-100 hover:bg-green-600 font-bold py-2 px-4 border rounded-full"
        >
          Punto Ecológico más cercano
        </button>
      </div>
    </div>
   </section>
    );
  }
  
export default Pruebita;
