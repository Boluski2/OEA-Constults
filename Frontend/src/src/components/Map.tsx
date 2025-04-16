
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in Leaflet with React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapProps {
  address: string;
  coordinates: [number, number]; // [longitude, latitude] - Note: Leaflet uses [latitude, longitude]
}

const Map = ({ address, coordinates }: MapProps) => {
  // Leaflet expects coordinates as [latitude, longitude], but our props are [longitude, latitude]
  const leafletCoordinates: [number, number] = [coordinates[1], coordinates[0]];

  return (
    <MapContainer 
      center={leafletCoordinates} 
      zoom={15} 
      scrollWheelZoom={false} 
      style={{ height: '100%', width: '100%', borderRadius: '0.75rem' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={leafletCoordinates}>
        <Popup>
          <div>
            <h3 className="font-bold">OEA Consult</h3>
            <p>{address}</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
