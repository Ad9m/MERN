import {useParams }from "react-router"

const Number =() =>
{
    const {color} =useParams("")
    const {bgcolor} =useParams("")
    const {number} =useParams("")
    
        if (isNaN(number)){
            return <div style ={{backgroundColor : bgcolor , color:color}}>The Word is : {number}</div>
        }
        
            return (
                
                <div>The Number is {number}</div>
             ) 
        }
       
        
export default Number;