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
