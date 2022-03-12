// Items shown under the `Projects` block must be displayed from an array of objects in JS (not in HTML). //
let cardWrapper = document.querySelector(".card-wrapper");

let arrOfItems = [
    {
        headline: "Spring Boot",
        description:
            "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.",
        id: 1,
        img: "./img/spring-boot-icon.svg",
    },
    {
        headline: "Spring Framework",
        description:
            "Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.",
        id: 2,
        img: "./img/spring-framework.svg",
    },
    {
        headline: "Spring Data",
        description:
            "Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.",
        id: 3,
        img: "./img/spring-data.svg",
    },
    {
        headline: "Spring Cloud",
        description:
            "Provides a set of tools for common patterns in distributed systems. Useful for building anddeploying microservices.",
        id: 4,
        img: "./img/spring-cloud.svg",
    },
    {
        headline: "Spring Cloud Data Flow",
        description:
            "Provides an orchestration service for composable data microservice applications on modern runtimes.",
        id: 5,
        img: "./img/spring-data-flow.svg",
    },
    {
        headline: "Spring Security",
        description:
            "Protects your application with comprehensive and extensible authentication and authorization support.",
        id: 6,
        img: "./img/spring-security.svg",
    },
    {
        headline: "Spring for GraphQL",
        description:
            "Spring for GraphQL provides support for Spring applications built on GraphQL Java.",
        id: 7,
        img: "./img/spring-graphql.svg",
    },
    {
        headline: "Spring Integration",
        description:
            "Supports the well-known Enterprise Integration Patterns through lightweight messaging and declarative adapters.",
        id: 8,
        img: "./img/spring-integration.svg",
    },
];

function renderCard(arrOfItems) {
    let card = ``;

    for (let i = 0; i < arrOfItems.length; i++) {
        card = `<a class="card-item dp-flex jc-betw" href="#">
                    <img src='${arrOfItems[i].img}' alt="${arrOfItems[i].headline}">
                <div>
                <h3 class="card-title">${arrOfItems[i].headline}</h3>
                    <p class="card-text">
                        ${arrOfItems[i].description}
                    </p>
                </div>
            </a>`;
        cardWrapper.innerHTML += card;
    }

    return cardWrapper;
}

renderCard(arrOfItems);

// Items shown in the header (Why Spring, Learn, etc.) must be displayed from an array of objects in JS (not in HTML) //

let arrOfHeaderItems = [
    {
        title: "Why Spring ",
        options: [
            "Overview",
            "Microservices",
            "Reactive",
            "Event Driven",
            "Cloud",
            "Web Applications",
            "Serverless",
            "Batch",
        ],
        id: 0,
    },
    {
        title: "Learn ",
        options: ["Overview", "Quickstart", "Guides", "Blog"],
        id: 1,
    },
    {
        title: "Projects",
        options: [
            "Overview",
            "Spring Boot",
            "Spring Framework",
            "Spring Cloud",
            "Spring Cloud Data Flow",
            "Spring Data",
            "Spring Integration",
            "Spring Batch",
            "Spring Security",
        ],
        devTools: ["Spring Tools 4", "Spring Initializr"],
        id: 2,
    },
    {
        title: "Training",
        options: [],
        id: 3,
    },
    {
        title: "Support",
        options: [],
        id: 4,
    },
    {
        title: "Community ",
        options: [`Overview`, `Events`, `Team`],
        id: 5,
    },
    
];

let svgOuterLink = 
`<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 226 226" style=" fill:#000000;">
    <g transform="">
        fill="none" fill-rule="nonzero" stroke="none" stroke-width="1"
        stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
        stroke-dasharray="" stroke-dashoffset="0" font-family="none"
        font-weight="none" font-size="none" text-anchor="none"
        style="mix-blend-mode: normal">
            <path d="M0,226v-226h226v226z" fill="#000000"></path>
    <g fill="#ffffff">
        <path
            d="M47.08333,28.25c-10.29301,0 -18.83333,8.54033 -18.83333,18.83333v131.83333c0,10.29301 8.54033,18.83333 18.83333,18.83333h131.83333c10.29301,0 18.83333,-8.54032 18.83333,-18.83333v-65.91667h-18.83333v65.91667h-131.83333v-131.83333h65.91667v-18.83333zM131.83333,28.25v18.83333h33.76758l-87.50879,87.50879l13.31575,13.31575l87.50879,-87.50879v33.76758h18.83333v-65.91667z">
        </path>
    </g>
    path d="" fill="none"></path>
    </g>
    </g>
</svg>`

