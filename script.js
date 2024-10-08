document.addEventListener( "DOMContentLoaded", addTask );

const addButton = document.getElementById( 'add-task-btn' );
const taskInput = document.getElementById( 'task-input' );
const taskList = document.getElementById( 'task-list' );

function addTask () {
    let taskText = taskInput.value.trim();
    if ( taskText === "" ) {
        alert("Enter a task!")
    } else {
        let li = document.createElement( 'li' );
        li.textContent = taskText;
        let removeButton = document.createElement( 'button' );
        removeButton.textContent = 'Remove';
        removeButton.classList.add( 'remove-btn' );
        removeButton.addEventListener( 'click', () => {
            li.remove();
        } )
        li.appendChild( removeButton );
        taskList.appendChild( li );
        taskInput.value = "";
    }
}

addButton.addEventListener( 'click', addTask );
taskInput.addEventListener( 'keypress', ( event ) => {
    if ( event.key === "Enter" ) {
        addTask();
    }
})