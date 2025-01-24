import { playlistName } from "./playlistName.js";
import { createArtistCard } from "./ArtistCard.js";


const fetchData = async () => {
    const response = await fetch("artists.json");
    const data = await response.json()

    return data.artists
}

let getArtists = await fetchData();

const thirdHeigth = document.querySelector(".third-heigth");
const mainNavInput = document.querySelector(".main-nav-input");


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




const showArtists = async (arr) => {
    arr.map(({name, genre}) => {
       document.querySelector('.artists-list').appendChild(createArtistCard(name, genre))
    });
}

showArtists(getArtists);

mainNavInput.addEventListener("input", async (event) => {
    const word = event.target.value;
    const searchWord = word.toLowerCase().trim(); 
    

    document.querySelector(".artists-list").innerHTML = '';

    const newArray = getArtists.filter(e => {
        const getName = e.name.toLowerCase();
        const getGenre = e.genre.toLowerCase();
        
        const resultArr = getName.includes(searchWord) || getGenre.includes(searchWord)
        return resultArr;
    })    

    showArtists(newArray)
})