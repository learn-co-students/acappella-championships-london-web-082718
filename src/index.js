document.addEventListener('DOMContentLoaded', () => {

  fetch(dataURL).then(resp => resp.json())
    .then(resp => aCappellaGroup.addMultipleGroups(resp))
    .then(aCappellaGroup.displayGroups)

})

const teamTable = document.querySelector('#table-body')
const winnerBox = document.querySelector('#winner')
const dataURL = 'http://localhost:3000/a_cappella_groups'

