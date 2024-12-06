
let v =document.getElementById('zxc');
let s =document.getElementById('cvb');
v.addEventListener('input', function() {
  if (v.value.trim() !== '') {
      s.style.backgroundColor = 'green';  
  } else {
      s.style.backgroundColor = 'orange';  
  }
});








 
 