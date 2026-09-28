const API_URL = 'https://jsonplaceholder.typicode.com/posts';
const IMAGE_URL = 'https://picsum.photos';
const cardsContainer = document.getElementById('cards-container');

async function fetchPosts() {
    try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`ошибка сервера: ${response.status}`);
        }
        
        const posts = await response.json();
        renderCards(posts);
        
    } catch (error) {
        showError('произошла ошибка.');
        console.error(error);
    }
}
function renderCards(posts) {
    cardsContainer.innerHTML = '';
    posts.forEach(post => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        cardElement.innerHTML = `
            <img class="card-image" src="${IMAGE_URL}?random=${post.id}" alt="Card image">
            <div class="card-content">
                <h3 class="card-title">${post.title}</h3>
                <p class="card-description">${post.body}</p>
            </div>
        `;

        cardsContainer.appendChild(cardElement);
    });
}
function showError(message) {
    cardsContainer.innerHTML = `<p class="error-message">${message}</p>`;
}
fetchPosts();
