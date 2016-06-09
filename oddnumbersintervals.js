<!DOCTYPE html>
<html>
<head>
	<title>Odd numbers between two intervals</title>
</head>
<body>
<script type="text/javascript">
	function getNumbers(start,end){
		var i, start, end;
		for(i=start; i<=end;i++){
			if(i%2!=0){
				document.write(i+",");
				
			}

			
		}
	}
	var start=prompt('Enter a first number');
	var end=prompt('Enter an end number');
    getNumbers(start,end);
</script>
</body>
</html>
