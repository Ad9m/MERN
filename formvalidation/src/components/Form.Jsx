import React, {useState} from 'react'
import Display from './Display'
let newUser = {
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    confirmPassword:""

}
const Form = (props) => {
    // ! Every input must have a State variable
    const [firstname,setFirstname] = useState("")
    const [lastname,setLastname] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [username,setUsername] = useState("")
    const [firstnameError, setFirstnameError] = useState(false)
    const [lastnameError, setlastnameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [confirmPasswordError, setConfirmPasswordError] = useState(false)
    const formHandler = (e)=>{
        e.preventDefault()
        console.log("Form Submitted 🧨🎇");
        newUser = {
            firstname:firstname,
            lastname:lastname,
            email:email,
            password:password,
            confirmPassword:confirmPassword
        }
        console.log(newUser);
        setFirstname("")
        setLastname("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }
    // Username Validation 
    const handleFirstname = (e)=>{
        e.preventDefault()
        setFirstname(e.target.value)
        console.log("The value = ", e.target.value);
        if(e.target.value.length<3 ) { 
            console.log("Username must be more than 3 ");
            setFirstnameError(true)
        }
        else{
            setFirstnameError(false)
            console.log("Username is more than 3🎈 ");
        }
    }
    const handleLastname = (e)=>{
        e.preventDefault()
        setLastname(e.target.value)
        console.log("The value = ", e.target.value);
        if(e.target.value.length<3 ) { 
            console.log("Username must be more than 3 ");
            setLasrtnameerror(true)
        }
        else{
            setLastnameError(false)
            console.log("Username is more than 3🎈 ");
        }
    }
    const handleEmail = (e)=>{
        e.preventDefault()
        setEmail(e.target.value)
        console.log("The value = ", e.target.value);
        if(e.target.value.length<5 ) { 
            console.log("Email must be more than 5 ");
            setEmailError(true)
        }
        else{
            setEmailError(false)
            console.log("mail is more than 5🎈 ");
        }
    }
    const handlePassword = (e)=>{
        e.preventDefault()
        setPassword(e.target.value)
        console.log("The value = ", e.target.value);
        if(e.target.value.length<8 ) { 
            console.log("Username must be more than 3 ");
            setPassword(true)
        }
        else{
            setPassword(false)
            console.log("Username is more than 3🎈 ");
        }
    }
    const handleConfirmPassword = (e)=>{
        e.preventDefault()
        setConfirmPassword(e.target.value)
        console.log("The value = ", e.target.value);
        if(password!==confirmPassword ) { 
            console.log("Username must match ");
            setConfirmPassword(true)
        }
  return (
    <fieldset>
        <legend>From.jsx</legend> 
        <p>Firstname : {JSON.stringify(firstname)}</p> 
        <p>Lastname : {JSON.stringify(lastname)}</p>
        <p>Email : {JSON.stringify(email)}</p>
        <p>Password : {JSON.stringify(password)}</p>
        <p>ConfirmPassword : {JSON.stringify(confirmPassword)}</p>
        <hr />
        <form onSubmit={formHandler} >
            <div>
                <label >Firstname : </label>
                <input onChange={(e)=>{handleFirstname(e)}} value={firstname} />
                {firstnameError ? <p style={{color:"red"}}>Username must be more than 3 </p>:null}
            </div>
            <div>
                <label >Lastname : </label>
                <input onChange={(e)=>{handleLastname(e)}} value={lastname} />
                {lastnameError ? <p style={{color:"red"}}>Username must be more than 3 </p>:null}
            </div>

            <br />
            <div>
                <label >Email : </label>
                <input onChange={(e)=>{handleEmail(e.target.value)}} value={email}/> 
                {emailError ? <p style={{color:"red"}}>Email must be more than 5 </p>:null}
            </div>
            <br />
            <div>
                <label >Password : </label>
                <input onChange={(e)=>{handlePassword(e.target.value)}} value={password}/> 
                {passwordError ? <p style={{color:"red"}}>password must be more than 8 </p>:null}
            </div>
            <div>
                <label >ConfirmPassword : </label>
                <input onChange={(e)=>{handleConfirmPassword(e.target.value)}} value={password}/> 
                {confirmPasswordError ? <p style={{color:"red"}}>Password must match </p>:null}
            </div>
            
            <br />
            <input type="submit" value="Create User" />
        </form>
        <Display user={newUser}/>
    </fieldset>
  )
}

export default Form;