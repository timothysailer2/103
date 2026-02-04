
//challenge
//create program for clothes based on temp
function weatherOutfit(){
   console.log("Weather Outfit");
   const DIV = document.getElementById("results");
   let tmp= prompt("Enter temp");

   DIV.classList.remove("hot","cold");
   if(tmp<15){
    DIV.innerHTML+="jacket";
    DIV.classList.add("cold");
   }
   else if (tmp>15 && tmp<26){DIV.innerHTML+="Sweater";}
   else{DIV.innerHTML+ = "t-shirt";
    DIV.classList.add("hot");
   }
        
    }