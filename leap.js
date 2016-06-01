<!DOCTYPE html>
<html>
<head>
	<title>Leap year</title>
</head>
<body>
<script type="text/javascript">
	var year=prompt("Enter the year");
	if (year%4==0 || year%100==0 || year%400==0) {
		document.write("This year is a leap year");
	}else{
		document.write("This year is not a leap year");
	}
</script>
</body>
</html>
