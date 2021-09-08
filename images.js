function loadImages() {
        fetch('https://jsonplaceholder.typicode.com/photos')
                .then(res => res.json())
                .then(data => showImages(data));
}

loadImages()//Call LoadImages Function


function showImages(images) {
        const imageContainer = document.getElementById('album-image');
        // for (const image of images) {
        //         // console.log(image);
        //         const div = document.createElement('div');
        //         div.innerHTML = `
        //         <img src=${image.url} alt="">
        //         `
        //         imageContainer.appendChild(div);
        // }
        for (var i = 0; i < 10; i++) {
                const image = images[i];
                const div = document.createElement('div');
                div.classList.add('img');
                div.innerHTML = `
                 <img src=${image.url} alt="">
                 `
                imageContainer.appendChild(div);
        }
}