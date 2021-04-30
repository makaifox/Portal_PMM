import React from 'react'

const Search = () => {
  return (
    <div>
      <div class="input-group ">
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
