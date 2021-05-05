import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/inputgroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/button'

const Search = () => {
  return (

    <InputGroup className=" main-search ">

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
