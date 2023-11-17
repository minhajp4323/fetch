fetch("https://fakestoreapi.com/products")
  .then((data)=>{
    // console.log(data);
    return data.json();
  })
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
  .then((completedata)=>{
    // console.log(completedata[1].title);
    let data1 ="";
    completedata.map((values)=>{
        data1= `<div class="cards">
        <h1 class="title">${values.title}</h1>
        <img class="image" src=${values.image} alt="">
        <p>${values.description}</p>
        <p class="catogary">${values.category}</p>
        <p class="price">${values.price}</p>
    </div>`
    });
    document.getElementById("cards").innerHTML=data1;

    
  })
  
  .catch((err)=>{
    console.log(err)
  })