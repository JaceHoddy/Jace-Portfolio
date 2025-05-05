const cards = [
    {
        title: "A9 Structural Design",
        description: "A9 STRUCTURAL DESIGN LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIGENDI VOLUPTATES.",
        image: ["./images/20250320_123332 1.png", "./images/Content Hub.png", "./images/Departments - Jace Hoddy.png"],
        link: "https://www.figma.com/design/CRJB4tA35YZifyRxVrqfll/Final-Submission-%7C-Final-Document?m=auto&t=SnuaNzBaWavVSb9o-6",
    },
    {
        title: "Media Formats",
        description: "MEDIA FORMATS LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIGENDI VOLUPTATES.",
        image: ["./images/Tabloid - 1.png", "./images/Frame 11.png", "./images/Frame 18.png"],
        link: "https://www.figma.com/design/CRJB4tA35YZifyRxVrqfll/Final-Submission-%7C-Final-Document?m=auto&t=SnuaNzBaWavVSb9o-6",
    },
    {
        title: "FEiT Mobile App Redesign",
        description: "FEiT LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIGENDI VOLUPTATES.",
        image: ["./images/Screenshot 2025-05-03 000845.png"],
        link: "https://www.figma.com/design/fpY1YLpUwJrBxuFWkvmjgf/Untitled?node-id=0-1&p=f&t=Irz0Rk2MJNFx0gmL-0",
    },
    {
        title: "EDAS website redesign",
        description: "EDAS LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIGENDI VOLUPTATES.",
        image: ["./images/image 7.png", "./images/Home.png", "./images/Log In.png"],
        link: "https://www.figma.com/design/OSVlS3jBZGssN7M8cAnLSz/EDAS-surface-comps-draft?m=auto&t=SPMCtORB7seXGsEI-6",
    },
    {
        title: "Wildlife Fund Redesign",
        description: "WILDLIFE FUND LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIGENDI VOLUPTATES.",
        image: ["./images/Desktop - 3.png", "./images/Desktop - 1.png"],
        link: "https://www.figma.com/design/agO2guqlybr1ngwgj94pLf/Non-profit-website-design?node-id=0-1&p=f&t=GvV183JkUYnY1njh-0",
    }
];

function generateCards(cards) {
    const workContainer = document.getElementById('work');
    workContainer.innerHTML = '';

    cards.forEach((card, index) => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardDiv.id = card.title.replace(/\s+/g, '_');

        const textDiv = document.createElement('div');
        textDiv.className = 'text';

        const h2 = document.createElement('h2');
        h2.textContent = card.title;

        const p = document.createElement('p');
        p.textContent = card.description;

        const button = document.createElement('button');
        button.textContent = 'Learn More!';
        button.addEventListener('click', () => populateModal(card));

        textDiv.appendChild(h2);
        textDiv.appendChild(p);
        textDiv.appendChild(button);

        const img = document.createElement('img');
        img.width = 720;
        img.height = 545;
        img.src = card.image[0] || '';
        if (index === 0 || index === 3) {
            img.src = card.image[card.image.length - 1] || '';
        }
        img.alt = card.title;

        cardDiv.appendChild(textDiv);
        cardDiv.appendChild(img);

        workContainer.appendChild(cardDiv);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    generateCards(cards);
});

const themeElement = document.querySelector('#themeToggle')

const body = document.body

themeElement.addEventListener('click', () => {
    body.classList.toggle('theme-dark')
})

const dialog = document.querySelector('dialog')
const dialogHeader = document.querySelector('.top')

const closeButton = document.querySelector('#dialogClose')

const scrollButtons = {
    left: document.querySelector('button.scroll.left'),
    right: document.querySelector('button.scroll.right')
};

closeButton.addEventListener('click', () => {
    dialog.close()
    enableScroll()
})

function populateModal(card) {
    const dialogHeader = document.querySelector('.top h2');
    dialogHeader.innerText = card.title;

    const dialogContent = document.querySelector('dialog #body');
    dialogContent.innerHTML = '';
    const dialogText = document.createElement('p');
    dialogText.textContent = card.description;

    const imageSection = document.querySelector('dialog #images');
    imageSection.innerHTML = '';
    card.image.forEach((element, index) => {
        const img = document.createElement('img');
        img.src = element;
        img.alt = card.title + " image " + (index + 1);
        imageSection.appendChild(img);
    });

    const link = document.createElement('a');
    link.href = card.link;
    link.target = '_blank';
    link.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png" alt="Figma logo"> <p>View in Figma</p>';
    link.classList.add('link');

    dialogContent.appendChild(dialogText);
    dialogContent.appendChild(link);

    if (card.title === "A9 Structural Design") {
        const link2 = document.createElement('a');
        link2.href = "https://www.figma.com/design/rwkhw2ZZtXgVFJDbUdJFGc/Design-Doc?node-id=0-1&p=f&t=Q4WtXvuaEUUiRWpY-0";
        link2.target = '_blank';
        link2.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png" alt="Figma logo"> <p>Design Doc</p>';

        link2.classList.add('link');
        dialogContent.appendChild(link2);
    }


    setTimeout(() => {
        imageSection.scrollLeft = 0;
        updateScrollButtons(imageSection);
    }, 0);

    dialog.showModal();
    disableScroll();

    updateScrollButtons(imageSection);
}

const scrollAmount = 300;
const waitTime = 400; // 0.4 second


scrollButtons.left.addEventListener('click', () => {
    const imageSection = document.querySelector('dialog #images');

    imageSection.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });

    setTimeout(() => updateScrollButtons(imageSection), waitTime);
});

scrollButtons.right.addEventListener('click', () => {
    const imageSection = document.querySelector('dialog #images');

    imageSection.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });

    setTimeout(() => updateScrollButtons(imageSection), waitTime);
});

function updateScrollButtons(imageSection) {
    const maxScrollLeft = imageSection.scrollWidth - 800; // 800 is the width of the imageSection

    if (imageSection.scrollLeft <= 40) {
        scrollButtons.left.classList.remove('show');
    } else {
        scrollButtons.left.classList.add('show');
    }

    if (imageSection.scrollLeft >= maxScrollLeft) {
        scrollButtons.right.classList.remove('show');
    } else {
        scrollButtons.right.classList.add('show');
    }
}


function disableScroll() {
    document.body.style.overflow = 'hidden'
}
function enableScroll() {
    document.body.style.overflow = 'unset'
}

