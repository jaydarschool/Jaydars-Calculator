    <script>
        //don't worry too much about these variables
        var num1In = document.getElementById("num1In");
        var operIn = document.getElementById("operIn");
        var num2In = document.getElementById("num2In");
        var calcBtn = document.getElementById("calcButton");
        var probTxt = document.getElementById("probDiv");
        var resetBtn = document.getElementById("resButton");
        var histr = document.getElementById("hist");
        var clrBtn = document.getElementById("clearButton");
        
        var onSub = function() { //this function estimates the problem
            if (parseFloat(num1In.value) === 0 || parseFloat(num2In.value) === 0 && operIn.value === "divis") { //if the operation is division and you try to put in a 0 anywhere:
                reset(); //reset the form
                window.alert("Dividing with 0 doesn't work, nice try."); //give the user an error
            } else if (num1In.value === "" || num2In.value === "") { //but then if at least one number value is empty:
                reset(); //reset the form
                window.alert("Sorry, you gotta input 2 numbers. That's just the rules."); //give the user an error
            } else { //otherwise, if there's no errors;
                probTxt.textContent = num1In.value; //changes the problem's text to the first number
                var operStr = ""; //this is the variable for the operation, turned into a string, and this variable will be used a sec, literaly
                if (operIn.value === "addit") { //if the operation is addition:
                    operStr = " + "; //set the value of operStr to the + sign
                } else if (operIn.value === "subtr") { //but then if the operation is subtraction:
                    operStr = " - "; //set the value of operStr to the - sign
                } else if (operIn.value === "multi") { //but then if the operation is multiplication:
                    operStr = " x "; //set the value of operStr to the multiplication sign
                } else { //otherwise, the operation must be division, so:
                    operStr = " / "; //set the value of operStr to the division sign
                }
                probTxt.textContent += operStr; //now add the value of operStr to the problem
                
                probTxt.textContent += num2In.value + " = "; //and then add the second number to the problem
                
                var ans = 0; //now make a variable containing the answer, used in a sec, literally, again.
                if (operIn.value === "addit") { //if the operation is addition:
                    ans = parseFloat(num1In.value) + parseFloat(num2In.value); //the answer equals the first number plus the second number
                } else if (operIn.value === "subtr") { //but then if the operation is subtraction:
                    ans = num1In.value - num2In.value; //the answer equals the first number minus the second number
                } else if (operIn.value === "multi") { //but then if the operation is multiplication:
                    ans = num1In.value * num2In.value; //the answer equals the first number times the second number
                } else { //otherwise, the operation must be division, so:
                    ans = num1In.value / num2In.value; //the answer equals the first number divided by the second number
                }
                
                probTxt.textContent += ans; //finally, add the answer to the problem
                histr.innerHTML += "<br>" + num1In.value + operStr + num2In.value + " = " + ans;
            }
        };
        
        var reset = function() { //this function just sets all the values to the defaults
            num1In.value = "";
            operIn.value = "addit";
            num2In.value = "";
        }
        
        var clear = function() {
            probTxt.textContent = "(Math Problem Goes Here...)";
        }
        
        
        calcBtn.addEventListener("click", onSub); //now, if the calculate button is pressed, calculate the problem
        
        clrBtn.addEventListener("click", clear);
        
        resetBtn.addEventListener("click", reset); //now, if the reset button is pressed, set all the values to defaults
    </script>
