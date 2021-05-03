import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  return (
    <div>
      <div className="input-group ">
        <input type="search" className="form-control main-search" placeholder="O que está procurando ?" aria-label="Search"
          aria-describedby="search-addon" />
        {/* <span class="input-group-text border-0" id="search-addon">
          <i class="fas fa-search"></i>
        </span> */}
      </div>
    </div>
  )
}

export default Search
