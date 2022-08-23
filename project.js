// the containair of img
// container styling
$('.container').css({
  'height':'1119px',
  'widht':'100%',
  'display':'flex',
  'align-items':'center',
  'justify-content' : 'center'
    })

var slider_img = document.querySelector('.slider-img');
var images = ['unnamed.jpg', 'NFT-art.jpg', 'monalisa.jpg' ];
var accounts = []
var currentBets = [0,0,0]
var i = 0;
///aefaefaef

function prev(){
  if(i <= 0){ i = images.length; 
  i--}else { i--};
  return setImg();       
}

function next(){
  if(i >= images.length-1){ i = -1;
  i++} else {i++};
  return setImg();       
}

function setImg(){
  var myImage = document.getElementById("mainImage");
  myImage.setAttribute("src","images/" + images[i]);
  //return slider_img.setAttribute('src', "images/"+images[i]);
  
}
function Bet(){
  var bet = document.getElementById("bet");
  var currBet = bet.value;
  console.log(currBet);
  if (currBet > currentBets[i]){
    currentBets[i] = currBet;
  }
}
function returnBet(){
  document.getElementById("currentBet").innerHTML = "The current bet of this art is:" + currentBets[i]; 
}

function checkSignUp(){
  var email = document.getElementById("email")
  var password = document.getElementById("password")
  var passwordConfirm = document.getElementById("password2")
  if (checkPass(password,passwordConfirm) && checkEmail(email)){
    accounts.push([email,password])
    
    var success=document.getElementById("Resultat").innerHTML = "Sign up success!";

    return success;
  }
}
function checkPass(){
  return true;
}
function checkEmail() {
  return true;
}
function checkLogin(){
  var emailLogin = document.getElementById("emailLogin")
  var passwordLogin = document.getElementById("passwordLogin")
  for (var iter = 0; iter<accounts.length();iter++){
    if ( emailLogin === accounts[iter][0] && passwordLogin[iter][1] ){
      document.getElementById("ResultatLogin").innerHTML = "Login success!";
    }
  }
}