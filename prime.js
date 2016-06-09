<!DOCTYPE html>
<html>
<head>
	<title>Prime number</title>
</head>
<body>
<script type="text/javascript">
	function getMyprime(n)
	{ 
		var i, flag;
		for(i=2;i<=n/2;i++)
{
if(n%i==0)
{
	flag=1;
}
}
if(flag==1){
document.write("The given number is not prime");
}
else{
document.write("The given number is prime");
	}
}
var n=prompt('Enter a number');
getMyprime(n);
</script>
</body>
</html>
