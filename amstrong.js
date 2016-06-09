<!DOCTYPE html>
<html>
<head>
<TITLE>Amstrong number</TITLE>
<body>
<script language="JavaScript">
var e,x,d=0;
var b=prompt("Enter a number");
x=b;
while(x>0)
{
e=x%10;
d=d+(e*e*e);
x=parseInt(x/10);
}
if(b==d)
document.write("This number is an Amstrong number");
else
document.write("This number is not an Amstrong number");
</script>
</head>
</body>
</html>
