



//Select element function
const selectElement = function(element) {
          return document.querySelector(element);
}
  
  
let displayInfo = selectElement(".display")

let btn = selectElement(".submit")

btn.addEventListener("click", func)

function func() {
          let name = selectElement(".input").value

          displayInfo.innerHTML =  name
}