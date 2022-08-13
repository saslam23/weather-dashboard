import React, {useEffect} from 'react'
import "./value-card.css"

export default function ValueCard({title, value, icon}) {
  useEffect(() => {
  

    return () => {
      
    }
  }, [value])
  
  return (
    <div >
         <h2>{title}</h2>
         <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', paddingTop:'3rem'}}>
        <div >{icon}</div>
      <h3>{value}</h3>
      </div>
    </div>
  )
}
