const articles = [
    {
        id: 1,
        title: 'Septimus Heap Book One: Magyk',
        date: 'July 5, 2022',
        description: 'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
        imgAlt: 'Book cover for Septimus Heap 1',
        ages: '10-14',
        genre: 'Fantasy',
        stars: '⭐⭐⭐⭐⭐'
    },
    {
        id: 2,
        title: 'Magnus Chase Book One: Sword of Summer',
        date: 'December 12, 2021',
        description: 'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
        imgSrc: 'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
        imgAlt: 'Book cover for Magnus Chase 1',
        ages: '12-16',
        genre: 'Fantasy',
        stars: '⭐⭐⭐⭐'
    },
    {
        id: 3,
        title: "Belgariad Book One: Pawn of Prophecy",
        date: "Feb 12, 2022",
        description:
        "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
        imgSrc:
        "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
        imgAlt: "Book cover for Pawn of Prophecy",
        ages: "12-16",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐⭐"
        }

];

const recentPosts = document.getElementById('recent-posts');
const postDetails = document.getElementById('post-details');

// Populate Recent Posts and Post Details
articles.forEach(article => {
    // Create HTML for the recent post (middle section)
    const post = document.createElement('article');
    post.classList.add('post');
    post.innerHTML = `
        <h3>${article.title}</h3>
        <img src="${article.imgSrc}" alt="${article.imgAlt}">
        <p>${article.description} <a href="#" class=" read-more">Read More...</a></p>
        
    `;
    recentPosts.appendChild(post);

    // Create HTML for post details (left sidebar)
    const detailItem = document.createElement('li');
    detailItem.innerHTML = `
        <h4>${article.title}</h4>
        <p id="date"> ${article.date}</p>
        <p>${article.genre}</p>
        <p>${article.stars}</p>
    `;
    postDetails.appendChild(detailItem);
});
