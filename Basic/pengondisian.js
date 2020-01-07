//berikut adalah contoh beberapa jenis percabangan (pengondisian) pada JavaScript yang bisa digunakan 
//dan berikut adalah contoh penulisannya

const alertbox = prompt('masukan nama anda ?', '');

//IF STATEMENT ONE
if(alertbox === 'restu') alert(true);
else alert (false);

//IF STATEMENT TWO
if(alertbox === 'restu') {
  
   alert(true)
  
}else{
  
   alert(false)
}


//IF ELSE STATEMENT THREE (PERCABANGAN)
if(alertbox === 'restu') {
  
   alert(true)
  
}else if(alertbox === 'wahyu') {
  
   alert(true);
  
}else{
  
   alert(false)
}


//SWITCH STATEMENT (PERCABANGAN)

switch(alertbox) {
    
  case 'restu':
    alert(true);
    break;
    
  case 'wahyu':
    alert(true);
    break;
    
  case 'saputra':
    alert(true);
    break;
    
  default:
    
    alert(false);
}

//berikut adalah contoh NESTED PERCABANGAN (BERSARANG)

//IF STATEMENT NESTED (BERSARANG)
if(alertbox === 'restu') {
  
    alert(true);
     
}else{
  
   if(alertbox == 'wahyu') {
     
       alert(true); 
     
   }else{
     
      if(alertbox === 'saputra') {
        
        alert (true);
        
      }else {
        
         alert (false);
      }
   }
}

//SWITCH STATEMENT (BERSARANG)
switch(alertbox) {
    
  case 'restu':
  case 'wahyu':
  case 'saputra':
    
    alert(true);
    break;

  default:
    
    alert(false);
}