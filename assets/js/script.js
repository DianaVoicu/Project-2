let myDate = document.getElementById('date');
let today = (new Date()).toLocaleDateString('en-GB');
myDate.innerHTML = today;


let addButton = document.querySelector ('#add');   
addButton.addEventListener ('click', addList);
         
function addList () {
    let newTask = document.getElementById('text').value;
    if (newTask === "") {
        alert ('Ohh! You need to type a task for today!')
    } else {
        document.querySelector('.test').innerHTML += `
                <div class="list">
                    <li>${newTask}</li>
                    <button class="check"><i class="fas fa-check"></i></button>
                    <button class="trash"><i class="fas fa-trash-alt"></i></button>
                </div>
        `;

        document.querySelector('#text').value = '';

        let currentTask = document.querySelectorAll ('.trash');
            for (let i=0; i < currentTask.length; i++) {
            currentTask[i].onclick = function () {
                this.parentNode.remove ();
                }
            }

        let check = document.querySelectorAll ('.check');
        for (let i=0; i < check.length; i++) {
            check[i].onclick = function () {
                this.parentNode.style.textDecoration = 'line-through';
            }
        }
    }
}

document.querySelector('#text').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addList ();
    }
})