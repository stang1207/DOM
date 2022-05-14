// List of characters that will be used to render the cards on the DOM.
// We could pretend that this is a database that we are fetching the data from.
let characters = [
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  },
  {
    id: 44,
    name: 'Body Guard Morty',
    status: 'Dead',
    species: 'Human',
    image: 'https://rickandmortyapi.com/api/character/avatar/44.jpeg',
  },
  {
    id: 324,
    name: 'Sleepy Gary',
    status: 'Dead',
    species: 'Alien',
    image: 'https://rickandmortyapi.com/api/character/avatar/324.jpeg',
  },
  {
    id: 108,
    name: 'Dr. Xenon Bloom',
    status: 'Dead',
    species: 'Humanoid',
    image: 'https://rickandmortyapi.com/api/character/avatar/108.jpeg',
  },
  {
    id: 118,
    name: 'Evil Morty',
    status: 'Alive',
    species: 'Human',
    image: 'https://rickandmortyapi.com/api/character/avatar/118.jpeg',
  },
  {
    id: 329,
    name: 'Snuffles',
    status: 'Alive',
    species: 'Animal',
    image: 'https://rickandmortyapi.com/api/character/avatar/329.jpeg',
  },
  {
    id: 306,
    name: 'Scary Terry',
    status: 'Alive',
    species: 'Mythological Creature',
    image: 'https://rickandmortyapi.com/api/character/avatar/306.jpeg',
  },
];

/**
 * createNodeEl
 * @param {string} element - The element to create a node for (i.e. 'div')
 * @param {string} className - The class name to add to the element
 * @param {string} textContent - The text content to add to the element
 * @param {string} src - The src attribute that needs to be added to the element
 * @param {string} alt - The alt attribute that needs to be added to the element
 * @returns {object} - Returns a node element
 * @description - Creates a node element with the given parameters
 * @todo - We could further improve this function by making it even more generic and reusable for other elements.
 */
const createNodeEl = (element, className, textContent, src, alt) => {
  const el = document.createElement(element);
  el.classList.add(className);
  el.textContent = textContent;
  if (src) {
    el.setAttribute('src', src);
  }
  if (alt) {
    el.setAttribute('alt', alt);
  }
  return el;
};

/**
 *
 * @param {Object} character - An character object from the characters array
 * @returns {object}  - Returns a node (HTML) element with the character information filled in
 * @description - Creates a card element (HTML / node) using an object that contains the character information and returns it
 */
const createCharacterCard = (character) => {
  // Create all the character card elements needed using the createNodeEl function
  const card = createNodeEl('li', 'character-card', null, null, null);
  const cardImgWrapper = createNodeEl('div', 'character-card__img-box');
  const cardImg = createNodeEl(
    'img',
    'character-card__img',
    null,
    character.image,
    character.name
  );
  const cardContent = createNodeEl('div', 'character-card__content');
  const cardName = createNodeEl('h3', 'character-card__name', character.name);
  const cardStatus = createNodeEl(
    'p',
    'character-card__status',
    `${character.status} - ${character.species}`
  );
  const cardDeleteButton = createNodeEl(
    'button',
    'character-card__delete',
    'Delete'
  );

  //Add delete button event listener so that it can remove the character from the array
  cardDeleteButton.addEventListener('click', () => {
    const updatedCharacters = removeCharacter(character.id);
    renderCharacterCards(updatedCharacters);
  });

  // Append all the elements inside the card to the card element itself
  cardImgWrapper.appendChild(cardImg);
  card.appendChild(cardImgWrapper);
  cardContent.appendChild(cardName);
  cardContent.appendChild(cardStatus);
  cardContent.appendChild(cardDeleteButton);
  card.appendChild(cardContent);

  // Finally return the card element to the caller function so that it can be appended to the DOM later on
  return card;
};

/**
 * renderCharacters
 * @param {array} characters - An array of characters that needs to be rendered on the DOM.
 * @returns {undefined} - Returns nothing.
 * @description - Clears the character cards from the DOM and then renders the new character cards using the createCharacterCard function and appends them to the DOM.
 */
const renderCharacterCards = (listOfCharacters) => {
  const cardContainer = document.querySelector('.rick-and-morty__cards');
  cardContainer.innerHTML = '';
  return listOfCharacters.forEach((character) => {
    const charcterCard = createCharacterCard(character);
    cardContainer.appendChild(charcterCard);
  });
};

/**
 *
 * @param {Number} characterId - The id of the character that needs to be deleted
 * @returns {Array} - Returns the filtered array of characters without the character that was deleted
 * @description - Removes the character from the array and the DOM using the character id as a reference to the character that needs to be deleted from the array and the DOM respectively.
 */
const removeCharacter = (characterId) => {
  characters = characters.filter((character) => character.id !== characterId);
  return characters;
};

// Render the characters array to the DOM when the page first loads
renderCharacterCards(characters);
