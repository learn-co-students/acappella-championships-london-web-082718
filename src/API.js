class API {

  static init() {
    this.baseUrl = 'http://localhost:3000/a_cappella_groups'
  }

  static fetchGroups() {
    return fetch(this.baseUrl)
      .then(resp => resp.json())
  }

  static deleteGroup(group) {
    console.log(this.baseUrl)
    console.log(group.id)
    return fetch(this.baseUrl + `/${group.id}`, { 
      method: 'DELETE' 
    })
  }

}

API.init()
