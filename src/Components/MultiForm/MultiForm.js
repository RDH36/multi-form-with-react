import React, { useState } from 'react'
import Indicator from './Indicator/Indicator'
import CardBegin from './Infos/CardBegin'
import CardEnd from './Infos/CardEnd'
import './MultiForm.css'
import Formdiet from './SubForms/Formdiet'
import FormFoodStyle from './SubForms/FormFoodStyle'
import FormAllegies from './SubForms/FormAllergies'
import FormPrefs from './SubForms/FormPrefs'

export default function MultiForm() {
    const [formIndex, setFormIndex] = useState(1);
    const [allFromData, setAllFromData] = useState({
        dietForm: "",
        foodStyle: [],
        allegies: [],
        prefs: {}
    })

    const modifyIndex = (index, data) => {
        setFormIndex(index)

        if (data) {
            const newData = { ...allFromData }
            const firstPropNewData = Object.keys(data)[0];

            newData[firstPropNewData] = data[firstPropNewData];
            setAllFromData(newData);
        }
    }
       console.log(allFromData);
  return (
    <div className='container-multiform'>
          <Indicator formIndex={formIndex}/>
        {formIndex === 1 ? <CardBegin modifyIndex={modifyIndex} />
        : formIndex === 2 ? <Formdiet modifyIndex={modifyIndex} />
        : formIndex === 3 ? <FormFoodStyle modifyIndex={modifyIndex} />
        : formIndex === 4 ? <FormAllegies modifyIndex={modifyIndex}/>
        : formIndex === 5 ? <FormPrefs modifyIndex={modifyIndex} />
        : formIndex === 6 && <CardEnd modifyIndex={modifyIndex}/>}
          
    </div>
  )
}
