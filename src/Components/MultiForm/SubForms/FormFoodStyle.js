import React, { useRef } from 'react'
import './SubForm.css'

export default function FormFoodStyle({ modifyIndex }) {
    const allCheckbox = useRef([]);

    const handlerSubmit = e => { 
        e.preventDefault()
        const food = {
            foodStyle: []
        }

        allCheckbox.current.forEach(item => {
            item.checked && food.foodStyle.push(item.value)
        })
        modifyIndex(4, food)
    }

    const handlerPrevent = () => {
        modifyIndex(2)
    }

    const addRef = el => {
        if (el && !allCheckbox.current.includes(el)) {
            allCheckbox.current.push(el);
        }
    }
  return (
    <form onSubmit={handlerSubmit} className="checkbox-form">
          <p>Quelles sont tes cuisine préférées</p>
          <span>Choix multiples.</span>
          <label htmlFor="italienne">Italienne</label>
          <input ref={addRef} type="checkbox"  id="italienne" value="italienne" />

          <label htmlFor="malagasy">Malagasy</label>
          <input ref={addRef}  type="checkbox" name="malagasy" id="malagasy" value="malagasy" />

          <label htmlFor="france">Francaise</label>
          <input ref={addRef}  type="checkbox" name="france" id="france" value="Francaise" />

          <label htmlFor="japon">Japonaise</label>
          <input ref={addRef} type="checkbox" name="japon" id="japon" value="Japonaise" />

          <div className="container-nav-btns">
              <button type='button' onClick={handlerPrevent}>Précedent</button>
              <button>Valider</button>
          </div>
    </form>
  )
}
