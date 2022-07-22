import React from 'react'
import healthy from './icons/healthy.svg'
import diet from './icons/diet.svg'
import love from './icons/love.svg'
import thumb from './icons/thumb.svg'
import allergy from './icons/allergy.svg'
import './Indicator.css'

export default function Indicator({formIndex}) {
    const preferences = [healthy, love, allergy, diet, thumb];
  return (
    <div className='container-indicator'>
          <div className="container-lines">
              <div className="line upper-line" style={{
                width: formIndex === 1 ? "0%" 
                : formIndex === 2 ? "0%" 
                : formIndex === 3 ? "25%" 
                : formIndex === 4 ? "50%" 
                : formIndex === 5 ? "75%" 
                : formIndex === 6 ? "100%" :""
              }}></div>
              <div className="line under-line"></div>
          </div>
          <div className="container-img">
              {preferences.map((item, index) => (
                <div key={index} className="bloc-img">
                  <img src={item} alt=""/>
                </div> 
              ))}
              
          </div>
    </div>
  )
}
