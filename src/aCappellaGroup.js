const aCappellaGroup = (() => {

  let all = [];
  
  return class {
    constructor(groupObj) {
      Object.assign(this, groupObj)
    }

    static addGroup(groupObj) {
      all.push(new aCappellaGroup(groupObj))
    }

    static addMultipleGroups(data) {
      data.forEach(groupObj => 
        this.addGroup(groupObj))
    }

    static clearGroupDisplay() {
      while (teamTable.firstChild) {
        teamTable.removeChild(teamTable.firstChild)
      }
    }

    static displayGroups(selection=all) {
      selection.forEach(group => group.renderNormal())
    }
    
    static findGroup(id) {
      return all.find(group => group.id === id)
    }

    static crownWinner(id) {
      let winner = this.findGroup(id)
      winnerBox.removeChild(winnerBox.firstChild)
      winnerBox.appendChild(winner.renderWinner())
      this.clearGroupDisplay()
      this.displayGroups(all.filter(group => group !== winner))
    }

    renderNormal() {
      this.el = document.createElement('tr')
      this.el.innerHTML = `
      <td>${this.college.name}</td>
      <td>${this.name}</td>
      <td>${this.membership}</td>
      <td>${this.college.division}</td>
      <td><button id=${this.id}>Crown</button</td>
      `
      this.watchWinnerButton()
      teamTable.appendChild(this.el)
    }

    renderWinner() {
      this.el = document.createElement('h1')
      this.el.innerHTML = `Winner: ${this.name}!`
      return this.el
    }

    watchWinnerButton() {
      this.el.querySelector('button')
        .addEventListener('click', (e) => {
          console.log(e)
          aCappellaGroup.crownWinner(parseInt(e.target.id))
        })
    }

    remove() {
      this.el.remove()
    }
      

  }

})()