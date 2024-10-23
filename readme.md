// API Key (replace with your own key from newsapi.org)
const apiKey = 'f73f1b11e8e74125943386e3b7775612';
const newsApiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

const searchInput = document.getElementById('searchInput');
const newsContainer = document.getElementById('newsContainer');

// Fetch news articles on page load
fetchNews();

// Fetch news articles from API
function fetchNews(query = '') {
    let url = newsApiUrl;

    // If there's a search query, modify the API URL
    if (query) {
        url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;
    }

    // Fetch news using fetch API
    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayNews(data.articles);
        })
        .catch(error => {
            console.error('Error fetching news:', error);
        });
}

// Display news articles on the page
function displayNews(articles) {
    newsContainer.innerHTML = ''; // Clear previous news

    if (articles.length === 0) {
        newsContainer.innerHTML = '<p class="text-center">No news found.</p>';
        return;
    }

    // Loop through each article and create Bootstrap card elements
    articles.forEach(article => {
        const newsCard = `
            <div class="col-md-4 mb-4">
                <div class="card h-100 shadow-sm hover-shadow">
                    <img src="${article.urlToImage || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMxHXBL-_9XiMuNMg61vGgs0cNW2sriaul6A&s'}" class="card-img-top" alt="News Image">
                    <div class="card-body">
                        <h5 class="card-title">${article.title}</h5>
                        <p class="card-text">${article.description || 'No description available.'}</p>
                        <a href="${article.url}" target="_blank" class="btn btn-dark">Read more</a>
                    </div>
                </div>
            </div>

        `;
        newsContainer.innerHTML += newsCard;
    });
}

// Live search feature
searchInput.addEventListener('input', () => {
    const query = searchInput.value;
    fetchNews(query); // Fetch news based on search query
});
