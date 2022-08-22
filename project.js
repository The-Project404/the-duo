// the containair of img
// container styling
$('.container').css({
  'background':'#fff8e7',
  'height':'1119px',
  'widht':'100%',
  'display':'flex',
  'align-items':'center',
  'justify-content' : 'center'
    })
 
var slider_img = document.querySelector('.slider-img');
var images = ['unnamed.jpg', 'NFT-art.jpg', 'logo.jpg', ];
var i = 0;

function prev(){
  if(i <= 0){ i = images.length; 
  i--};
  return setImg();       
}

function next(){
  if(i >= images.length-1){ i = -1;
  i++};
  return setImg();       
}

function setImg(){
  return slider_img.setAttribute('src', "images/"+images[i]);
  
}