import React, { useEffect } from 'react';

const Map = () => {
  useEffect(() => {
    // Cargar el script de la API de Google Maps
    const googleMapsScript = document.createElement('script');
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAHBNNCqmzpQOYNadGKZSY8RIxhgvFDiek`;
    googleMapsScript.async = true;
    window.document.body.appendChild(googleMapsScript);

    // Inicializar el mapa una vez que el script se haya cargado
    googleMapsScript.addEventListener('load', initMap);

    // Función para inicializar el mapa
    function initMap() {
      // Crear una instancia del mapa
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.712776, lng: -74.005974 }, // Coordenadas de Nueva York
        zoom: 12,
      });

      // Marcador en Nueva York
      const marker = new window.google.maps.Marker({
        position: { lat: 40.712776, lng: -74.005974 },
        map: map,
        title: 'Nueva York',
      });
    }
  }, []);

  return <div id="map" style={{ height: '400px' }}></div>;
};

export default Map;