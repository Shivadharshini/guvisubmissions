<!DOCTYPE html>
<html>
<body>
<script type="text/javascript">
var n,n1,s,d;
n=prompt('Enter a Number.');
n1=n;
s=0;
while(n!=0)
{
d=n%10;
n=(n-d)/10;
s=(10*s)+d;
}
if(s==n1)
document.write(n1+" is a palindrome");
else
document.write(n1+" is not a palindrome");
</script
</body>
</html> 
