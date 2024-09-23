import React from "react";

const Hocc = (Ding) => {
  let max = function () {

    function handleSubmit() {
      document.getElementById("Click").style.backgroundColor = "black";
    }


    function handleChange(){
         // document.getElementById("child1").style.backgroundColor="black"
        // document.getElementById("child2").style.backgroundColor="black"
        let child1=document.getElementById("child1")
          let child2=document.getElementById("child2")
           let button=document.getElementById("Click")
           let buttontxt=button.innerHTML
           console.log(buttontxt);
          button.innerHTML= buttontxt==="Dark ☽"?"Light ☀":"Dark ☽"

          // Child 1
          buttontxt==="Dark ☽"?child1.style.backgroundColor="black":child1.style.backgroundColor="white"
          buttontxt==="Dark ☽"?child1.style.color="white":child1.style.color="black"
          
          // Child 2
          buttontxt==="Dark ☽"?child2.style.backgroundColor="black":child2.style.backgroundColor="white"
          buttontxt==="Dark ☽"?child2.style.color="white":child2.style.color="black"
          
       
    }

   

    return <Ding data={{ name: "Shiv", age: 27, place: "bgk", func:handleChange,}}></Ding>;
  };
  return max;
};  

export default Hocc;