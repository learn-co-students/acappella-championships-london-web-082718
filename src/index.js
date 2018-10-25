
const myTbody = document.querySelector('tbody')
let myH2 = document.querySelector('#winner')
let winnerId;
let groupData;

fetch('http://localhost:3000/a_cappella_groups')
    .then(res => res.json())
    .then(groups => groups.forEach(group => renderGroup(group)))

const renderGroup = (group) => {
    myTr = document.createElement('tr')
    console.log(myTbody)
    myTr.innerHTML =`<td>${group.college.name}</td> <td>${group.name}</td> <td>${group.membership}</td> <td>${group.college.division}</td> <td><img src='./assets/trophy.png' data-id='${group.id}'/></td>`
    // console.log(myTr)
    myTbody.appendChild(myTr)
}

// const renderGroups = (groupData) => {
//    groupData.forEach(group => renderGroup(group))
// }


document.addEventListener('click', function(e) {
    if(e.target && e.target.nodeName === "IMG") {
    winnerId = parseInt(e.target.dataset.id)
    winnerName = e.target.parentNode.parentNode.childNodes[0].innerText
    declareWinner(winnerName, winnerId)
    }})

const declareWinner = (winnerName, winnerId) => {
    let winnerEl = document.querySelector(`[data-id="${winnerId}"]`).parentElement.parentElement
    myH2.innerText = `Winner: ${winnerName}`
    // renderGroups(groupData)
    winnerEl.style.display="none";
}



