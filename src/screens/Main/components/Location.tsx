import { LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { AppButton } from "../../../components/AppButton"
import { useModalContext } from "../../../contexts/ModalContext";
import * as styles from "../Main.styles";
import { Button } from "../../../components/Button";

const LOCATION_COORDINATE: LatLngExpression = [-2.9091275368017324, 104.67451950972098]

export const Location = () => {
  const { openModal } = useModalContext();
  
  const handleClick = () => {
    openModal({
      title: 'Location',
      body: <ModalBody />,
    });
  }

  return (
    <AppButton buttonClassName="location" title="Location" onClick={handleClick} />
  )
}

const ModalBody = () => {
  const handleClickOpenInMaps = () => {
    const destination = encodeURIComponent("HomeFun English Course, Sumatera Selatan")
    window.open(`https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=${destination}`, '_blank')
  }

  return (
    <div css={styles.locationModal}>
      <MapContainer center={LOCATION_COORDINATE} zoom={13}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={LOCATION_COORDINATE}>
          <Popup>
            <strong>👰 Bride's Residence,<br /></strong>
            Jl. Swadaya 1 No. 40, <br />
            Kab. Banyuasin, Sumatera Selatan
          </Popup>
        </Marker>
      </MapContainer>
      <div className="button-container">
        <Button onClick={handleClickOpenInMaps}>Open in Maps</Button>
      </div>
    </div>
  )
}
