// Enter your code below.
const resourcesDiv = document.querySelector('.javascript-resources');
const showResourcesButton = document.getElementById
('show-resources');

showResourcesButton.addEventListener('click',() => {
    resourcesDiv.classList.remove('d-none');

});

resourcesDiv.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('list-group-item')) {
        console.log('Mouseover on:', event.target )
        event.target.classList.add('fw-bold');

    }
    
});

resourcesDiv.addEventListener('mouseout', (event) => {
    if (event.target.classList.contains('list-group-item')) {
        event.target.classList.remove('fw-bold');
    }
});

resourcesDiv.addEventListener('click', (event) => {
    if (event.target.classList.contains('list-group-item')) {
        event.target.classList.remove('fw-bold');
        event.target.classList.add('fst-italic');

    }
    

});