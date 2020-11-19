var ul = document.getElementById('list')
var removeAll = document.getElementById('removeAll')
var add = document.getElementById('add')

add.onclick = function () {
	addLi(ul)
}

function addLi(targetUi) {
	var inputText = document.getElementById('text').value
	var li = document.createElement('li')
	var textNode = document.createTextNode(inputText + ' ')
	var removeButton = document.createElement('button')

	document.getElementById('text').value = ''

	if (inputText.length === 0){
		alert('Please enter task')
		return false
	}

	removeButton.className = 'removeTask'
	removeButton.innerHTML = 'Mark as complete'
	removeButton.setAttribute('onclick', 'removeTask(this)')

	li.appendChild(textNode)
	li.appendChild(removeButton)

	targetUi.appendChild(li)
}

function removeTask(item) {
	var parent = item.parentElement
	parent.parentElement.removeChild(parent)
}

removeAll.onclick = function () {
	ul.innerHTML = ''
}
