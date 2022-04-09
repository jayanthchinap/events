// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props
  const {imageUrl, name, location, id} = eventDetails
  const eventImageClassName = isActive ? 'event-image active' : 'event-image'

  const myButton = () => {
    setActiveEventId(id)
  }

  return (
    <li className="event-item">
      <li className="event-item">
        <button type="button" className="event-button" onClick={myButton}>
          <img src={imageUrl} alt="event" className={eventImageClassName} />
        </button>
        <p className="name">{name}</p>
        <p className="location">{location}</p>
      </li>
    </li>
  )
}

export default EventItem
