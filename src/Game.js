import React from "react";
import  "./Components/gameStyle.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import Screenshots from "./Screenshots"


const Game = ({name,id,rating,img,screenshots,...rest}) => {


    const handleDeleteGame = ()=> {

const filteredGames=rest.gameList.filter( (game) => game.id !== id)
rest.setGameList(filteredGames)


    }


return (

<div className="gameCard">
<p> {name}</p>
<img src={img} alt={name}/>
<p>Rating : {rating} <button className="deleteButton" onClick={handleDeleteGame}>Delete</button></p>
<Link  to={`/screenshots/${id}`} >
  <button >Screenshots</button>
</Link>





</div>
)
}

export default Game;