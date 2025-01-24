export const createArtistCard = (name, genre) => {
    // Create elemets
    const divArtistCard = document.createElement('div');
    divArtistCard.classList.add('artist-card');

    const closeButton = document.createElement('div');
    closeButton.classList.add('close-button');

    const closeImg = document.createElement('img');
    closeImg.classList.add('close-img');
    closeImg.src = './img/Union.png';

    const artistImageContent = document.createElement('div');
    artistImageContent.classList.add("artist-image-content");

    const imageArtist = document.createElement('img');
    imageArtist.classList.add('image-artist');
    imageArtist.src = "./img/img-artist-test.png";

    const artistDecribe = document.createElement('div');
    artistDecribe.classList.add('artist-decribe');

    const nameArtist = document.createElement('p');
    nameArtist.classList.add('name');
    nameArtist.textContent = name;

    const genreArtist = document.createElement('p');
    genreArtist.classList.add('genre');
    genreArtist.textContent = genre;


    // assemble element
    closeButton.appendChild(closeImg);
    
    artistImageContent.appendChild(imageArtist);

    artistDecribe.appendChild(nameArtist);
    artistDecribe.appendChild(genreArtist);

    divArtistCard.appendChild(closeButton);
    divArtistCard.appendChild(artistImageContent);
    divArtistCard.appendChild(artistDecribe);

    // get element father
    return divArtistCard;
}
