import React, { useState } from 'react'
import './SubForm.css'

export default function FormPrefs({ modifyIndex }) {
    const [formData, setFromData] = useState({
        prefs: {
            prefered: '',
            hated:''
        }
    })

    const handleChange = (e, pref) => {
        if (pref === "prefered") {
            setFromData({
                prefs: {
                    ...formData.prefs,
                    prefered: e.target.value
                }
            })
        } else if(pref === "hated"){
            setFromData({
                prefs: {
                    ...formData.prefs,
                    hated: e.target.value
                }
            })
        }
    }

    const handlerSubmit = e => {
        e.preventDefault()
        modifyIndex(6, formData)
    }

    const handlerPrevent = () => {
        modifyIndex(4)
    }

  return (
      <form className='preferences-form' onSubmit={handlerSubmit}>
        <p>Parle-nous des aliments que que tu préféres et et que détestes !</p>

        <label htmlFor="prefered">Tes aliments préfférés, séparés par une virgule:</label>
        <textarea onChange={e => handleChange(e, "prefered")} id="prefered" placeholder='Un ou plusieurs, si tu as en as'></textarea>
          
        <label htmlFor="hated">Les aliments que tu ne supportes pas, séparés par une virgule:</label>
        <textarea onChange={e => handleChange(e, "hated")} id="hated" placeholder='Un ou plusieurs, si tu as en as'></textarea>
        
        <div className="container-nav-btns">
            <button type='button' onClick={handlerPrevent}>Précedent</button>
            <button>Terminer</button>
        </div>
    </form>
  )
}
