         const display=document.getElementById("display");
         function appendtodisplay(input){
          display.value += input;
         }
         function cleardisplay(){
          display.value="";
         }
         function deletelast(){
          display.value=display.value.slice(0,-1);
         }
         function calculate(){
          try{
            display.value=eval(display.value);
          }
          catch(error){
            display.value="Error";
          }
         }
         document.addEventListener("keydown",(event)=>{
          const key=event.key;
          if(!isNaN(key) || ['=','+','-','*','/','.','%'].includes(key)){
            appendtodisplay(key);
          }
          if(key==="Enter")calculate();
          if(key==="Backspace")deletelast();
          if(key==="Escape")cleardisplay();
         });