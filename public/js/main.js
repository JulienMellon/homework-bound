const deleteBtn = document.querySelectorAll('.del')
const taskItem = document.querySelectorAll('span.not')
const taskComplete = document.querySelectorAll('span.completed')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTask)
})

Array.from(taskItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(taskComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

async function deleteTask(){
    const taskId = this.parentNode.dataset.id
    try{
        const response = await fetch('tasks/deleteTask', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'taskIdFromJSFile': taskId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const taskId = this.parentNode.dataset.id
    try{
        const response = await fetch('tasks/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'taskIdFromJSFile': taskId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const taskId = this.parentNode.dataset.id
    try{
        const response = await fetch('tasks/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'taskIdFromJSFile': taskId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}