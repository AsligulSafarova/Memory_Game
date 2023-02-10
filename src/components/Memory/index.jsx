import React,{useState , useEffect}from 'react';
import SingleCard from '../SingleCard';
import s from "./style.module.sass";

const cardImages = [
  {"src":"/img/helmet-1.png",matched:false},
  {"src":"/img/potion-1.png",matched:false},
  {"src":"/img/ring-1.png",matched:false},
  {"src":"/img/scroll-1.png",matched:false},
  {"src":"/img/shield-1.png",matched:false},
  {"src":"/img/sword-1.png",matched:false,}
]

export default function Memory() {
  const [cards, setcards] = useState([]);
  const [turns,setTurns] = useState(0);
  const [choiseOne, setchoiseOne] = useState(null)
  const [choiseTwo, setchoiseTwo] = useState(null)
 /*  const [disable, setDisable] = useState(false) */
 console.log(cards);

  const shuffleCards = ()=>{
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(()=>Math.random() - 0.5)
    .map((card)=>({...card, id:Math.random()}))
   /*  setchoiseOne(null)
    setchoiseTwo(null) */
    setcards(shuffledCards)
    setTurns(0)
     
  };

 const handleChoise =(card)=>{
 choiseOne? setchoiseTwo(card):setchoiseOne(card)
  }

  useEffect(()=>{
    if(choiseOne && choiseTwo){
 /*      setDisable(true) */
      if(choiseOne.src === choiseTwo.src){
        setcards(prevCards =>{
          return prevCards.map(card=>{
            if(card.src === choiseOne.src){
              return {...card, matched: true }
            }else{
              return card
            }
          })
        })
       resetTurn()
      }else{
        setTimeout(()=>resetTurn(),1000)
      }
    }
  },[choiseOne,choiseTwo])

  const resetTurn =()=>{
    setchoiseOne(null)
    setchoiseTwo(null)
    setTurns(prevTurns => prevTurns +1);
    /* setDisable(false) */
  };
/*   useEffect(()=>{
    shuffleCards()
  },[]) */

  return (
    <div className= {s.container}>
        <div className= {s.info}>
        <h1 className= {s.h1}>magic Match</h1>
        <button className= {s.butt}  onClick = {shuffleCards}>New game</button>  
        </div>
        <div className= {s.backs_photo} >
          {
            cards.map(card=>(<SingleCard 
              key={card.id}  card = {card} handleChoise = { handleChoise } 
              flipped = {card === choiseOne || card === choiseTwo || card.matched }
           /*    disable = {disable} */
              />))
          }
          <p>{turns}</p>

        </div>
    </div>
  )
}
