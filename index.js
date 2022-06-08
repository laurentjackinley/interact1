// console.log('Hello world')

const message = document.querySelector('#message')
function addMovie(event){
    event.preventDefault()
    const inputField = document.querySelector('input')
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')

    movieTitle.addEventListener('click',crossOffMovie )
    
    movieTitle.textContent = inputField.value
    movie.appendChild(movieTitle)
    
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener('click',deleteMovie)
    movie.appendChild(deleteBtn)
    
    
    
    document.querySelector('ul').appendChild(movie)
    inputField.value = ""
}

const form = document.querySelector('form')
form.addEventListener('submit', addMovie)

function deleteMovie(event){
    event.target.parentNode.remove()
    message.textContent = 'Movie deleted'
}

function crossOffMovie(event){
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')) {
        message.textContent = event.target.textContent + 'watched'
    } else {
        message.textContent = event.target.textContent + 'un-watched'
    }
}