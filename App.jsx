import { useState } from "react";
import './Style.css';

const App=()=>{
  const [password,setpassword]=useState('');
  const [length,setlength]=useState(8);
  const [includenumbers,setincludenumbers]=useState(true);
  const [includecharacter,setincludecharacter]=useState(true);
  const [includespecialvalue,setincludespecialvalue]=useState(true);

  const passwordgenerator=()=>{
    const numbers='0123456789'
    const character='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const specialchar='!@#$%^&*()_+'
  
   let pass=character;
   if(includenumbers){
    pass+=numbers
   }
   if(includespecialvalue){
    pass+=specialchar
   }
   let newpassword='';
   for (let i=0;i<length;i++){
    const index=Math.floor(Math.random()*pass.length);
    newpassword+=pass.charAt(index);
   }
   
   setpassword(newpassword)
  
  };

 


  return(
    <div className='password-generator'>
    <h1>Password Generator</h1>
    <div>
    <label >Password Length</label>
    <br />
    <input type="number" value={length} onChange={(e)=>setlength(e.target.value)}  />
    </div>
    <div>
      <label > Include numbers</label>
      <input type="checkbox" checked={includenumbers} onChange={()=>setincludenumbers(!includenumbers)} />
    </div>
    <div>
      <label >Include Special Character</label>
      <input type="checkbox" checked={includespecialvalue} onChange={()=>setincludespecialvalue(!includespecialvalue)} />
    </div>
    <button onClick={passwordgenerator}>Password generate</button>
    <br />
    <label >Generated Password</label>
    <input type="text" value={password} readOnly />
    </div>
  )
  }
export default App