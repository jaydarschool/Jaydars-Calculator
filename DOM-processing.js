    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script>
        var $num1In = $("#num1In");
        var $operIn = $("#operIn");
        var $num2In = $("#num2In");
        var $calcBtn = $("#calcButton");
        var $probTxt = $("#probDiv");
        var $resBtn = $("#resButton");
        var $histr = $("#hist");
        var $clrBtn = $("#clearButton");
        
        var onSub = function() { //this function estimates the problem
            if (parseFloat($num1In.val()) === 0 || parseFloat($num2In.val()) === 0 && $operIn.val() === "divis") { //if the operation is division and you try to put in a 0 anywhere:
                reset(); //reset the form
                window.alert("Dividing with 0 doesn't work, nice try."); //give the user an error
            } else if ($num1In.val() === "" || $num2In.val() === "") { //but then if at least one number value is empty:
                reset(); //reset the form
                window.alert("Sorry, you gotta input 2 numbers. That's just the rules."); //give the user an error
            } else { //otherwise, if there's no errors;
                $probTxt.text($num1In.val()); //changes the problem's text to the first number
                var operStr; //this is the variable for the operation, turned into a string, and this variable will be used a sec, literaly
                if ($operIn.val() === "addit") { //if the operation is addition:
                    operStr = " + "; //set the value of operStr to the + sign
                } else if ($operIn.val() === "subtr") { //but then if the operation is subtraction:
                    operStr = " - "; //set the value of operStr to the - sign
                } else if ($operIn.val() === "multi") { //but then if the operation is multiplication:
                    operStr = " x "; //set the value of operStr to the multiplication sign
                } else { //otherwise, the operation must be division, so:
                    operStr = " / "; //set the value of operStr to the division sign
                }
                $probTxt.append(operStr); //now add the value of operStr to the problem
                
                $probTxt.append($num2In.val() + " = "); //and then add the second number to the problem
                
                var ans; //now make a variable containing the answer, used in a sec, literally, again.
                if ($operIn.val() === "addit") { //if the operation is addition:
                    ans = parseFloat(parseFloat($num1In.val()) + parseFloat($num2In.val())); //the answer equals the first number plus the second number
                } else if ($operIn.val() === "subtr") { //but then if the operation is subtraction:
                    ans = parseFloat(parseFloat($num1In.val()) - parseFloat($num2In.val())).toString(); //the answer equals the first number minus the second number
                } else if ($operIn.val() === "multi") { //but then if the operation is multiplication:
                    ans = parseFloat(parseFloat($num1In.val()) * parseFloat($num2In.val())).toString(); //the answer equals the first number times the second number
                } else { //otherwise, the operation must be division, so:
                    ans = parseFloat(parseFloat($num1In.val()) / parseFloat($num2In.val())).toString(); //the answer equals the first number divided by the second number
                }
                
                $probTxt.append(ans); //finally, add the answer to the problem
                $histr.append("<br>" + $num1In.val() + operStr + $num2In.val() + " = " + ans);
            }
        };
        
        var reset = function() { //this function just sets all the values to the defaults
            $num1In.val("");
            $operIn.val("addit");
            $num2In.val("");
        }
        
        var clear = function() {
            $probTxt.text("(Math Problem Goes Here...)");
        }
        
        $calcBtn.on("click", onSub);
        $resBtn.on("click", reset);
        $clrBtn.on("click", clear);
    </script>
