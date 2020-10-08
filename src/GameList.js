import React, {useState, useEffect} from "react";
import Game from "./Game"
import axios from "axios"
import  "./Components/gameStyle.css"

const GameList = () => {

const [allGames,setAllGames]= useState([])
    const [gameList,setGameList]= useState([])
    const [filteringMode,setFilteringMode]=useState(false);
    


    const apiRequest = () => {
  
  axios
  .get ("https://wild-games.herokuapp.com/api/v1")
  .then (response =>response.data)
  . then ( data => {
    setAllGames(data)
    setGameList(data) })
    
    }
  
  
  useEffect(() => {
  
  
  apiRequest();
  
  },[])
  

  const displayBestGames= () => {

    const bestGames= gameList.filter((game) => game.rating > 4.5)
    setGameList(bestGames) 

setFilteringMode(!filteringMode)

  }


  const displayAllGames= () => {

    
    setGameList(allGames) 

setFilteringMode(!filteringMode)

  }


return (

    <>

    {filteringMode?  
<button className="filterButton" onClick={displayAllGames}>All Games</button> :
<button className="filterButton" onClick={displayBestGames}>Best Games</button>

}
    <div className="gameGrid">
{gameList.map ( (game) => <p key={game.id}>{<Game  name={game.name} id={game.id} rating={game.rating} img={game.background_image} gameList={gameList} setGameList={setGameList} screenshots={game.short_screenshots} />}</p> )}
</div>
</>

)

}

export default GameList;