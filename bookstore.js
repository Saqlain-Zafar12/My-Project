// Banner Innre Html Animation 
const bannerText=document.querySelector('.banner')
const allTexts=['“Chase the vision, not the money; the money will end up following you.”',
'“Communication is at the heart of ecommerce and community”',
'“Chase the vision, not the money; the money will end up following you.”',
'“Customer service shouldn’t just be a department, it should be the entire company”'
]
let count=0
setInterval(() => {
if(count > allTexts.length-2){
    count=-1
}
    count++
    bannerText.innerHTML=allTexts[count]
    // console.log(count);
}, 5000);
// logo reload
const logo=document.querySelector('.logo')
logo.addEventListener('click',function(){
    location.reload()
})
////////////////////////////////////
// sidebar fixed
const topNavBar=document.querySelector('.topNavBar')
const sidebar=document.querySelector('.sidebar')
const container=document.querySelector('.container')
const signupbtn=document.querySelector('#signupbtn')

document.addEventListener('scroll',function(){

    // console.log(window.pageYOffset);
    if(window.pageYOffset > 660){
       sidebar.style.position="fixed"
       sidebar.style.top="0px"
       sidebar.style.left="0px"
       topNavBar.style.position="fixed"
       topNavBar.style.top="0px"
       topNavBar.style.left="0px"
       topNavBar.classList.add('active')
       topNavBar.classList.remove('removeactive')
       container.style.marginTop="70px"
      
    }
   if(window.pageYOffset > 1972){
        sidebar.style.position="absolute"
        sidebar.style.top="66%"
        sidebar.style.left="0px"
     }
    // else{
    //     sidebar.style.position="absolute"
    //     sidebar.style.top="66.7%"
    //     sidebar.style.left="0px"
    // }
    if(window.pageYOffset < 660){
        sidebar.style.position="absolute"
        sidebar.style.top="0px"
        sidebar.style.left="0px"
            topNavBar.style.position="relative"
            topNavBar.style.top="0px"
            topNavBar.style.left="0px"
        topNavBar.classList.remove('active')
       container.style.marginTop="0px"

     }
})

const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');
const SignUppage=document.querySelector('.SignUppage')
const LogInpage=document.querySelector('.LogInpage')
const circlecross=document.querySelector('.circlecross')
const circlecross2=document.querySelector('.circlecross2')
const aftersignup=document.querySelector(".aftersignup")
const username=document.querySelector("p .name")
const faheart=document.querySelectorAll('.fa-heart')
faheart.forEach(e => {
  e.addEventListener('click',function(){
    e.style.opacity="1"
  })
});
const loginbtn=document.querySelector('.LoginSignup a')
signupbtn.addEventListener('click',function(e){
    e.preventDefault()
    SignUppage.style.display="flex"
})
// console.log(loginbtn);
loginbtn.addEventListener('click',function(e){
    e.preventDefault()
    console.log("saq");
    LogInpage.style.display="flex"
    
})
circlecross.addEventListener('click',function(){
        // LogInpage.style.display="none"
        SignUppage.style.display="none"
    }) 

    circlecross2.addEventListener('click',function(){
        LogInpage.style.display="none"
        // SignUppage.style.display="none"
    }) 

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  // Use HTML constraint API to check form validity
  isValid = form.checkValidity();
  // If the form isn't valid
  if (!isValid) {
    // Style main message for an error
    message.textContent = 'Please fill out all fields.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    return;
  }
  // Check to see if both password fields match
  if (password1El.value === password2El.value) {
    // If they match, set value to true and borders to green
    passwordsMatch = true;
    password1El.style.borderColor = 'green';
    password2El.style.borderColor = 'green';
  } else {
    // If they don't match, border color of input to red, change message
    passwordsMatch = false;
    message.textContent = 'Make sure passwords match.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    password1El.style.borderColor = 'red';
    password2El.style.borderColor = 'red';
    return;
  }
  // If form is valid and passwords match
  if (isValid && passwordsMatch) {
    // Style main message for success
    message.textContent = 'Successfully Registered!';
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green';
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    // website: form.website.value,
    password: form.password.value,
  };
  // Do something with user data
  console.log(user);
  console.log(user.name);
  username.innerHTML=user.name;
}

