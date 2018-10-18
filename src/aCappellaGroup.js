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
      selection.forEach(group => 
        teamTable.appendChild(group.renderNormal())
      )
    }
    
    static crownWinner(winner) {
      winnerBox.removeChild(winnerBox.firstChild)
      winnerBox.appendChild(winner.renderWinner())
      this.clearGroupDisplay()
      this.displayGroups(all.filter(group => group !== winner))
    }

    static sortAndDisplay(headerText) {
      this.clearGroupDisplay()
      this.displayGroups(all.sort((a, b) => { 
        return this.convertTextToAttribute(headerText, a)
                .localeCompare(this.convertTextToAttribute(headerText, b))
        }
      ))
    }

    static convertTextToAttribute(headerText, groupObj) {
    switch (headerText) {
      case "College":
        return groupObj.college.name;
      case "Group Name":
        return groupObj.name;
      case "Membership":
        return groupObj.membership;
      case "Division":
        return groupObj.college.division;
    }
  }

    renderNormal() {
      this.el = document.createElement('tr')
      this.el.innerHTML = `
        <td>${this.college.name}</td>
        <td>${this.name}</td>
        <td>${this.membership}</td>
        <td>${this.college.division}</td>
        <td><button class="crown">Crown</button></td>
        <td><button class="delete">Delete</button></td>
      `
      this.watchButtons()
      return this.el
    }

    renderWinner() {
      this.el = document.createElement('h1')
      this.el.innerHTML = `Winner: ${this.name}!`
      return this.el
    }

    watchButtons() {
      this.el.addEventListener('click', (e) => {
        if (e.target.className === 'crown') {
          aCappellaGroup.crownWinner(this)
        } else if (e.target.className === 'delete') {
          this.remove()
        }
      })
    }

    remove() {
      API.deleteGroup(this)
        .then(this.el.remove())
    }
  }

})()