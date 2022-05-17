let fullname,username,car_no,phonenumber,password,confirmpassword;

function getdetails(){

 fullname=document.getElementById('name').value;
 username=document.getElementById('username').value;
 car_no=document.getElementById('car_no').value;
 phonenumber=document.getElementById('phonenumber').value;
 password=document.getElementById('password').value
 confirmpassword=document.getElementById('confirmpassword').value

}
let formsubmit=document.getElementById( 'formsubmit');

 formsubmit.addEventListener('click',(e)=>{

e.preventDefault();

getdetails()
const para = document.getElementById('error');
para.textContent=""
if(password!=confirmpassword){
    
    const node = document.createTextNode("please check your password");
    para.appendChild(node);
    para.style.color='red'
    
}
else{
para.textContent=""
postdata();




}

})

function postdata(){
  let data=JSON.stringify({"fullname":fullname,"username":username,"carNo":car_no,
           "phonenumber":phonenumber,"password":password});
          addUser(data);
          //  fetch("http://localhost:8080/user/add",{

          //  method:'POST',
          //  headers:{
          //   'Content-Type': 'application/json'
          //  },
          //  body:data
          //  }).then((response)=>response.text())
          //    .then((data)=>{
          //      console.log(data);
          //    })

}

async function addUser(data){

let response=await fetch("http://localhost:8080/user/add",{

  method:'POST',
  headers:{
   'Content-Type': 'application/json'
  },
  body:data
  })

  if(response.ok){
  let responsebody=await response.text()
  console.log(responsebody)
  window.location.replace("http://127.0.0.1:5500/Html/login.html");
  }
}