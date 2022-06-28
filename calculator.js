var fnum = parseInt(prompt("First Number: "))
var opr = prompt("Operator: +,-,*,/")
var snum = parseInt(prompt("Second Number: "))
var ans = prompt("The answer is: ")

if (opr == "+") 
{
    prompt(fnum + snum)
}else if (opr == "-") 
{
    prompt(fnum - snum)
}else if (opr == "*") 
{
    prompt(fnum * snum)
}else if (opr == "/") 
{
    prompt(fnum / snum)
}