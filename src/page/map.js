
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px"
};

const center = {
  lat: 26.8467, // Lucknow Latitude
  lng: 80.9462  // Lucknow Longitude
};

const MyMap = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCeq5pNZj1DuDGFF9yHYGkMid5Zz85KKTo">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MyMap;
