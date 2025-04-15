let count = 1;
function add(){
    
    const task = document.querySelector('.task-in').value;
    console.log(task);
    const heading = document.createElement('p');
    heading.textContent = `${count}. ${task}`;
    document.body.appendChild(heading);
    const btn = document.createElement('button');
    btn.textContent = "Delete"
    btn.onclick = function(){
        heading.remove();
    }
    heading.appendChild(btn);
    count++;
}
