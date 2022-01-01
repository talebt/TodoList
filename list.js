
const addForm = document.querySelector('.add');
const List = document.querySelector(".todos");
const search = document.querySelector('.search input');


const generateTeamplate =(todo)=>{
 const html = ` <li class="list-group-item d-flex justify-content-between align-items-center">
 <span>${todo}</span>
 <i class="far fa-trash-alt delete"></i>
</li>`

List.innerHTML+= html;

};

addForm.addEventListener('submit',e => {
e.preventDefault();
const todo = addForm.add.value.trim();  // trim() method to remove all whitespaces before or after string 

//console.log(todo);// checking the value of todo class

if(todo.length){
    generateTeamplate(todo);
    // clear form
    addForm.reset(); //reset() method to clear from 
}
});

//  Delete  todos
List.addEventListener('click', e =>{
if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
}
});

//search todos and filter 
const filterTodo=(term)=>{
Array.from(List.children)
.filter((todo)=> !todo.textContent.toLowerCase().includes(term))
.forEach((todo)=>todo.classList.add('filtered'));

Array.from(List.children)
.filter((todo)=> todo.textContent.toLowerCase().includes(term))
.forEach((todo)=>todo.classList.remove('filtered'));


};

//keyup event
search.addEventListener('keyup',()=>{
const term =search.value.trim().toLowerCase();
filterTodo(term);
});