function processFormData(e) {
  e.preventDefault();
  // Validate Form
  validateForm();
  // Submit Form if Valid
  if (isValid && passwordsMatch) {
    storeFormData();
    SignUppage.style.display="none"
    loginbtn.style.display="none"
    signupbtn.style.display="none"
    aftersignup.style.display="flex"
  }
}

// Event Listener
form.addEventListener('submit', processFormData);
////////////////////////////
// Full Screen 
var toggle=true
var el = document.querySelector('.fa-magnifying-glass-plus'); 
var body=document.body
console.log(el);
el.addEventListener('click',function(){
  if(toggle===true){
    body.requestFullscreen();
    toggle=false;
  }
  else{
    document.exitFullscreen();
    toggle=true;
  }
})
///////////////////////////////////
var messagediv=document.querySelector('.messagediv')
var famessage=document.querySelector('.fa-message')
var faarrowright=document.querySelector('.fa-arrow-right')

famessage.addEventListener('click',function(){
  messagediv.style.right="0%"
})
faarrowright.addEventListener('click',function(){
  messagediv.style.right="-100%"

})
/////////////////////////////////////////////
// chatcrater
var chatdivofchat=document.querySelector('.chatdiv')
var chatcontent=[
  {
img:`./imgs/dp1.jpg`,
name:"Akram",
message:"Bhai isko kaisay istemal kro",
},
{
  img:`./imgs/dp2.jpg`,
  name:"Ali",
  message:"Aap kab sy yh kam kr rhy ho",
  },
  {
    img:`./imgs/dp3.jpg`,
    name:"Abbas",
    message:"Mayn yaha per log In kaisy kro",
    },
    {
      img:`./imgs/dp4.jpg`,
      name:"Saqlain",
      message:"Hi Sir",
      },
      {
        img:`./imgs/dp5.jpg`,
        name:"Bilal",
        message:"Can you please Guide me",
        },
        {
          img:`./imgs/dp6.jpg`,
          name:"Nadeem",
          message:"This is Good",
          },
]
var randomNum=-1
setInterval(() => {
  randomNum++
  var chatdiv=document.createElement('div')
  chatdiv.style.height="60px"
  chatdiv.style.width="100%"
  chatdiv.style.marginTop="2px"
  // chatdiv.style.background="red"
  chatdiv.style.display="flex"
  chatdiv.style.alignItems="center"
  chatdiv.classList.add("hover")
  chatdivofchat.append(chatdiv)
  ////////////////////
  var chatdpdiv=document.createElement('div')
  chatdpdiv.style.height="40px"
  chatdpdiv.style.width="40px"
  chatdpdiv.style.borderRadius="50%"
  chatdpdiv.style.backgroundImage=`url('${chatcontent[randomNum].img}')`
  chatdpdiv.style.marginLeft="20px"
  chatdpdiv.style.overflow="hidden"
  chatdpdiv.style.backgroundPosition="center"
  chatdpdiv.style.backgroundSize="cover"
  chatdiv.append(chatdpdiv)
  console.log(chatcontent[0].img);
  console.log(randomNum);
  ///////////////////////
  var p=document.createElement('p')
  chatdiv.append(p)
  var span=document.createElement('span')
  span.innerHTML=`${chatcontent[randomNum].name}<br>`
  span.style.fontSize="16px"
  span.style.marginLeft="13px"
  p.append(span)
  var span=document.createElement('span')
  span.innerHTML=chatcontent[randomNum].message
  span.style.fontSize="13px"
  span.style.marginLeft="13px"
  span.style.opacity="0.7"
  span.style.marginTop="-40px"
  p.append(span)
}, 10000);