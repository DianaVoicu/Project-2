let myDate = document.getElementById('date');
let today = (new Date()).toLocaleDateString('en-GB');
myDate.innerHTML = today;

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName ('button');

    for (let button of buttons) {
        button.addEventListener ('click', function () {
            if(this.id === 'add') {
                addList ()
            } else if (this.className === 'check') {
                alert('You clicked checked')
            } else if (this.className === 'edit') {
                alert('You clicked the edit')
            } else if (this.className === 'trash') {
                removeTask ()   
            }
        });
    }
});

function addList () {
    let newTask = document.getElementById('text').value;
    let test = document.querySelector('.check').outerHTML; 
    let listItems =  `
    <div class="list">
        <li>${newTask}</li>
        ${test}
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="trash"><i class="fas fa-trash-alt"></i></button>
    </div>`;
    let myDiv = document.createElement ('div');
    myDiv.innerHTML = listItems;
    document.getElementsByTagName('ul')[0].appendChild(myDiv);   
    console.log(testb )
}


function removeTask () {
    let oldTask = document.getElementsByTagName('ul')[0];
    let child = document.getElementsByClassName('list')[0];
        oldTask.removeChild(child);   
}