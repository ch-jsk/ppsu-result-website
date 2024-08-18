// JavaScript source code

function result(){
	var enrollment={
		21se02ml006{
			s2c21010:"60"
		}
	}
	var enrollement=document.getElementById('enrollment').value;
	var defination=enrollment[input];
	var output=document.getElementById("output");
	if (defination==undefined){
		output.innerHTMl='There is no infomration about this student.';
	}
	else{
		output.innerHTMl='s2c21010: $(defination.s2c21010)''
	}
}