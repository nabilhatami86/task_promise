const apiKey = 'f73f1b11e8e74125943386e3b7775612';
const apiurl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

const searchInput = document.getElementById('searchInput');
const newsContainer = document.getElementById('newsContainer');

fetchNews()

function fetchNews(query = '') {
    let url = apiurl;;

    if (query) {
        url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;
    }

fetch(url)
    .then(response => response.json())
    .then(data => {
        displayNews(data.articles);
    })
    .catch(e => {
        console.error('error fetching news', e);
    });

}

function displayNews(articles) {
    newsContainer.innerHTML='';

    if (articles.length === 0 ) {
        newsContainer.innerHTML = '<p class="text-center">No news found</p>';
        return;
    }

    articles.forEach(article => {
        const newsCard = `
            <div class="col-md-4 mb-4">
                <div class="card h-100 shadow-sm">
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

searchInput.addEventListener('input', ()=>{
    const query = searchInput.value;
    fetchNews(query);
});

