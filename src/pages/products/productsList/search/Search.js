import React from 'react'
import './search.css'
import { TextField } from '@material-ui/core'



const Search = ({filterSearch, changeFilter=()=>{}}) => {
    return (
    <div >
      
       <TextField
          className="Search"  
          label="Rechercher..."
          id="outlined-size-small"
          variant="outlined"
          size="small"
          value={filterSearch} onChange={e=>changeFilter(e.target.value)}
        />
        
    </div>
    )
}

export default Search