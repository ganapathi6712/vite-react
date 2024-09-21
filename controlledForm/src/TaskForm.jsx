import React, { useRef, useState } from 'react'

const TaskForm = () => {

   let output = useRef();

   let [state, setState] = useState({
      fname: "",
      lname: "",
      number: "",
      mail: "",
      gender: "",
      education:"",
      language:[],

      ffname: "",
      flname: "",
      fnumber: "",
      fmail: "",
      fgender: "",
      feducation:"",
      flanguage:[],
   });

   let { fname, lname, number, mail,gender,education ,language} = state
   let handleOnChange = (e) => {
      let { name, value } = e.target;
      setState((pre) => {
         return {
            ...pre,
            [name]: value
         }
      })
   }

   let handleSubmit = (e) => {
      e.preventDefault();
      // console.log(state);
      output.current.innerHTML = `
         <p>First Name : ${fname}</p>
         <p>Last name : ${lname}</p>
         <p>Phone : ${number}</p>
         <p>Email : ${mail}</p>
         <p>Gender : ${gender}</p>
         <p>Education : ${education}</p>
         <p>Language : ${language}</p>
         
         

      `;

      setState = {

         ffname:fname,
      flname:lname,
      fnumber:number,
      fmail:mail,
      fgender:gender,
      feducation:education,
      flanguage:language,


      fname: "",
         lname: "",
         number: "",
         mail: "",
         gender: "",
         education:"",
         language:[],

      }


   }

let handleCheckBox=((e)=>{
   let { name, value } = e.target;
   if (e.target.checked) {
     
      setState((pre) => {
         return {
            ...pre,
            language : [...pre.language,value]
         }
      })
   } else {
      
      setState((pre) => {
         return {
            ...pre,
            language:pre.language.filter(lan=>lan!==value)
         }
      })
   }
})

   return (
      <div className='maindiv'>

         <form onSubmit={handleSubmit}>
            <div>
               <label htmlFor="fname">First Name</label>
               <input type="text" name="fname" id="fname" onChange={handleOnChange} />
            </div>
            <div>
               <label htmlFor="lname">Last Name</label>
               <input type="text" name="lname" id="lname" onChange={handleOnChange} />
            </div>
            <div>
               <label htmlFor="number">Phone Number</label>
               <input type="number" name="number" id="number" onChange={handleOnChange} />
            </div>
            <div>
               <label htmlFor="mail">Mail</label>
               <input type="text" name="mail" id="mail" onChange={handleOnChange} />
            </div>
            <div>
               <label htmlFor="gender">Gender</label>
               <input type="radio" name="gender" value="male" id="gender" onChange={handleOnChange} />Male
               <input type="radio" name="gender" value="female" id="gender" onChange={handleOnChange} />Female
            </div>
            <div>
            <label htmlFor="">Course</label>
            <select name="education" id="" onChange={handleOnChange}>
                <option value="">Select the option</option>
                <option value="B.Sc">B.Sc</option>
                <option value="BCA">BCA</option>
                <option value="BBA">BBA</option>
            </select>
         </div>
         <div>
            <label htmlFor="language">Language</label>
            <input type="checkbox" name="language" value="english"  onChange={handleCheckBox}/>English
            <input type="checkbox" name="language"  value="telugu " id="" onChange={handleCheckBox} />Telugu
            <input type="checkbox" name="language" value="kannada " id="" onChange={handleCheckBox} />Kannada
            <input type="checkbox" name="language" value="hindi " id="" onChange={handleCheckBox}/>Hindi
            <input type="checkbox" name="language" value="others " id="" onChange={handleCheckBox} />Others
         </div>
            <div>
               <button>Submit</button>
            </div>

         </form>

         <div className='dataform'> 
            <h1 className="fh1">Form Data</h1>
            <h1>Name:{fname}</h1>
            <h1>Last LNme:{fname}</h1>
            <h1>Number:{number}</h1>
            <h1>Mail:{mail}</h1>
            <h1>Gender:{gender}</h1>
            <h1>Education:{education}</h1>
            <h1>Language:{language}</h1>
         </div>
         <div className='refdiv'>
            <h1 className="fh1">Data Base</h1>
         <div ref={output} >
         </div>
         </div>
      </div>



   )
}

export default TaskForm