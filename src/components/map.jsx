import { MapContainer, TileLayer } from "react-leaflet";

const MapComponent = () => {
    return (
        <MapContainer className="w-[50%] h-[80%]" style={{height: '500px', width:'50%'}}   center={[24.0005577,85.3374942]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
            attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>

    )

}

export default MapComponent;