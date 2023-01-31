/* 1- Write a program that allow to user enter number then print it

var x = Number(window.prompt('Please enter a number: '));
 console.log(x);
  */


/*2- Write a program that take number from user then print yes if that number can divide by 3 
and 4 otherwise print no

var x = Number(window.prompt('Please enter a number: '));

if (x % 3 == 0 && x % 4 == 0)
    console.log('Yes');
else
    console.log('No');
    */




/*3- Write a program that allows the user to insert 2 integers then print the max

var x = Number(window.prompt('Please enter the first number: '));
var y = Number(window.prompt('Please enter the second number: '));
if (x > y)
    console.log(x);
else
    console.log(y);
*/



/*4- Write a program that allows the user to insert an integer then print negative if it is
negative number otherwise print positive.

var x = Number(window.prompt('Please enter a number: '));
if (x < 0)
    console.log('Negative');
else
    console.log('Positive'); 
    */




/*  5- Write a program that take 3 integers from user then print the max element 
  and the min element.

  var x = Number(window.prompt('Please enter the first number: '));
var y = Number(window.prompt('Please enter the second number: '));
var z = Number(window.prompt('Please enter the third number: '));

var min=x,max=x;

if(y<min)
min=y;

if(z<min)
min=z;

if(y>max)
max=y;

if(z>max)
max=z;

console.log('max element= '+max )
console.log('min element= '+min )
*/



/*6- Write a program that allows the user to insert integer number then 
check If a number is oven or odd

var x = Number(window.prompt('Please enter a number: '));
if (x % 2 == 0)
    console.log('even');
else
    console.log('odd');
    */



/* 7- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) 
then print vowel otherwise print consonant

var x = window.prompt('please enter a character');
if (x == 'a' || x == 'A' || x == 'e' || x == 'E' || x == 'i' || x == 'I' || x == 'o' || x == 'O' || x == 'u' || x == 'U')
    console.log('Vowel')
else
    console.log('Consonant')*/




/*8- Writeaprogramthat allowsusertoinsertintegerthenprintallnumbersbetween1to 
that’s number

var x = Number(window.prompt('Please enter a number: '));

for(var i=1;i<=x;i++)
console.log(i+', ');
*/



/*9- Write a program that allows userto insert integerthen print a multiplication table up to 12.
var x = Number(window.prompt('Please enter a number: '));
for(var i=1;i<=12;i++)
console.log(x*i);
*/



/*10- Writeaprogramthatallowstousertoinsertnumberthenprintallevennumbers 
between 1 to this number

var x = Number(window.prompt('Please enter a number: '));
for(var i=2;i<=x;i+=2)
console.log(i);
*/




/*11- Writeaprogramthattaketwointegersthenprintthepower

var x = Number(window.prompt('Please enter the first number: '));
var y = Number(window.prompt('Please enter the second number: '));

console.log(x**y);
*/



/*12- Write a program to enter marks of five subjects and calculate total, average and 
percentage

var total=0;
for(var i=1;i<=5;i++)
total+=Number(window.prompt('Please enter subject mark: '));

console.log('Total marks = '+total);
console.log('Average marks = '+total/5);
console.log('Percentage = '+((total/500)*100));
*/




/*13-Write a program to input month number and print number of days in that 
month.

var x = Number(window.prompt('Please enter the month number: '));
if(x==1||x==3||x==5||x==7||x==8||x==10||x==12)
console.log('Days in month: '+31);
else if(x==2)
console.log('Days in month: '+28+' OR '+29);
else
console.log('Days in month: '+30);
*/


/*14- Write a program to input marks of five subjects
Physics, Chemistry, Biology, Mathematics and Computer
, Find percentage and grade

var total=0;
total+=Number(window.prompt('Please enter Phisycs mark: '));
total+=Number(window.prompt('Please enter Chemistry mark: '));
total+=Number(window.prompt('Please enter Biology mark: '));
total+=Number(window.prompt('Please enter Mathematics mark: '));
total+=Number(window.prompt('Please enter Computer mark: '));

var percentage=(total/500)*100;


console.log('Percentage = '+percentage+'%');

if(percentage>=90)
console.log('Grad A')
else if(percentage>=80)
console.log('Grad B')
else if(percentage>=70)
console.log('Grad C')
else if(percentage>=60)
console.log('Grad D')
else if(percentage>=50)
console.log('Grad E')
else
console.log('Grad F')
*/



/*15- Write a program to print total number of days in month

var month=window.prompt('Please enter the month number:');

switch(month)
{
    case 'January':
        console.log('31 days');
        break;

    case 'February':
        console.log('28 or 29 days');
        break;

    case 'March':
        console.log('31 days');
        break;

    case 'April':
        console.log('30 days');
        break;

    case 'May':
        console.log('31 days');
        break;

    case 'June':
        console.log('30 days');
        break;

    case 'July':
        console.log('31 days');
        break;

    case 'August':
        console.log('31 days');
        break;

    case 'September':
        console.log('30 days');
        break;

    case 'October':
        console.log('31 days');
        break;

    case 'November':
        console.log('30 days');
        break;

    case 'December':
        console.log('31 days');
        break;
        
default:
    console.log('Invalid');
}
*/


/*16- Write a program to check whether an alphabet is vowel or consonant

var alphabet=window.prompt('Please enter the alphabet:');

switch(alphabet)
{
    case 'a':
    case 'A':
    case 'e':
    case 'E':
    case 'i':
    case 'I':  
    case 'o':
    case 'O':
    case 'u':
    case 'U':
        console.log('Vowel');
        break;
        
default:
    console.log('Consonant');
    break;
}
*/

/*17- Write a program to find maximum between two numbers
var x = Number(window.prompt('Please enter the first number: '));
var y = Number(window.prompt('Please enter the second number: '));

switch(x>y)
{
    case true:
        console.log(x);
        break;

    case false:
        console.log(y);
        break;
  
}
*/


/*18- Write a program to check whether a number is even or odd

var x = Number(window.prompt('Please enter the number: '));
switch(x%2)
{
    case 0:
        console.log('Even');
        break;

    default :
        console.log('Odd');
        break;
}
*/



/*19- Write a program to check whether a number is positive or negative or zero

var x = Number(window.prompt('Please enter the number: '));
switch (x > 0) {
    case true:
        console.log('Positive');
        break;


    case false:
        switch (x < 0) {
            case true:
                console.log('Negative');
                break;

            case false:
                console.log('Zero');
                break;
        }
}
*/



/*20- Write a program to create Simple Calculator
var num1 = Number(window.prompt('Please enter the first number: '));
var operator=window.prompt('Enter the operation you need to do: ')
var num2 = Number(window.prompt('Please enter the second number: '));

switch(operator)
{
    case '+':
        console.log(num1+num2);
        break;

    case '-':
        console.log(num1-num2);
        break;

    case '*':
        console.log(num1*num2);
        break;

    case '/':
        console.log(num1/num2);
        break;

    default:
        console.log('Invalid');
}
*/