window.onload = () => {
    const myH1 = document.createElement('h1');

    myH1.innerText = "This is my header";

    document.body.appendChild(myH1);

    const myList = document.createElement('ol');
   
    

    myList.appendChild(document.createElement('li'));

    document.body.appendChild(myList);

    const arrLi = document.querySelectorAll('li')[0].innerText = "Test";

    const liii = document.querySelector('li:nth-of-type(1)').innerText = "test2";


}