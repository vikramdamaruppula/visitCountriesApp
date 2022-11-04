import './index.css'

const VisitedList = props => {
  const {visitDetails, deleteCountry} = props
  const {imageUrl, id, name} = visitDetails

  const removeCountry = () => {
    deleteCountry(id)
  }

  return (
    <li className="v-list">
      <div className="v-container">
        <img src={imageUrl} alt="thumbnail" className="country-image" />
        <div>
          <p className="v-title"> {name} </p>
          <button
            type="button"
            onClick={removeCountry}
            className="remove-button"
          >
            remove
          </button>
        </div>
      </div>
    </li>
  )
}

export default VisitedList
