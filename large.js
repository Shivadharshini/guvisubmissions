
<!DOCTYPE html>
<html>
<head>
	<title>Large number</title>
	<meta charset="utf-8">
</head>
<body>
<script type="text/javascript">
var a,b,c;
a=prompt("Enter a number");
b=prompt("Enter a number");
c=prompt("Enter a number");
/* checks a>b and a>c  if  both conditions satisfied, A is greater */
if((a>b)&&(a>c)){
	document.write("<b>The largest number is a</b>");
}
/* checks b>a  and b>c  if  both conditions satisfied, b is greater */
  else if ((b>a)&&(b>c))
 {
	document.write("<b>The largest number is b </b>");
}
/* if the above two conditions were false c is greater*/
else
{
document.write("<b>The largest number is c </b>");
}
</script>
</body>
</html>
