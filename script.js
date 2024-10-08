const addButton = document.getElementById( 'add-task-btn' );
const taskInput = document.getElementById( 'task-input' );
const taskList = document.getElementById( 'task-list' );


function addTask ( defaultTask, save = true ) {
    let taskText = defaultTask || taskInput.value.trim();
    if ( taskText === "" ) {
        return alert("Enter a task!")
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
    if ( save ) {
        allTasks = JSON.parse( localStorage.getItem( 'allTasks' ) ) || [];
        allTasks.push( taskText );
        localStorage.setItem( 'allTasks', JSON.stringify( allTasks ) );
    }
}

addButton.addEventListener( 'click', ()=> addTask() );
taskInput.addEventListener( 'keypress', ( event ) => {
    if ( event.key === "Enter" ) {
        addTask();
    }
} )

function loadTasks () {
    const listOfTasks = JSON.parse( localStorage.getItem( 'allTasks' ) ) || [];
    console.log(listOfTasks)
    listOfTasks.forEach(task => {
        addTask( task, false);
    });
}

document.addEventListener( "DOMContentLoaded", loadTasks);



