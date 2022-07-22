import React, { useRef } from 'react'
import './SubForm.css'

export default function FormFoodStyle({ modifyIndex }) {
    const allCheckbox = useRef([]);

    const handlerSubmit = e => { 
        e.preventDefault()
        const allegie = {
            allegies: []
        }

        allCheckbox.current.forEach(item => {
            item.checked && allegie.allegies.push(item.value)
        })
        modifyIndex(5, allegie)
    }

    const handlerPrevent = () => {
        modifyIndex(3)
    }

    const addRef = el => {
        if (el && !allCheckbox.current.includes(el)) {
            allCheckbox.current.push(el);
        }
    }
  return (
    <form onSubmit={handlerSubmit} className="checkbox-form">
          <p>As-tu des allegies?</p>
          <span>Choix multiples.</span>
          <label htmlFor="lait">Lait</label>
          <input ref={addRef} type="checkbox"  id="lait" value="lait" />

          <label htmlFor="pollen">Pollen</label>
          <input ref={addRef}  type="checkbox" name="pollen" id="pollen" value="pollen" />

          <label htmlFor="noix">Noix</label>
          <input ref={addRef}  type="checkbox" name="noix" id="noix" value="noix" />

          <label htmlFor="ouefs">Ouefs</label>
          <input ref={addRef} type="checkbox" name="ouefs" id="ouefs" value="ouefs" />

          <div className="container-nav-btns">
              <button type='button' onClick={handlerPrevent}>Précedent</button>
              <button>Valider</button>
          </div>
    </form>
  )
}