let dropdown = document.getElementById("dropdown");
let arrOfTitles = arrOfHeaderItems.map((el) => el.title); // массив с названиями
let arrOfOptions = arrOfHeaderItems.map((el) => el.options); // массив опций(селектов)
let arrOfId = arrOfHeaderItems.map((el) => el.id); // массив id
let arrOfDevTools = arrOfHeaderItems.map((el) => el.devTools); // массив с DevTool items
 
arrOfTitles.forEach((el, ind) => {
  const headerContainer = document.createElement("div");
  headerContainer.className = "dropdown";
  const p = document.createElement("p");
  p.className = "drop color-gr";
  p.setAttribute("href", "#");
  p.innerHTML = el;
  const dropCont = document.createElement("div");
  if (el !== "Training" && el !== "Support") {
    p.removeAttribute("href");
    p.className = "drop";
    let i = document.createElement("i");
    i.className = "arrow down";
    p.append(i);
    dropCont.className = "dropdown-content";
    for (let i = 0; i < arrOfHeaderItems.length; i++) {
      if (arrOfId[i] == ind) {
        arrOfOptions[i].forEach((el) => {
          const aLink = document.createElement("a");
          aLink.setAttribute("href", "#");
          aLink.innerHTML = el;
          dropCont.append(aLink);
        });
        if (ind === 2) {
          let divDevTools = document.createElement("div");
          divDevTools.innerHTML = `Development Tools`;
          dropCont.append(divDevTools);
          arrOfDevTools[i].forEach((el) => {
            const devLink = document.createElement("a");
            devLink.setAttribute("href", "#");
            devLink.innerHTML = el;
            dropCont.append(devLink);
          });
          dropCont.lastChild.className = "outer-link";
          dropCont.lastChild.innerHTML += svgOuterLink;
        }
      }
    }
    headerContainer.prepend(dropCont);
  } else {
  }
  headerContainer.prepend(p);
  dropdown.append(headerContainer);
});


// mobile version of header

let mobileNav = document.getElementById('nav-mobile')

function renderAccodrion(arrOfHeaderItems) {
    let headerAccordion = ``;
    for (let i = 0; i < arrOfHeaderItems.length; i++) {
        if (arrOfHeaderItems[i].options.length === 0) {
            headerAccordion = `<button class="accordion-empty"><a href="#">${arrOfHeaderItems[i].title}</a</button>`
        } else if (arrOfHeaderItems[i].title === "Projects") {
            headerAccordion = `<button class="accordion">${arrOfHeaderItems[i].title}</button>
                                <div class="panel">
                                ${arrOfHeaderItems[i].options.map((el) => `<a href="#">${el}</a>`).join("")}
                                    <div>Development Tools</div>
                                    <a href="#">Spring Tools 4</a>
                                    <a href="#">Spring Initializr</a>
                                </div>`;
        } else {
            headerAccordion = `<button class="accordion">${arrOfHeaderItems[i].title}</button>
                                <div class="panel">
                                ${arrOfHeaderItems[i].options.map((el) => `<a href="#">${el}</a>`).join("")}
                                </div>`;
        }
        mobileNav.innerHTML += headerAccordion;
        
    }
    return mobileNav
}

renderAccodrion(arrOfHeaderItems)

// accordion menu
let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


// burger menu

let burgerBtn = document.querySelector('.burger-menu')
let html = document.querySelector('html')
let mobileContainer = document.querySelector('.nav-mobile-container')


let menuOpen = false

burgerBtn.addEventListener('click', () => {
    if (!menuOpen) {
        burgerBtn.classList.add('open')
        html.classList.add('scrollPage')
        mobileContainer.classList.add('menu-active')
        menuOpen = true;
    } else {
        burgerBtn.classList.remove('open')
        html.classList.remove('scrollPage')
        mobileContainer.classList.remove('menu-active')
        menuOpen = false;
    }
})



// search

let searchInput = document.querySelector('#search');

function search(searchInput) {

    let cardHeadline = document.querySelectorAll('.card-item .card-title')
    let notFoundMessage = document.querySelector('.nt-message')
    let val = searchInput.value.toLowerCase().trim();

    let match = false;

    cardHeadline.forEach(item => {
        let text = item.textContent.toLowerCase();
        if (text.includes(val)) {
            match = true;
            item.closest('.card-item').style.display = 'flex';
        } else {
            item.closest('.card-item').style.display = 'none';
        }
    });

    notFoundMessage.style.display = match ? 'none' : 'flex';
}

let timeout = null;
searchInput.addEventListener('input', () => {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
        search(searchInput)
    }, 400)
})





