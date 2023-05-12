document.addEventListener('DOMContentLoaded',function(){
    const list =document.querySelector('#book-list ul');
    const forms =document.forms;

    list.addEventListener('click',(e)=>{
        if(e.target.className=='delete'){
            const li=e.target.parentElement;
            li.parentNode.removeChild(li);
        }
    });
    const addForm=forms('username');
    addForm.addEventListener ;'submit',function(e){
    e.preventDefault();

const value=addForm.querySelector('input[type="text"]').value;
const li=document.createElement(li);
const gameName=document.createElement('span');
const deleteButton=document.createElement('span');

gameName.textContent=value;
deleteButton.textContent='delete';

gameName.classList.add('name');
deleteButton.classList.add('delete');

li.appendChild(gameName);
li.appendChild(deleteButton);
list.appendChild(li);
}
});
