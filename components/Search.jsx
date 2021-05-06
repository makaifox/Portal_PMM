import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/inputgroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/button'
import { FaSearch } from 'react-icons/fa';

const Search = () => {
  return (

    <InputGroup className=" main-search ">
      <InputGroup.Append className='input-search'>
        <FaSearch />
      </InputGroup.Append>

      <FormControl
        placeholder="O que está procurando ?"
        aria-label="O que está procurando ?"
        aria-describedby="basic-addon2"
      />
      <InputGroup.Append className='input-search'>
        <Button className="search-bar">Pesquisar</Button>
      </InputGroup.Append>
    </InputGroup>

  )
}

export default Search
