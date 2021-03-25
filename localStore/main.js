let users = [
  {color: 'red', name: 'Dima', age: 10},
  {color: 'green', name: 'Nastya', age: 22},
  {color: 'blue', name: 'Volodya', age: 19},
  {color: 'orange', name: 'Yarko', age: 39},
  {color: 'pink', name: 'Yevhen', age: 14},
  {color:  'brown', name: 'Taras', age: 44}
];


// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(todos => {console.log(todos);

//   for (let todo of todos) {
//      let todoDiv = document.createElement('div');
//      todoDiv.classList.add('todo');

//      for (const key in todo) {
//          let keyDiv = document.createElement('div');
//          keyDiv.innerText = `${todo[key]}`;
//          keyDiv.classList.add(key); 
//          todoDiv.appendChild(keyDiv);
//      }

//      document.body.appendChild(todoDiv);
//   }
//   });

// recursion

let peoples = {
 u1 :{
   "id": 1,
   "name": "Leanne Graham",
   "username": "Bret",
   "email": "Sincere@april.biz",
   "address": {
     "street": "Kulas Light",
     "suite": "Apt. 556",
     "city": "Gwenborough",
     "zipcode": "92998-3874",
     "geo": {
       "lat": "-37.3159",
       "lng": "81.1496"
     }
   },
   "phone": "1-770-736-8031 x56442",
   "website": "hildegard.org",
   "company": {
     "name": "Romaguera-Crona",
     "catchPhrase": "Multi-layered client-server neural-net",
     "bs": "harness real-time e-markets"
   }
 },
 u2 :{
   "id": 2,
   "name": "Ervin Howell",
   "username": "Antonette",
   "email": "Shanna@melissa.tv",
   "address": {
     "street": "Victor Plains",
     "suite": "Suite 879",
     "city": "Wisokyburgh",
     "zipcode": "90566-7771",
     "geo": {
       "lat": "-43.9509",
       "lng": "-34.4618"
     }
   },
   "phone": "010-692-6593 x09125",
   "website": "anastasia.net",
   "company": {
     "name": "Deckow-Crist",
     "catchPhrase": "Proactive didactic contingency",
     "bs": "synergize scalable supply-chains"
   }
 },
 u3 :{
   "id": 3,
   "name": "Clementine Bauch",
   "username": "Samantha",
   "email": "Nathan@yesenia.net",
   "address": {
     "street": "Douglas Extension",
     "suite": "Suite 847",
     "city": "McKenziehaven",
     "zipcode": "59590-4157",
     "geo": {
       "lat": "-68.6102",
       "lng": "-47.0653"
     }
   },
   "phone": "1-463-123-4447",
   "website": "ramiro.info",
   "company": {
     "name": "Romaguera-Jacobson",
     "catchPhrase": "Face to face bifurcated interface",
     "bs": "e-enable strategic applications"
   }
 },
 u4 :{
   "id": 4,
   "name": "Patricia Lebsack",
   "username": "Karianne",
   "email": "Julianne.OConner@kory.org",
   "address": {
     "street": "Hoeger Mall",
     "suite": "Apt. 692",
     "city": "South Elvis",
     "zipcode": "53919-4257",
     "geo": {
       "lat": "29.4572",
       "lng": "-164.2990"
     }
   },
   "phone": "493-170-9623 x156",
   "website": "kale.biz",
   "company": {
     "name": "Robel-Corkery",
     "catchPhrase": "Multi-tiered zero tolerance productivity",
     "bs": "transition cutting-edge web services"
   }
 },
 u5 :{
   "id": 5,
   "name": "Chelsey Dietrich",
   "username": "Kamren",
   "email": "Lucio_Hettinger@annie.ca",
   "address": {
     "street": "Skiles Walks",
     "suite": "Suite 351",
     "city": "Roscoeview",
     "zipcode": "33263",
     "geo": {
       "lat": "-31.8129",
       "lng": "62.5342"
     }
   },
   "phone": "(254)954-1289",
   "website": "demarco.info",
   "company": {
     "name": "Keebler LLC",
     "catchPhrase": "User-centric fault-tolerant solution",
     "bs": "revolutionize end-to-end systems"
   }
 },
 u6 :{
   "id": 6,
   "name": "Mrs. Dennis Schulist",
   "username": "Leopoldo_Corkery",
   "email": "Karley_Dach@jasper.info",
   "address": {
     "street": "Norberto Crossing",
     "suite": "Apt. 950",
     "city": "South Christy",
     "zipcode": "23505-1337",
     "geo": {
       "lat": "-71.4197",
       "lng": "71.7478"
     }
   },
   "phone": "1-477-935-8478 x6430",
   "website": "ola.org",
   "company": {
     "name": "Considine-Lockman",
     "catchPhrase": "Synchronised bottom-line interface",
     "bs": "e-enable innovative applications"
   }
 },
 u7 :{
   "id": 7,
   "name": "Kurtis Weissnat",
   "username": "Elwyn.Skiles",
   "email": "Telly.Hoeger@billy.biz",
   "address": {
     "street": "Rex Trail",
     "suite": "Suite 280",
     "city": "Howemouth",
     "zipcode": "58804-1099",
     "geo": {
       "lat": "24.8918",
       "lng": "21.8984"
     }
   },
   "phone": "210.067.6132",
   "website": "elvis.io",
   "company": {
     "name": "Johns Group",
     "catchPhrase": "Configurable multimedia task-force",
     "bs": "generate enterprise e-tailers"
   }
 },
 u8 :{
   "id": 8,
   "name": "Nicholas Runolfsdottir V",
   "username": "Maxime_Nienow",
   "email": "Sherwood@rosamond.me",
   "address": {
     "street": "Ellsworth Summit",
     "suite": "Suite 729",
     "city": "Aliyaview",
     "zipcode": "45169",
     "geo": {
       "lat": "-14.3990",
       "lng": "-120.7677"
     }
   },
   "phone": "586.493.6943 x140",
   "website": "jacynthe.com",
   "company": {
     "name": "Abernathy Group",
     "catchPhrase": "Implemented secondary concept",
     "bs": "e-enable extensible e-tailers"
   }
 },
 u9:{
   "id": 9,
   "name": "Glenna Reichert",
   "username": "Delphine",
   "email": "Chaim_McDermott@dana.io",
   "address": {
     "street": "Dayna Park",
     "suite": "Suite 449",
     "city": "Bartholomebury",
     "zipcode": "76495-3109",
     "geo": {
       "lat": "24.6463",
       "lng": "-168.8889"
     }
   },
   "phone": "(775)976-6794 x41206",
   "website": "conrad.com",
   "company": {
     "name": "Yost and Sons",
     "catchPhrase": "Switchable contextually-based project",
     "bs": "aggregate real-time technologies"
   }
 },
 u10 :{
   "id": 10,
   "name": "Clementina DuBuque",
   "username": "Moriah.Stanton",
   "email": "Rey.Padberg@karina.biz",
   "address": {
     "street": "Kattie Turnpike",
     "suite": "Suite 198",
     "city": "Lebsackbury",
     "zipcode": "31428-2261",
     "geo": {
       "lat": "-38.2386",
       "lng": "57.2232"
     }
   },
   "phone": "024-648-3804",
   "website": "ambrose.net",
   "company": {
     "name": "Hoeger LLC",
     "catchPhrase": "Centralized empowering task-force",
     "bs": "target end-to-end models"
   }
 }
};

