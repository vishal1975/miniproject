let username,password;


function getdetails(){

username=document.getElementById('username').value;
password=document.getElementById('password').value;
}

let submit_btn=document.getElementById('submit_btn');
let error_content=document.getElementById('error');
submit_btn.addEventListener('click',async (e)=>{

e.preventDefault()
error_content.textContent="";
    getdetails();
    let formdata=new FormData();
    formdata.append('username',username);
    formdata.append('password',password);
   let token=await login(formdata);
    if(token!=""){
   localStorage.setItem('token',token)
   window.location.replace("http://127.0.0.1:5500/Html/home.html");
    }
    else{
      error_content.textContent="check your credentials"
      error_content.style.color='red'
      
    }
})


async function login(data){

let response= await fetch("http://localhost:8080/login",{

  method:'POST',
  body:data
})
let responsebody=""
if(response.ok){

     responsebody=await response.text();

  

    return responsebody;
}
else{
    
    return responsebody
}

}