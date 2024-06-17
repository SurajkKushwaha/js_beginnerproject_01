
let submit = document.querySelector(".submit")
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    const heights = parseInt(document.querySelector("#heights").value)
   // console.log(heights);
    const weights = parseInt(document.querySelector("#weights").value)
   // console.log(height,weight);
   const result = document.querySelector(".result")
   if(heights ===""|| heights<0 ||isNaN(heights)){
    result.style.display = "block"
    result.innerHTML= "please give a valid height"
   }
 else if(weights ===""|| weights<0 ||isNaN(weights)){
     result.style.display = "block"
    result.innerHTML= "please give a valid weight"
   }
   else{
    result.style.display = "block"
      const bmi =(weights/((heights*heights)/10000)).toFixed(2)

      result.innerHTML= `<h2>${bmi}</h2>`
   }
})


