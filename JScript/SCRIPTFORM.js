const form = document.getElementById('bigForm')
form.addEventListener('submit', function (e){
    e.preventDefault()

    


const taskCompleted = document.getElementById('tasksToDo')
console.log(taskCompleted)

const taskOk = document.createElement('div')

taskOk.innerHTML = `
<p>${taskCompleted.value}</p> `


const completedTask = document.getElementById('done')
completedTask.appendChild(taskOk)
})


 
    



























