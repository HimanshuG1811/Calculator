let Screen= document.getElementById('Screen');
buttons= document.querySelectorAll('button');
let ScreenValue= '';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log('Button text is',buttonText)
        if (buttonText=='*'){
            buttonText='*';
            ScreenValue += buttonText
            Screen.value = ScreenValue;
        }
        else if (buttonText =='C'){
            ScreenValue = " ";
            Screen.value = ScreenValue;
        }
        else if (buttonText=='='){
          Screen.value = eval(ScreenValue);     
        }
        else{
            ScreenValue += buttonText;
            Screen.value =ScreenValue;
        }
    })
}