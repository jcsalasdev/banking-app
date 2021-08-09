

const listNode = document.querySelector('#ul')
const bodyNode = document.querySelector('#body')

const expenses = ['a','b','c','f']

function renderListToBody(){
    for(let i = 0; i < expenses.length ; i++){
        const liNode = document.createElement('li')
        liNode.textContent = expenses[i]
        listNode.appendChild(liNode)
    }
    
}

bodyNode.appendChild(listNode)



function addExpense(expense){
   expense.push(expense) 
   renderListToBody()
}


//js

