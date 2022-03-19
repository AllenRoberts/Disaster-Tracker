import { Icon } from '@iconify/react'



const LocationMarker = ({lat, lng, onClick, markerType}) => {
  var icon = {}
  if (markerType === 'Fire'){
    icon = "mdi:fire-alert"
  }else if (markerType === 'Volcano'){
    icon = "wi:volcano"
  }else if (markerType === 'Storm'){
    icon = "carbon:tropical-storm-tracks"
  }else if (markerType === 'Ice'){
    icon = "openmoji:ice-shelf"
  }
  return (
    <div className="location-marker" onClick={onClick}>
        <Icon icon={icon} className="location-icon"/>
    </div>
  )
}

export default LocationMarker