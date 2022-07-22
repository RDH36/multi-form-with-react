import React, { useState } from 'react'
import './SubForm.css'

export default function Formdiet({ modifyIndex }) {
    const [dietValue, setDietValue] = useState({
        dietForm : "nodiet"
    });
    const handlerSubmit = e => e.preventDefault();

    const handelradio = e => {
        setDietValue({
            dietForm : e.target.value
        });
    }
  return (
    <form className='diet-form' onSubmit={handlerSubmit}>
          <p>Quell es ton régime en particulier</p>

          <label htmlFor="nodiet">Pas de régime en particulier</label>
          <input type="radio" name="diet" id="nodiet" value="nodiet" onChange={handelradio} />
          
          <label htmlFor="homnivore">homnivore</label>
          <input type="radio" name="diet" id="homnivore" value="homnivore" onChange={handelradio} />
          
          <label htmlFor="vegetarien">Végétatien</label>
          <input type="radio" name="diet" id="vegetarien" value="vegetarien" onChange={handelradio} />
          
          <label htmlFor="vegan">Vegan</label>
          <input type="radio" name="diet" id="vegan" value="vegan" onChange={handelradio} />
          
          <button onClick={()=>modifyIndex(3, dietValue)}>Valider</button>
    </form>
  )
}
