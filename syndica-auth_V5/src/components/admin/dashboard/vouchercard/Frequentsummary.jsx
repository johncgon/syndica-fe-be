import React from 'react'

const Frequentsummary = ({icon,label}) => {
  return (
    <div className="frequentsummary__container h-full w-1/3 flex flex-col justify-evenly items-center">
      <div className="frequentsummary__icon">{icon}</div>
      <p className="frequentsummary__label font-normal">{label}</p>
    </div>
  )
}

export default Frequentsummary
