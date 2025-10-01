import { MapContainer, TileLayer, Marker } from "react-leaflet";

export default function Mapa() {

  return (
    <>
      <MapContainer
        className="h-90 md:h-130 shadow-[0_4px_5px_1px_rgba(84,132,230,0.65)]"
        center={[6.260579, -75.568064]}
        zoom={16.2}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[6.260579, -75.568064]}>
          {/* <Popup>
           Auditorio principal SIU
          </Popup> */}
        </Marker>
      </MapContainer>
    </>
  );
}
