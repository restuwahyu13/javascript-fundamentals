//HTTP Request adalah sebuah metode yang digunakan untuk berkomunikasi antara client dan server untuk melakukan pertukaran data

//Reguler AJAX request
const ajax = new XMLHttpRequest;

//REGULER HTTP REQUEST (cara ke satu)
ajax.onreadystatechange = () => {
  
    if(ajax.readyState === 4 && ajax.status === 200) {
      
        const jsonData = JSON.parse(ajax.response);
        const result = jsonData;
        console.log(result);
    }
}

const url = 'https://jsonplaceholder.typicode.com/users';
ajax.open('GET', url, true);
ajax.send();


//REGULER HTTP REQUEST (cara kedua)
const headers = new Headers({
  
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/users'
});

ajax.onreadystatechange = () => {
  
    if(ajax.readyState === 4 && ajax.status === 200) {
      
        const jsonData = JSON.parse(ajax.response);
        const result = jsonData;
        console.log(result);
    }
  
};

ajax.open(headers.get('method'), headers.get('url'));
ajax.send();


//PROMISE HTTP REQUEST
const url = 'https://jsonplaceholder.typicode.com/users'
fetch(url, {
  
    method: 'GET',
    type: 'cors',
})
.then(response => response.json())
.then(result => console.log(result))
.catch(err => console.log(err));


//JQUERY HTTP REQUEST
$(() => {
	  
	  $.ajax({
	  
	   url: 'https://jsonplaceholder.typicode.com/users',
	   method: 'GET',
	   contentType: 'json',
	   success: ((response) => {
	     
	      console.log(response);
	   })
    });
 });