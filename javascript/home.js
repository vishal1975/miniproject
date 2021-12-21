var box  = document.getElementById('box');
var message_boxe = document.getElementById('message-box')
var container = document.getElementById('container')
//var message_boxe = document.getElementsByClassName("message-box")
var down = false;
var open=false;// varriable for message box

function toggleNotifi(){
	if (down) {
		box.style.height  = '0px';
		box.style.opacity = 0;
		down = false;
	}else {
		box.style.height  = '510px';
		box.style.opacity = 1;
		down = true;
	}
}

function message_box(){
if(open){

 message_boxe.style.visibility='hidden'
 
 open=false;
}
else{
	container.style.color='grey'
 container.style.opacity=0.3
	message_boxe.style.visibility='visible'
	open=true;
}
}

function message_box_close(){
	if(open){
		container.style.opacity=1
		message_boxe.style.visibility='hidden'
		
		container.style.visibility='bg-primary'
		open=false;
	   }
}