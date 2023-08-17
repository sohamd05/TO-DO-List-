const todoList = [];
displayTODO();
function displayTODO(){
    let todoHTML = '';

    todoList.forEach((todoObject , index) => {
        const {name , dueDate} = todoObject;
        const html= `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class = "delete-todo js-delete-todo-button">Delete</button>

        `;
        todoHTML += html;
    });  

    document.querySelector('.js-todo-list').innerHTML = todoHTML;
    document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton , index) => {
            deleteButton.addEventListener('click',() =>{
                todoList.splice(index , 1);
                displayTODO();
            });
        })

        
}

document.querySelector('.js-add-todo-button').addEventListener('click' ,() =>{
    addTodo();
});

//document.querySelector('.js-delete-todo-button').addEventListener('click');

function addTodo(){
    //put the text from textbox to a variable
   const inputElement =  document.querySelector('.js-name-input');

   //text out using 'value'
   const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-due-date');
    const dueDate =  dateInputElement.value;

   todoList.push({
    name,
    dueDate
});
   

   inputElement.value = '';
   displayTODO();
}