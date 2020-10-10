import React,{useState} from 'react'
import { useStoreValue } from '../../contextApi/StateProvider'
import './filter.css'

function Filter() {
  const [{ products }, dispatch] = useStoreValue()
  const [team, setTeam] = useState("All")
  const [sort, setSort] = useState("Latest")
  
  const filterByTeam = (e) => {
    let value = e.target.value
    setTeam(value)
    dispatch({
      type: 'FILTER_BY_TEAM',
      payload: value
    })
  }
  const sortByPrice = (e) => {
    let value = e.target.value
    setSort(value)
    dispatch({
      type: 'SORT_BY_PRICE',
      payload: value
    })
  }
  return (
    <div className="filter__section">
      {/* by club */}
      <p>{products?.length} Products Available</p>
      <div className= "filter-team">
        <label htmlFor="team-filter">Team: </label>
        <select name="team-filter" value={team} onChange ={filterByTeam}>
          <option value="">All</option>
          <option value="Arsenal">Arsenal</option>
          <option value="Chelsea">Chelsea</option>
          <option value="Everton">Everton</option>
          <option value="Manchester City">Manchester City</option>
          <option value="Manchester United">Manchester United</option>
          <option value="Tottenham Hotspur">Tottenham Hotspur</option>
          <option value="Liverpool">Liverpool</option>
          <option value="Leicester City">Leicester City</option>
        </select>
      </div>
      {/* By price */}
      <div className="sort-price">
        <label htmlFor="price-sort">Price: </label>
        <select name="price-sort" value={sort} onChange = {sortByPrice}>
          <option value="latest">Latest</option>
          <option value="highest">Highest</option>
          <option value="lowest">Lowest</option>
        </select>
      </div>
    </div>
  )
}

export default Filter
