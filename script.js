

fetch('https://fakestoreapi.com/products').then((data)=>{
    // console.log(data);
return data .json();

}).then((completedata)=>{
    let data1="";
    completedata.map((values)=>{
        data1+=`
        <div class="card">
            <h1 class="title">${values.title}</h1>
            <img src="${values.image}" alt="">
            <p class="des">${values.description}</p>
            <p class="category">${values.category}</p>
            <p class="price"> ${values.price}</p>
    
    
        </div>
`
    });

document.getElementById('cards').innerHTML=data1;

}).catch((err)=>{
console.log(err);



})
    // console.log(completedata[2].title);
    // document.getElementById('root').innerHTML=completedata[2].title
