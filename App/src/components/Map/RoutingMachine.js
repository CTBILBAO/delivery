import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import { withLeaflet } from "react-leaflet";

class Routing extends MapLayer {
  createLeafletElement() {
    const { map, coords, userLocation } = this.props;
    let leafletElement = L.Routing.control({
      waypoints: [
        L.latLng(coords.lat, coords.lng),
        L.latLng(userLocation.lat, userLocation.lng),
      ],
      lineOptions: {
        styles: [
          {
            color: "blue",
            opacity: 0.8,
            weight: 4,
          },
        ],
      },
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: false,
      showAlternatives: false,
      itineraryFormatter: false,
    }).addTo(map.leafletElement);
    return leafletElement.getPlan();
  }
}
export default withLeaflet(Routing);
