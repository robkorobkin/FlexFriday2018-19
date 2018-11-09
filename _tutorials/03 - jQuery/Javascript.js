// this document is not intended to teach but is more for reference
// there are most likely a few mistakes.


// Javascript single line comment is made with a "//"

/* This is a
Mulitiple line
comment */

//This is a 1 option alert box
alert("Your computer is being hacked!")

/* This is a varible. Varibles are made with var the = sign is 
called the assignment because it is assigning that number to the var */
var x = 10;

// what you can do with vars is something like this
document.write(x)
// which is you couldn't guess would write 10
// a var can be named anything but there are boundries. here are the naming rules

// -the FIRST character has to be a letter, an underscore(_) or a dollar sign ($)
// -numbers are not allowed as the FIRST character
// -Names cannot have mathematical terms in them such as this+that
// -Names cannot have spaces
// -No special chars like % or # etc IN THE NAME AT ALL

// There are also some reserved names you cannot use. Here is a website that
// has all of those: http://www.javascripter.net/faq/reserved.htm

//vars can be written with or without decimals
var y = 4.2;
// Ones with a decimal point are called "floating point numbers" 

// If you have more than 1 word in a var, they are called strings 
// and they need to be put in '' or "" because they contain spaces

var name = 'James';
var text = "My name is ";

// You can also put '' inside a "" or vice versa as long as they are different

var iwantquotations = '"I am the best"'
// this would output when put in a document.write "I am the best" with the quotation

// you can also use a backslash to use special characters in the string (\)
var specialcharactersomg = "\"Hello\""
// as you can see the backslash is ingnored and the character after that is treated as a normal letter

// you can also do some other stuff with a backslash for example
// \' makes a '
// \" makes a "
// \\ makes a \
// \n makes a new line
// \r simulates a enter or return key
// \t makes a tab space
// \b makes a backspace
// \f makes a form feed which is best explained as
/* Form feed is a page-breaking ASCII control character. It forces the printer to eject 
the current page and to continue printing at the top of another. Often, it will also cause a carriage return. */

// Booleans are basically true and false

var trrruuueee = true;
var faaallssee = false;

// example of how this could be used
// format: varible = (condition) vaule 1: vaule 2
var isadult = (age < 18) ? "Too young":"Old Enough"

// there is also the famous if and then state ment which takes th format of
/* if (condition) {
	statements
}

*/

if (true == false) {

	alert("Something is not right...")
}

// Make sure the if is always lower case so no IF, If or iF.
// if it is false it will ignore whatever statement and move on to the next line of code
// the next line of code is most commonly the "else" statement so if the conditions arent true or
// are undefined it will execute the else

if (true == false) {

	alert("something is not right...")
}

else {

	alert("everything is working as it should :)")
}

// if you want to check if the statement is false first you can use the else if statement

else if (true == false) {

	alert("Good")
}

else {

	alert("bad")
}

// if there are more than 2 conditions or outcomes you can use the switch statement
/* format 

switch (expression) {
	case n1:
		statements
		break;
	case n2:
		statements
		Break;
	case n3:
		statements
} */

var day =2;

switch(day) {
	case 1:
	 document.write("monday")
	 break;
	case 2:
	 document.write("tuesday")
	 break;
	case 3:
	 document.write("wednsday")
	 break;
	case 4:
	 document.write("thursday")
	 break;
	case 5:
	 document.write("friday")
}
// which the output would be tuesday
// there should be as many possible answers in a switch as you need
// you can also add a default after the final case like:
/* Default:
    document.write(error:404)  */

// then theres something called for
/* format
for (statement 1; statement 2; statement 3) {
	code block to be executed
} */

// the for loop can only consist of 3 statements

for (i=1, i<=1; i++) {
	document.write(i + "<br/>")
}

// which would output
/* 
1
2
3
4
5
*/

// you can add more than 1 vaule for statemnet 1 using commas to seperate them

// Another thing simalar is something called the while loop

/* while (condition) {
	
	code block
}
*/

var i=0;
while (i<=10) {
	document.write(i + "<br/>");
	i++;
}

/* output:
1
2
3
4
5
6
7
8
9
10
*/

// dont forget if you forget to increase the varible the loop will never end

// The do while loop
/* Format
do {
	code block
}
while (condition);
*/

var i = 20;
do {
	document.write(i +"<br/>")
	i++;
}
while(i<=25);

/* output
20
21
22
23
24
25
*/

// Break and continue
// usage:

for (i=0; i,=10; i++) {
	if (i == 5) {
		break;
	}
	document.write(i +"<br/>")
}
/* output:
1
2
3
4
5
*/

// essentially break ends the loop
// to continue use something called... ...you guessed it continue.
// usage:

for (i=0; i <= 10; i++) {
	if (i== 5) {
		continue;
	}
	document.write(i +"<br/>")
}

// the continue repeats the loop a second time

// Now onto functions
/* format
function name() {
	code to be executed
}
*/

function jamesiscool() {
	alert("James");
	alert("is");
	alert("cool");
}

// you can then call it by

jamesiscool()

// then it will execute which in this case is an alert bx that 
// says james then another one saying is and then the last one saying cool
// you can call a function as many times as you want to. 
//(To remind yourself how cool you are in this case.)

// functions can take parameters on when that function can be called
// example:






