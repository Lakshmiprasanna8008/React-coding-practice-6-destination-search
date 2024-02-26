// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  searching = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachPlace =>
      eachPlace.name.toLowerCase().includes(searchInput),
    )
    console.log(searchInput)
    return (
      <div className="destinationpage">
        <h1>Destination Search</h1>
        <div className="destinationsearchcontainer">
          <input
            value={searchInput}
            type="search"
            placeholder="search"
            className="search"
            onChange={this.searching}
          />
          <img
            className="searchIcon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul>
          {searchResults.map(eachPlace => (
            <DestinationItem destinationsList={eachPlace} key={eachPlace.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
