console.log(localStorage.getItem('token'))
var car_no = document.getElementById('submit_num')
var submit_button = document.getElementById('submit_button')
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


// working on image
var loadFile=function(event){

  check(event);
  // var image=document.getElementById('output');
  // let imgfile = URL.createObjectURL(event.target.files[0]);
  // image.src= imgfile
  // console.log("checking")
  // console.log(imgfile)
  // let formData=new FormData();
  // formData.append("upload",imgfile);

  // fetch("http://localhost:8080/second",{
  //   method:"Post",
  //   body:formData
  // }).then((response)=>response.text()
  
  // ).then((data)=>{
  //   let obj=JSON.parse (data)
  //   let plate_no=obj.results[0].plate
  //   console.log(plate_no)
  // })

};

function check(event){
  let formData=new FormData();
    const reader = new FileReader();
    var inpfile = document.getElementById('')
    reader.readAsDataURL(event.target.files[0])
    reader.onload=()=>{
        let imgfile=reader.result
        
        document.getElementById("output").src=imgfile
    
    formData.append("upload",imgfile);


    fetch("http://localhost:8081/second",{
      method:"Post",
      body:formData
    }).then((response)=>response.text()
    
    ).then((data)=>{
      let obj=JSON.parse (data)
      let plate_no=obj.results[0].plate
      console.log(plate_no)
      car_no.value=plate_no
    })



    }
  }

  submit_button.addEventListener('click',function(event){


  })