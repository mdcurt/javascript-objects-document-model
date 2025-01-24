/*const person = {
  name: "John",
  age: 30,
  greet: function(name){
    console.log(`Hello, ${name}!`);
  },
};

console.log(person.name);
person.name = 'Alice';
person['age'] = 25;
console.log(person.name, person.age);
console.log(person.greet('Bob')); */

/* const element = window.document.getElementById('myDiv')

console.log(`element:`, element);
element.textContent = "What the heck?";

console.log(element.textContent); */

/*Excercise One*/ 

const car = {
  make: 'Buick',
  model: 'Le Sabre',
  year: 2003,
  getInfo: function() {
    console.log(`Make:`, car.make)
    console.log(`Model:`, car.model)
    console.log(
      `Year:`, car.year);
  }
}
car.getInfo()

/*Excercise 2*/
const student = {
  name: "Bill",
  age: 24,
  grades: [95,65,100,85],
/*average: function(){return student.grades / 4};*/}
  
  /*This is not functional syntax.  I will add a loop to iterate through the array, summing as it goes as well as dimensioning itself to the length of the array.  After this, it will take the sum and divide it by the length of the array(by length, I mean count of values stored in the array)*
};
let studentAverage = student.average();
console.log(studentAverage);*/

/*Excercise 3*/
const changeButton =  document.getElementById('domButton');
domButton.addEventListener('click', function() {
changeButton.style.backgroundColor = 'orange';
})
/*Excercise 4*/
paragraphButton.addEventListener('click', function(){
  document.querySelector('p').textContent = "Hello!"
})
/*Excercise 5*/
addItem.addEventListener('click', function(){
  const listSelect = document.getElementById('changeyList');
  const addedItem = document.createElement('li');
  addedItem.textContent = 'Five';
  listSelect.appendChild(addedItem);
})