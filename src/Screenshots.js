import React, {useState,useEffect} from "react";
import  "./Components/gameStyle.css"
import axios from "axios"

const Screenshots = (props) => {

    const [dataGame,setDataGame]=useState([])
    const[apiGame,setApiGame]= useState([])
  const[id,setId]=useState(props.match.params.id)
    
    
  

   
    
    
    
    const apiRequest = () => {
  
        axios
        .get ("https://wild-games.herokuapp.com/api/v1")
        .then (response =>response.data)
        . then ( data => {

            const filteredCocktail =data.filter ( (game) => game.id==id)
           
            setDataGame(filteredCocktail[0]['short_screenshots'])
            setApiGame(filteredCocktail);
            })


           
            
          
          }
          
        
        
        useEffect(() => {
        
        
        apiRequest();
        
        },[])

   
    

return(

<div>
<p>Screenshots hot </p>
<p>{id}</p>



<div>

{dataGame.map((screen,i) => 

<>
<img src={screen.image} alt={screen.image}/>
</>

)}


</div>


</div>

)}



export default Screenshots;