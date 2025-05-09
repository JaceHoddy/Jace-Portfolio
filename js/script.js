const cards = [
    {
        title: "A9 Structural Design",
        description: "This is a redesign of the UVU CET website that I worked on alongside a team. For this project, we met with the website's stakeholder to understand her goals, the problems with the current site, and other key questions. After gathering her feedback, we conducted extensive research—surveying 125 people about their thoughts on the existing design, performing eye-tracking tests, and holding interviews. We also created vision boards, sketches, wireframes, surface comps, and a working prototype. Finally, we presented all of our findings and the improved website redesign.",
        image: ["./images/20250320_123332 1.png", "./images/Content Hub.png", "./images/Departments - Jace Hoddy.png"],
        link: "https://www.figma.com/design/CRJB4tA35YZifyRxVrqfll/Final-Submission-%7C-Final-Document?m=auto&t=SnuaNzBaWavVSb9o-6",
    },
    {
        title: "Media Formats",
        description: "This is my technology assessment, which I created on my own. My goal for this project was to learn more about media formats—including images, audio, and streaming—so I could better understand when to use each type. I also took the opportunity to improve my skills in Figma, Photoshop, and Illustrator.",
        image: ["./images/Tabloid - 1.png", "./images/Frame 11.png", "./images/Frame 18.png"],
        link: "https://www.figma.com/design/CRJB4tA35YZifyRxVrqfll/Final-Submission-%7C-Final-Document?m=auto&t=SnuaNzBaWavVSb9o-6",
    },
    {
        title: "FEiT Mobile App Redesign",
        description: "This was a really fun project I got to work on! My task was to improve the navigation and aesthetics of the FEiT Electric mobile app. I was given a lot of creative freedom, which made it even more enjoyable. Plus, it helped me sharpen my Figma skills.",
        image: ["./images/Screenshot 2025-05-03 000845.png"],
        link: "https://www.figma.com/design/fpY1YLpUwJrBxuFWkvmjgf/Untitled?node-id=0-1&p=f&t=Irz0Rk2MJNFx0gmL-0",
    },
    {
        title: "EDAS website redesign",
        description: "I created this redesign of the EDAS website, developing sketches, wireframes, and surface comps for small, medium, and large screens. My main goals were to: 1) make it easier for users to find what they need across all devices, 2) improve universal usability, and 3) give the design a more fun, visually appealing look.",
        image: ["./images/image 7.png", "./images/Home.png", "./images/Log In.png"],
        link: "https://www.figma.com/design/OSVlS3jBZGssN7M8cAnLSz/EDAS-surface-comps-draft?m=auto&t=SPMCtORB7seXGsEI-6",
    },
    {
        title: "Wildlife Fund Redesign",
        description: "This is my redesign of the World Wildlife Fund website. I wanted to create an updated version of a charity site, and I chose this one for my project. For this redesign, I developed small, medium, and large screen versions, along with sketches, wireframes, surface comps, and a working prototype. My main focus was improving wayfinding and visual hierarchy to help users find information more easily and get what they needed faster.",
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

