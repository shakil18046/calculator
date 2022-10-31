let str = "";
const display = document.getElementById("input")
document.getElementById("item").addEventListener("click",(e)=>{
    let number = e.target.innerText;
    if (e.target.innerText == "C") {
        if (isNaN("c")) {
            display.value = " ";
            return
        }    
    }
    if (e.target.innerText == "=") {
        let val = display.value = (eval(str));
        str = val             
        }else {
            const inputValue =  display.value += number;
            str=inputValue
        }
    
    
})
