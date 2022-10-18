/* Date for today in the title of to-do app */

let myDate = document.getElementById('date');
let today = (new Date()).toLocaleDateString('en-GB');
myDate.innerHTML = today;

/* Click event to add the input text in the list with plans */

let addButton = document.querySelector ('#add');   
addButton.addEventListener ('click', addList);

function addList () {
    let newTask = document.getElementById('text').value;
    if (newTask === "") {
        alert ("I can't make plans for you yet! Please type a task for your list!")
    } else {
        document.querySelector('.test').innerHTML += `
                <div class="list">
                    <li>${newTask}</li>
                    <button class="check"><i class="fas fa-check" aria-label="Button to check off the list item with a line-through over text"></i></button>
                    <button class="trash"><i class="fas fa-trash-alt" aria-label="Button to delete the list item"></i></button>
                </div>
        `;

/* Reseating the value to empty string for the input text after the add button is pressed */

        document.querySelector('#text').value = '';

/* Click event to remove the task with the trash button */

        let currentTask = document.querySelectorAll ('.trash');
            for (let i=0; i < currentTask.length; i++) {
                currentTask[i].onclick = function () {
                    this.parentNode.remove ();
                }
            }

/* Click event to strike the task with a double blue line for check button */

        let check = document.querySelectorAll ('.check');
        for (let i=0; i < check.length; i++) {
            check[i].onclick = function () {
                this.parentNode.style.textDecoration = 'line-through';
                this.parentNode.style.textDecorationColor = 'blue';
                this.parentNode.style.textDecorationStyle = 'double';
            }
        }
    }
}

/* Event listener for enter key to perform the addList () */

    document.querySelector('#text').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addList ();
    }
})