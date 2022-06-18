import React,{useState} from "react";
import "./User.css"
import UserDisplay from "./UserDisplay";
import Wrapper from "./UI/Wapper";
import ErrorPopUp from "./UI/ErrorPopUp"


const in_users=new Array({
   name:'mahadeva',
   age:10000000
});

const User=(props)=>{
   const [userName,setuserName]=useState('')
   const [userAge,setUserAge]=useState('');    
   const [users,setusers]=useState(in_users);
   const [error,setErrorMessage]=useState('');


   const ButtonHandler=(evt)=>{
      evt.preventDefault();
      console.log(evt)
      console.log('hello from button')
      

   }
  
   
  
   const SubmitHandler=(evt)=>{
      console.log(evt)
      evt.preventDefault();
      const arr1={name:userName,age:userAge}
      setusers((prev)=>{
         return [...prev,arr1]
   })
   console.log(users);
    
   if(userName.trim().length===0){
      setErrorMessage({
         title:"invalid input",
         content:"enter a valid name :(" 
      })
    
      
      //console.log(a);
     }

     if(userAge.trim().length===0 || parseInt(userAge)<0){
         
      setErrorMessage({
         title:"invalid input",
         content:"enter a valid age:(" 
      })
      }  
                        
      
      //console.log("hello from form");
      setUserAge('');
      
      setuserName('');
   }

   const userNameChange=(evt)=>{
     let a=evt.target.value;
   //   if(a.trim().length===0 ){
   //   return;  
   // }
     setuserName(a);
      evt.preventDefault();
     
     
      
   }
   

   const userAgeChange=(evt)=>{
      
      let a=evt.target.value;
     
      // if(a.trim().length===0 || parseInt(a)<0){
      // return;
      // }
    
      //setUserAge(a);
      //console.log(a);
     
      setUserAge(a);
      evt.preventDefault();

   }

   const errorHandle=()=>{
      setErrorMessage(null);
   }


   return (
      <div>
      {error && <ErrorPopUp title={error.title} onClick={errorHandle} content={error.content} />}   
   <div className="Wrapper" >
    <form className="form-control" onSubmit={SubmitHandler} style={{backgroundColor:'white'}}>
     <div className="UserName">
      <label htmlFor="userName"> UserName </label>
      <input type="text" id="userName" value={userName} onChange={userNameChange} placeholder="enter the username "></input>
      </div>
      <div className="Age">
      <label htmlFor="Age">Age</label>
      <input type="number" id="Age"  placeholder="Enter the Age in years" value={userAge} onChange={userAgeChange}></input>
      </div>
      <div>
      <button type="submit" onSubmit={ButtonHandler}>Add User</button>
      </div>
     
      {/* <p>{users[0].name}</p>
    <p>hello</p> */}
    </form>
    
   <Wrapper>
      
      {users.map((allusers)=> (<UserDisplay 
      key={allusers.name}
      name={allusers.name}
      age={allusers.age}
      />)
)}
         
</Wrapper>

   </div>

   </div>
   )


}

export default User;