let myDate = document.getElementById('date');
let today = (new Date()).toLocaleDateString('en-GB');
myDate.innerHTML = today;

let mySubmit = document.getElementById('submit');
mySubmit.addEventListener('click', myList);

function myList () {
        let myDiv = document.getElementById('text').textContent;
        let newList = `
                    <div class="list">
                        <li>${myDiv}</li>
                        <button id="check"><i class="fas fa-check"></i></button>
                        <button id="edit"><i class="fas fa-edit"></i></button>
                        <button id="trash"><i class="fas fa-trash-alt"></i></button>
                    </div>
        `;
    
        let myList = document.getElementsByTagName('ul')[0];
        myList.appendChild(newList);   
    }
    myList();



