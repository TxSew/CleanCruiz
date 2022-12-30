import React from "react"

function Images({src, alt, classname}){
  return(
    <img  src={src} alt={alt} className={ classname   } />
    
    )
}

export default Images
