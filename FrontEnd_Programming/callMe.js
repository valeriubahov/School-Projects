window.onload = () => {
    //This ill change my background color
    document.body.style.backgroundColor = 'lightgray';

    //This creates my header with an H1 appended
    let myHeader = document.createElement('header');
    let myH1 = document.createElement('h1');
    myH1.innerText = "Welcome, choose your favourite puppy";
    myHeader.appendChild(myH1);
    document.body.appendChild(myHeader);

    // This creates my Image tag with a img on it 
    let myImg = document.createElement('img');
    myImg.setAttribute('src', 'https://cdn.shopify.com/s/files/1/0272/4770/6214/articles/when-do-puppies-start-walking.jpg?v=1593020034');
    let myDiv = document.createElement('div');
    myDiv.appendChild(myImg);
    document.body.appendChild(myDiv);

    // This creates the Paragraph
    let myParagraph = document.createElement('p');
    myParagraph.innerText = 'This is my puppy, is it cute right?\nSelect your puppy: ';
    document.body.appendChild(myParagraph);

    // This creates the List
    let myUl = document.createElement('ul');
    for (let i = 0; i < 5; i++) {
        let myLi = document.createElement('li');
        myLi.innerText = "Puppy " + (i + 1);
        myUl.appendChild(myLi);
    }
    document.body.appendChild(myUl);
};