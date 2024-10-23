# 📰 News Portal Website with Live Search 🔍

This repository contains a simple news portal website that fetches real-time news data from the [NewsAPI](https://newsapi.org/) and displays it to the user. It also includes a live search feature where users can search for news articles based on keywords. The project is built using **fetch** for making API requests and uses **Bootstrap** for the layout and styling.

## ✨ Features

- 🗞️ **Latest Headlines**: Fetches the latest headlines from [NewsAPI](https://newsapi.org/).
- 🔍 **Live Search**: Search for news articles as you type with real-time filtering.
- 💻 **Responsive Layout**: Built with **Bootstrap** for a seamless experience on all devices.
- 🖼️ **News Cards**: Each news article displays with an image, title, description, and a link to read more.
- 🚫 **Error Handling**: Graceful handling of missing images and descriptions.

## 🛠️ Technologies Used

- 🌐 **HTML5**: Basic structure of the website.
- 🎨 **CSS3**: Styling and layout.
- 🧩 **Bootstrap**: For responsive design and easy layout.
- 💡 **JavaScript (ES6)**: Logic for fetching data from the API and rendering the news articles.
- 🌍 **Fetch API**: For making HTTP requests to the NewsAPI.
- 📡 **NewsAPI**: Provides the news data via API.

## ⚙️ Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/news-portal.git
   ```

2. Navigate to the project folder:

   ```bash
   cd news-portal
   ```

3. Open the `index.html` file in your browser:

   ```bash
   open index.html
   ```

## 📝 How it Works

### 🔑 API Key

The app uses [NewsAPI](https://newsapi.org/) to fetch news articles. You'll need to replace the `apiKey` variable in the code with your own API key from NewsAPI.

```js
const apiKey = 'YOUR_API_KEY_HERE';
```

### 🌐 Fetching News

The `fetchNews()` function is responsible for fetching news articles. It defaults to fetching the top headlines from the US, but if a search query is provided, it fetches articles matching that query.

```js
function fetchNews(query = '') {
    let url = apiurl;

    if (query) {
        url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayNews(data.articles);
        })
        .catch(e => {
            console.error('Error fetching news:', e);
        });
}
```

### 📰 Displaying News

The `displayNews()` function dynamically generates Bootstrap cards to display each article with an image, title, description, and a link to read more.

```js
function displayNews(articles) {
    newsContainer.innerHTML = '';

    if (articles.length === 0) {
        newsContainer.innerHTML = '<p class="text-center">No news found</p>';
        return;
    }

    articles.forEach(article => {
        const newsCard = `
            <div class="col-md-4 mb-4">
                <div class="card h-100 shadow-sm">
                    <img src="${article.urlToImage || 'default-image.jpg'}" class="card-img-top" alt="News Image">
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
```

### 🔍 Live Search

The search functionality listens to input changes and filters the news articles in real-time by fetching matching news from the API.

```js
searchInput.addEventListener('input', () => {
    const query = searchInput.value;
    fetchNews(query);
});
```

## 🗝️ Getting Your API Key

1. Go to [NewsAPI](https://newsapi.org/).
2. Sign up for a free API key.
3. Replace the placeholder API key in the code with your own.

## 📦 Dependencies

- [Bootstrap](https://getbootstrap.com/): Used for layout and styling.
- [NewsAPI](https://newsapi.org/): Used to fetch news data.

## 📄 License

This project is licensed under the MIT License.
