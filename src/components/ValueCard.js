import React from 'react'

export default function ValueCard({title, value, icon}) {
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
