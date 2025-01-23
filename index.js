import { playlistName } from "./playlistName.js";

const thirdHeigth = document.querySelector(".third-heigth");


const ulPlaylist = document.createElement('ul');


const createList = (playlists) => {
    playlists.map((el) => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-item')
        const playlistContent = document.createElement('span');

        playlistContent.style.color = "#fff";
        playlistContent.innerText = el;
        listItem.appendChild(playlistContent);

        return ulPlaylist.appendChild(listItem)
    })
}
thirdHeigth.appendChild(ulPlaylist);

createList(playlistName);



