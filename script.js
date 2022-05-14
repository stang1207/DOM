const cardContainerEl = document.querySelector('.rick-and-morty__cards');
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

const emptyCardContainer = (containerEl) => {
  containerEl.innerHTML = '';
  return containerEl;
};

const createNodeEl = (element, className, textContent, src, alt) => {
  const el = document.createElement(element);
  el.classList.add(className);
  el.textContent = textContent;
  // If the src or alt attributes are passed in, add them to the element
  if (src) {
    el.setAttribute('src', src);
  }
  if (alt) {
    el.setAttribute('alt', alt);
  }
  return el;
};

const createCharacterCard = (character) => {
  // Create all the character card elements needed using the createNodeEl function
  const card = createNodeEl('li', 'character-card');
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

  //Add delete button event listener so that it can remove the character from the array and DOM later on
  cardDeleteButton.addEventListener('click', () => {
    const updatedListOfCharacters = removeCharacter(character.id);
    renderCharacterCards(updatedListOfCharacters);
  });

  // Append all the elements inside the card to the card element itself
  cardImgWrapper.appendChild(cardImg);
  card.appendChild(cardImgWrapper);
  cardContent.appendChild(cardName);
  cardContent.appendChild(cardStatus);
  cardContent.appendChild(cardDeleteButton);
  card.appendChild(cardContent);

  // Finally return the card element
  return card;
};

const removeCharacter = (characterId) => {
  // Use the character id and remove it from the character array
  characters = characters.filter((character) => character.id !== characterId);
  return characters;
};

const renderCharacterCards = (listOfCharacters) => {
  const cardContainer = emptyCardContainer(cardContainerEl);
  listOfCharacters.forEach((character) => {
    const charcterCard = createCharacterCard(character);
    cardContainer.appendChild(charcterCard);
  });
};

renderCharacterCards(characters);

// Documentation for the functions above
/**
 * emptyCardContainer()
 * @param {HTMLElement} containerEl - The card container element
 * @returns {HTMLElement}
 * @description This function will empty the card container and return the card container element
 */

/**
 * createNodeEl
 * @param {string} element - The element to create a node for (i.e. 'div')
 * @param {string} className - The class name to add to the element
 * @param {string} textContent - The text content to add to the element
 * @param {string} src - The src attribute that needs to be added to the element
 * @param {string} alt - The alt attribute that needs to be added to the element
 * @returns {object} - Returns a node element
 * @description - Creates a node element with the given parameters
 * @challenge - Try to make this more generic so that it can be used for any element and any attribute (i.e. href, type, etc.)
 */

/**
 * createCharacterCard
 * @param {Object} character - An character object from the characters array
 * @returns {object}  - Returns a node (HTML) element with the character information filled in
 * @description - Creates a card element (HTML / node) using an object that contains the character information
 */

/**
 * removeCharacter
 * @param {number} id - The id of the character to be removed
 * @returns {undefined} - Returns nothing or undefined
 * @description - Removes a character from the characters array and the DOM
 */

/**
 * renderCharacters
 * @param {array} characters - An array of characters
 * @returns {undefined} - Returns nothing or undefined
 * @description - Renders the characters in the characters array to the DOM
 */
