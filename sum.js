<!DOCTYPE html>
<html>
<head>
<script type = "text/javascript">
function sumnaturalno(n)
{
var i;
var sum = 0;
for(i = 1;i <= n; i++){
sum = sum + i;}
return (sum);
}
var num =prompt("Enter the number");
var n = parseInt(num);
result = sumnaturalno(n);
document.write("The sum of " + n + "natural number is" + result);
</script>
</head>
</html>
