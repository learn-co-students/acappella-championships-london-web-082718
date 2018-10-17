document.addEventListener('DOMContentLoaded', () => {

  API.fetchGroups()
    .then(resp => aCappellaGroup.addMultipleGroups(resp))
    .then(aCappellaGroup.displayGroups)

  headerLinks.forEach( link => 
    link.addEventListener('click', (e) => {
      aCappellaGroup.sortAndDisplay(e.target.innerText)
    })
  )

})

const teamTable = document.querySelector('#table-body')
const winnerBox = document.querySelector('#winner')
const headerLinks = document.querySelector('#headers').querySelectorAll('a')

