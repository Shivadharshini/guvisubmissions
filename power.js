<!DOCTYPE html>
<html>
<head>
<title>Power of a number</title>
<meta charset="utf-8">
</head>
<body>
<script type="text/javascript">
function getMypower(x,y)
{
var i, power, result;
power=x;
for(i=0;i<y;i++){

power=x*power;
}
 document.write("power=" +power);
}
var x =prompt('Enter a value');
var y =prompt('Enter a exp value');
getMypower(x,y);
</script>
</body>
</html>
