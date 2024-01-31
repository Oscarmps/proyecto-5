const sectionElement = document.querySelector('section');

const biker = [
    { id: 1, name: 'ft-150g', img: '../assets/img/ft150g.jpg' },
    { id: 2, name: 'ft125ts', img: '../assets/img/ft125ts.webp' },
    { id: 3, name: 'ft150ts', img: '../assets/img/ft150ts.webp' },
    { id: 4, name: 'ft150gts', img: '../assets/img/ft150gts.jpg' },
    { id: 5, name: 'ft180ts', img: '../assets/img/ft180ts.jpg' },
    { id: 6, name: 'ft200ts', img: '../assets/img/ft200ts.jpg' },
    {id: 7,name: 'ft250ts', img:'../assets/img/ft250ts.jpg' },
    {id: 8,name: '125fl', img:'../assets/img/125fl.jpg' },
    {id: 9,name: 'ft150 HEAVY DUTY', img:'../assets/img/ft150heavy.webp' },
];

const render = () => {
    for (let i=0; i<biker.length; i++) {
        const divElement = document.createElement('div');
        const titleElement = document.createElement('h2');
        const imgElement = document.createElement('img');
        const buttonElement = document.createElement('button');

        divElement.className = 'card';
        titleElement.innerHTML = biker[i].name;
        titleElement.className = 'title-card';
        imgElement.setAttribute('src', biker[i].img);
        imgElement.setAttribute('width', 200);
        imgElement.setAttribute('height', 200);
        buttonElement.innerHTML = biker[i].name;
        buttonElement.className = 'button';

        buttonElement.addEventListener('click', (event) => {
            console.log(event.target)
            const message = `informacion de ${event.target.innerText} gracias por elegir esta marca`
            alert(message);
        });

        sectionElement.appendChild(divElement);
        divElement.appendChild(titleElement);
        divElement.appendChild(imgElement);
        divElement.appendChild(buttonElement);

    }
}

render();
