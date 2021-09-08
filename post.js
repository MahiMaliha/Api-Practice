function posts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
                .then(res => res.json())
                .then(data => displayPosts(data));
}

posts()

function displayPosts(posts) {
        const postContainer = document.getElementById('posts-container');
        for (const post of posts) {
                console.log(post);
                const div = document.createElement('div');
                div.classList.add('posts')
                div.innerHTML = `
                        <h3>${post.title}</h3>
                        <p>${post.body}</p>
                `
                postContainer.appendChild(div);
        }

}