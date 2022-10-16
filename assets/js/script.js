let myDate = document.getElementById('date');
let today = (new Date()).toLocaleDateString('en-GB');
myDate.innerHTML = today;

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName ('button');

    for (let button of buttons) {
        button.addEventListener ('click', function () {
            if(this.id === 'add') {
                addList ()
            } else if (this.id === 'trash') {
                alert('You clicked trash')
            } else if (this.id === 'edit') {
                alert('You clicked the edit')
            } else {
                alert ('You clicked done')
                
            }
        });
    }
});

function addList () {
    let newTask = document.getElementById('text').value;
    let listItems =  `
    <div class="list">
        <li>${newTask}</li>
        <button id="check"><i class="fas fa-check"></i></button>
        <button id="edit"><i class="fas fa-edit"></i></button>
        <button id="trash"><i class="fas fa-trash-alt"></i></button>
    </div>`;
    let myDiv = document.createElement ('div');
    myDiv.innerHTML = listItems;
    document.getElementsByTagName('ul')[0].appendChild(myDiv);
}

