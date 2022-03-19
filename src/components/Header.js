import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/weather-cloudy-alert'

const Header = () => {
  return (
    <header className="header">
        <h1><Icon icon={locationIcon}/> Disaster Tracker (Powered by NASA)</h1>
  </header>
  )
}

export default Header