/*-----------Function to minimize the lines to create Element-----------*/
function tagCreate(tag,classname){
variable = document.createElement(tag);
variable.className = classname || "";
return variable;
}
/*------------------------ Outer Container----------------------*/
let outerContainer = tagCreate('div', 'container');
outerContainer.setAttribute('id','outerContainer');
let middleContainer = tagCreate('div', 'middleContainer');
middleContainer.setAttribute('id','middleContainer')
let innerContainer = tagCreate('div', 'innerContainer');
innerContainer.setAttribute('id','innerContainer');

/*---------------------Input / Output Container ----------------------*/

//Output Container
let result = tagCreate('div','innerContent');
result.setAttribute('id','result');

//Input Container

let entryDiv = tagCreate('div','innerContent');
entryDiv.setAttribute('id','entryDiv');


/*------------------------label to print O/P--------------------*/
let outputDiv = tagCreate('div','IOdiv');
outputDiv.setAttribute('id','outputdiv');

let outPut = tagCreate('input','input');
outPut.setAttribute('id', 'outPut');
outPut.setAttribute('disabled','disabled')

/*---------------Text Box to print I/P-----------------*/
let inputDiv = tagCreate('div','IODiv');
inputDiv.setAttribute('id','inPutDiv');

let inPut = tagCreate('input','input');
inPut.setAttribute('id','input');
inPut.setAttribute('disabled','disabled')



/*--------------Rows to Append Button------------------*/
let row1 = tagCreate('div','row');
row1.setAttribute('id','row1');
let row2 = tagCreate('div','row');
row2.setAttribute('id','row2');
let row3 = tagCreate('div','row');
row3.setAttribute('id','row3');
let row4 = tagCreate('div','row');
row4.setAttribute('id','row4');

/*--------------------Buttons--------------------------*/

//-------------->Row1

//Button7
let button7 = tagCreate('input','button');
button7.setAttribute('type','button');
button7.setAttribute('value','7');
button7.setAttribute('id','seven');//row1
button7.setAttribute('onclick','display(button7.value)');

//Button8
let button8 = tagCreate('input','button');
button8.setAttribute('type','button');
button8.setAttribute('value','8');
button8.setAttribute('id','eight');//row1
button8.setAttribute('onclick','display(button8.value)');

//Button9
let button9 = tagCreate('input','button');
button9.setAttribute('type','button');
button9.setAttribute('value','9');
button9.setAttribute('id','nine');//row1
button9.setAttribute('onclick','display(button9.value)');

//Button11
let button11 = tagCreate('input','button');
button11.setAttribute('type','button');
button11.setAttribute('value','*');
button11.setAttribute('id','x');//row1
button11.setAttribute('onclick','intialValidation(button11.value)');

//----------->Row2

//Button4
let button4 = tagCreate('input','button');
button4.setAttribute('type','button');
button4.setAttribute('value','4');
button4.setAttribute('id','four');//row2
button4.setAttribute('onclick','display(button4.value)');

//Button5
let button5 = tagCreate('input','button');
button5.setAttribute('type','button');
button5.setAttribute('value','5');
button5.setAttribute('id','five');//row2
button5.setAttribute('onclick','display(button5.value)');


//Button6
let button6 = tagCreate('input','button');
button6.setAttribute('type','button');
button6.setAttribute('value','6');
button6.setAttribute('id','six');//row2
button6.setAttribute('onclick','display(button6.value)');


//Button13
let button13 = tagCreate('input','button');
button13.setAttribute('type','button');
button13.setAttribute('value','-');
button13.setAttribute('id','-');//row2
button13.setAttribute('onclick','intialValidation(button13.value)');

// ------------>Row3

// Button1
let button1 = tagCreate('input','button');
button1.setAttribute('type','button');
button1.setAttribute('id','one');//row3
button1.setAttribute('value','1')
button1.setAttribute('onclick','display(button1.value)');

// Button3
let button3 = tagCreate('input','button');
button3.setAttribute('type','button');
button3.setAttribute('value','3');
button3.setAttribute('id','three');//row3
button3.setAttribute('onclick','display(button3.value)');

// Button2
let button2 = tagCreate('input','button');
button2.setAttribute('type','button');
button2.setAttribute('value','2');
button2.setAttribute('id','two');//row3
button2.setAttribute('onclick','display(button2.value)');

// Button14
let button14 = tagCreate('input','button');
button14.setAttribute('type','button');
button14.setAttribute('value','+');
button14.setAttribute('id','plus');//row3
button14.setAttribute('onclick','intialValidation(button14.value)');

//----------------->Row4

// Button10
let button10 = tagCreate('input','button');
button10.setAttribute('type','button');
button10.setAttribute('value','c');
button10.setAttribute('id','clear');//row4
button10.setAttribute('onclick','clearscreen()');

// Button12
let button12 = tagCreate('input','button');
button12.setAttribute('type','button');
button12.setAttribute('value','/');
button12.setAttribute('id','divide');//row4
button12.setAttribute('onclick','intialValidation(button13.value)');

// Button15
let button15 = tagCreate('input','button');
button15.setAttribute('type','button');
button15.setAttribute('value','=');
button15.setAttribute('id','equal');//row4
button15.setAttribute('onclick','answer(temp)');

// Button16
let button16 = tagCreate('input','button');
button16.setAttribute('type','button');
button16.setAttribute('value','0');
button16.setAttribute('id','zero');//row4
button16.setAttribute('onclick','display(button16.value)');

/*-----------------Appending the HTML element--------*/

document.body.append(outerContainer);
outerContainer.append(middleContainer);
middleContainer.append(innerContainer);
innerContainer.append(result,entryDiv);
result.append(outputDiv,inputDiv);

outputDiv.append(outPut);
inputDiv.append(inPut);


entryDiv.append(row1,row2,row3,row4)
row1.append(button7,button8,button9,button11);
row2.append(button4,button5,button6,button13);
row3.append(button3,button2,button1,button14);
row4.append(button16,button12,button10,button15);


/*------------Program for Calculater----------------*/
let temp ="";

//Subfunction for validation

function intialValidation(val){
    if (temp.split("").length > 0)
    display(val);
    else
    alert("Incorrect Format, expression should start with numeric")
}

function answerwithoutvalue(val){
    if (temp.split("").length > 0)
    answer(val);
    else
    outPut.value = 'No Input Given'
}


// Button Function
function display(val){
temp = temp + val;
inPut.value = temp;
}

// Clear Function

function clearscreen(){
    console.log("clear function");
outPut.value = "";
inPut.value = "";
temp = "";
}

// Answer Function

function answer(val){
console.log('execution suceeded');
outPut.value = `Answer is ${eval(val)}`;
}

