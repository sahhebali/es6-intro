
// document.getElementById('add-border').addEventListener('click', function () {
//     const container = document.getElementById('friend-container');
//     container.style.border = '3px solid yellow';
// });
// 
// function addBackgroundColor() {
//     const friends = document.getElementsByClassName('friend');
//     for (const friend of friends) {
//         friend.style.backgroundColor = 'lightblue';
//     }
// }

// document.getElementById('add-friend').addEventListener('click', function () {
//     const container = document.getElementById('friend-container');
//     const friendDiv = document.createElement('div');
//     friendDiv.classList.add('friend');
//     friendDiv.innerHTML = `
//             <h3 class="friend-name">New Friend</h3>
//             <p>Quam, sapiente.</p>
//     `;
//     container.appendChild(friendDiv);
// })

document.getElementById('add-border').addEventListener('click', function () {
    const friendContainer = document.getElementById('friend-container');
    friendContainer.style.border = '3px solid red';
})
function addBackground() {
    const friend = document.getElementsByClassName('friend');
    for (const friends of friend) {
        friends.style.backgroundColor = 'lightblue';
    }
}

document.getElementById('addFriend').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = ` <h3 class="friend-name">New Friend</h3>
 <p>Quam, sapiente.</p> `
    container.appendChild(friendDiv);

})
