import React from 'react';
import s from "./style.module.sass"

export default function SingleCard({card,  handleChoise , flipped, disable}) {

    const handleClick =()=>{
     /*  if(!disable){
        
       */
  handleChoise (card)
      }
   

  return (
    <div className = {s.card}>
    <div className= {flipped ? s.flipped: ""}>
     <img src={card.src} alt="cards_photo"  className= {s.front}/>
     <img src="/img/cover.png" alt="back_photo" className= {s.back} onClick = {handleClick}/>   
    </div>    
  </div>
  )
}
