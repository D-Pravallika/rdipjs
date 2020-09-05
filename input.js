function updateres(a){ 
    document.getElementById("result").value += a;
	return a;
}

function showresult(){ 
    var a = document.getElementById("result").value 
    var b = eval(a) 
    document.getElementById("result").value = b; 
	return b;
} 
function backspace(){
	var b = document.getElementById("result").value;
	document.getElementById("result").value = b.substr(0, b.length - 1);
	return b;
}
 function clr(){ 
    document.getElementById("result").value = ""
    return value;			 
} 
function absfun(){
	var a=document.getElementById("result").value;
	document.getElementById("result").value = Math.abs(a);
	return Math.abs(a);
}
function sqrtfun(){
	var a=document.getElementById("result").value;
	document.getElementById("result").value=Math.sqrt(a);
	return Math.sqrt(a);
}

//task2 validation form
function validation(){
		var username   =  document.getElementById("namef").value;
		var phoneno    =  document.getElementById("phonef").value;
		var mailid     =  document.getElementById("emailf").value;
		var namerule   =  /^[a-zA-Z\-]+$/;
		var phonenorule=  /^\d{10}$/;
		var mailidrule =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

		if(namef.value.trim()=="")
		{
			alert("enter the username");
			return false;
		}
		if(phonef.value.trim()==""){
			alert("enter the phone number");
			return false;
		}
		if(emailf.value.trim()==""){
			alert("enter the Email Id");
			return false;
		}
		
		if(namerule.test(username)!=true)
		{
		alert("Invalid username");
		document.getElementById("names").style.visibility="visible";
		}
		if(phonenorule.test(phoneno) != true)
		{
			alert("The phone should contain exactly 10 numbers");
		}

		if(mailidrule.test(mailid) != true)
		{
			alert("Make sure your email id have . and @");
		}
		return 0;
}

// task3

function ispalindrome(){
	var pal=document.getElementById("pal_check").value;
	var a="";
	for(let i = 0;i<=pal.length-1;i++){
		a = a + pal[i];
	}
	if(pal_check.value.trim() ==""){
		alert("Enter a string to check Palindrome");
	}
	else if(pal == a){
		alert("Hurray! it is a Palindrome");
		return pal + "Palindrome";
	}
	else{
		alert("Oops! not a Palindrome");
		return false;	
	}
}

function isanagram(str1,str2){
		var str1=document.getElementById("an_check1").value;
		var str2=document.getElementById("an_check2").value;
		if(an_check1.value.trim()=="") 
		{
			alert("Enter 1st a string to check Anagram");
		}
		if(an_check2.value.trim()==""){
			alert("Enter 2nd a string to check Anagram");
		}
		else if(checkString(str1) === checkString(str2))
		{
			alert("Hurray! it is an Anagram");
			return str1===str2 + "Anagram";
			return true;
		}
		else
		{
			alert("Oops! not an Anagram");
			return false;
		}
		return 0;
}
function checkString(str) {
    return str.replace(/[^\w]/g).toLowerCase().split('').sort().join()
}

//task4
function ran(){
	return Math.floor(Math.random() * 1000)+1;
}
function play(){
	var x = document.getElementById('num1').value;
	var y = document.getElementById('num2').value;
	x = x%3;
	y = y%3;
	if(x == y){
		alert('Oh it is a Tie');
		return 0;
	}
	else if((x == 0 && y == 1) || (x == 1 && y == 0)){
		alert('Human survives');
		return true;
	}

	else if((x == 1 && y == 2) || (x == 2 && y == 1)){
		alert('Cockroach survives');
		return true;
	}
	else if((x == 0 && y == 2) || (x == 2 && y == 0)){
		alert('Human dies');
		return true;
	}
	else{
		alert('Give another try..');
		return true;
	}
}