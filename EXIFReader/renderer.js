const renderer = window.electronapi.getRenderer();
console.log(renderer)

renderer.on('fileDataRetrieve', (data) => {
    console.log(data)

    const author = document.querySelector('#author');
    const date = document.querySelector('#dateTaken');

    author.innerHTML = data.artist;
    date.innerHTML = data.dateTaken;

})

document.querySelector('#submitButton').addEventListener('click', () => {

    const selectedPhoto = document.querySelector('#photo');

    if (selectedPhoto.files.length > 0) {
        const filepath = document.querySelector('#photo').files[0].path;
        console.log(filepath);
        electronapi.sendFilePath(filepath);
    }
    else {
        alert('You haven\'t selected a file yet!');
    }



    console.log(document.querySelector('#photo').files[0].path);
})