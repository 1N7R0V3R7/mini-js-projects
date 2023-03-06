let groceryArray = [];
let updateFlag = false
let updateKey

const clearAllBtn = document.getElementById('clear-all-btn')
const groceryListComponent = document.querySelector('ul')
const submitBtn = document.getElementById('submit-btn')
const inputEl = document.querySelector('input')
const toast = document.getElementById('toast')

function renderList(groceryArray) {
    let groceryList = ''
    groceryArray.forEach((item, index) => {
        groceryList += `<li class="flex justify-between items-center px-8 py-4">
                            <p class="">
                                ${item}
                            </p>
                            <div class="flex items-center gap-2" data-key=${index}>
                                <button class="" id="edit-btn" onclick="updateItem(event)">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 pointer-events-none text-green-500"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                        <path fill-rule="evenodd"
                                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </button>
                                <button class="" id="delete-btn" onclick="removeItem(event)">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 pointer-events-none text-red-500"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </li>`;
    })
    groceryListComponent.innerHTML = groceryList;
    groceryArray.length ? clearAllBtn.classList.remove('hidden') : clearAllBtn.classList.add('hidden')
}

function insertNewItem() {
    if (inputEl.value.trim() === '') {
        toast.classList.remove('hidden')
        toast.classList.add('delete')
        toast.textContent = 'Please Enter Value'
        const toastTimeout = setTimeout(() => {
            toast.classList.add('hidden')
            toast.classList.remove('delete')
        }, 1000)
        return;
    }
    toast.classList.remove('hidden')
    toast.classList.add('create-update')
    if (updateFlag) {
        groceryArray[updateKey] = inputEl.value.trim()
        inputEl.value = ''
        renderList(groceryArray)
        updateFlag = !updateFlag
        submitBtn.textContent = 'Submit'
        toast.textContent = 'Value Changed'
    }
    else {
        groceryArray.push(inputEl.value.trim())
        renderList(groceryArray);
        inputEl.value = ''
        toast.textContent = 'Item Added To The List'
    }
    const toastTimeout = setTimeout(() => {
        toast.classList.add('hidden')
        toast.classList.remove('create-update')
    }, 1000)
}

function removeItem(event) {
    toast.classList.remove('hidden')
    toast.classList.add('delete')
    toast.textContent = 'Item removed'
    const key = event.target.parentElement.getAttribute('data-key')
    const removedItem = groceryArray.splice(key, 1)
    renderList(groceryArray);
    setTimeout(() => {
        toast.classList.add('hidden')
        toast.classList.remove('delete')
    }, 1000);
}

function updateItem(event) {
    const key = event.target.parentElement.getAttribute('data-key')
    updateFlag = !updateFlag
    updateKey = key
    submitBtn.textContent = 'Update'
    inputEl.focus()
    inputEl.value = groceryArray[key]
}

window.addEventListener('load', renderList(groceryArray))

clearAllBtn.addEventListener('click', () => {
    toast.classList.remove('hidden')
    toast.classList.add('delete')
    toast.textContent = 'Empty List'
    groceryArray = []
    renderList(groceryArray);
    setTimeout(() => {
        toast.classList.add('hidden')
        toast.classList.remove('delete')
    }, 1000);
})

submitBtn.addEventListener('click', insertNewItem)

inputEl.addEventListener('keypress', (e) => {
    if (e.code === 'Enter') {
        insertNewItem()
    }
})
