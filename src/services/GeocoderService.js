import Axios from 'axios';

async function Geocoder(houseNr, street, city, postalcode, country) {
    let latLong = {
        latitude: 0.0,
        longitude: 0.0
    }
    await Axios.get("https://nominatim.openstreetmap.org/search?"
    + "street=" + houseNr + " " + street + "&"
    + "city=" + city + "&"
    + "postalcode=" + postalcode + "&"
    + "country=" + country + "&"
    + "format=json")
    .then((response) => {
        latLong.latitude = response.data[0].lat
        latLong.longitude = response.data[0].lon
    })
    .catch((error) => {
        console.log(error);
    });
    return latLong;
}

export default Geocoder