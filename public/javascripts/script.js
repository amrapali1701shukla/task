var seats = [];
var a ={
  seats                      
};
document.querySelector('#box').addEventListener('click',function(e){               
 if(e.target.classList[0] === "boxes"){                         
 seats.push(e.target.dataset.content);
 var button = e.target.id;
 document. getElementById(`${button}`).style.cursor = "none";
 document. getElementById(`${button}`).style.backgroundColor = "#000";
 console.log(a);
}}
);


// document.querySelector('#submit').addEventListener('click',function(e){
//     e.preventDefault();
//     axios.post('http://127.0.0.1:3000/submit',{
//       seat:a                       
//     })
//     .then(function(res){      
//     })
// })