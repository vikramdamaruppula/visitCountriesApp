import './index.css'

const Countries = props => {
  const {countryDetails, addCountry} = props
  const {name, id, isVisited} = countryDetails

  const visitedText = isVisited ? 'visited' : 'Visit'

  const addCountryToList = () => {
    addCountry(id)
  }

  return (
    <li className="c-list">
      <p className="c-name">{name} </p>
      {isVisited === true ? (
        <p>{visitedText} </p>
      ) : (
        <button type="button" onClick={addCountryToList} className="add-button">
          {visitedText}
        </button>
      )}
    </li>
  )
}

export default Countries