// let people = {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//       street: "Kulas Light",
//       suite: "Apt. 556",
//       city: "Gwenborough",
//       zipcode: "92998-3874",
//       geo: {
//         lat: "-37.3159",
//         lng: "81.1496"
//       }
//     },
//     phone: "024-648-3804",
//     website: "ambrose.net",
//     company: {
//       name: "Hoeger LLC",
//       catchPhrase: "Centralized empowering task-force",
//       bs: "target end-to-end models"
//       }
//     };

//  console.log(people);

//  function explorePeoples(peoples) {
//  for (const key in peoples) {
//      if (typeof peoples[key] == 'object') {
//         console.log(peoples[key]);
//          explorePeoples(peoples[key]);
//      }
//  }
// };
// explorePeoples(peoples);

//  LocalStorage


// 

let list = document.getElementsByClassName('list')[0];
let basket = document.getElementsByClassName('basket')[0];
console.log(list);
for (const user of users) {
let div = document.createElement('div')
div.innerText = JSON.stringify(user)
let addBtn = document.createElement('button')
addBtn.innerText = 'ADD'
div.appendChild(addBtn);
addBtn.onclick = function(e) {

 let favorite = JSON.parse(localStorage.getItem('favorite'))
   if(Array.isArray(favorite) && localStorage.getItem('favorite') != null){
     favorite.push(user)
 localStorage.setItem('favorite', JSON.stringify(favorite))
 }
 else{
   let userFavArr = [];
   userFavArr.push(user);
   localStorage.setItem('favorite', JSON.stringify(userFavArr)
   )
 }
  //  basket.appendChild(div);
}
list.appendChild(div)
};

let clearBtn = document.createElement('button');
clearBtn.innerText = 'CLEAR ALL';
clearBtn.onclick = function(e) {
  localStorage.clear()
} ;
document.body.appendChild(clearBtn);
//  BOM

console.log(window);