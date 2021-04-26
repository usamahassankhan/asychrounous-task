import React from 'react'

const index = () => {
    const posts=[
        {title:'posts one',body:'this is post one'},
        {title:'posts two',body:'this is post two'}
    ];
    const getpost=()=>{
     
           const data= posts.map(a=><p>{a.title}</p>)
        
   return data
      

    }
   

 const createpost=(post)=>{
     return new Promise((resolve,reject)=>{
        posts.push(post);
    
        const error=true
        if(!error){
            resolve()
        }
        else{
            reject("error")
        }
     })
        
    
 }  
 
 


 function getCurrentTime() {
  // Get the current 'global' time from an API using Promise
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      var didSucceed = Math.random() >= 0.5;
      didSucceed ? resolve(new Date()) : reject('Error');
    }, 2000);
  })
}
getCurrentTime()
  .then(currentTime => getCurrentTime())
  .then(currentTime => {
    console.log('The current time is: ' + currentTime);
    return true;
  })
  .catch(err => console.log('There was an error:' + err))  
  
  
  
  return (
        <div>
           
            {createpost({title:"post3,",body:" thisis 3"}).then(getpost).catch(err=>console.log(err))}
         
    
        </div>
    )
}



const promise1=Promise.resolve("helo");

const promise2=10;
const promise3=new Promise((resolve,reject)=>
setTimeout(resolve,2000,"gb"));
const promise4=fetch('http://jsonplaceholder.typicode.com/users').then(res=>res.json());
Promise.all([promise1,promise2,promise3,promise4]).then(value=>
    console.log(value)).catch((errors)=>console.log("ee",errors));



export default index
