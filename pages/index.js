import Carousel from "../components/Carousel.js";

// Benefits
function addBenefits() {
  const benefitsContainer = document.querySelector(".benefits__container");
  const benefitsElementTemplate = document.querySelector("#benefits-template")
    .content;
  data.benefits.map((item) => {
    const benefitsItem = benefitsElementTemplate.cloneNode(true);
    benefitsItem.querySelector(
      ".benefits__image-container"
    ).style.background = `url(${item.image}) center no-repeat`;
    benefitsItem.querySelector(".item-title").textContent = item.title;
    benefitsItem.querySelector(".item-description").textContent =
      item.description;
    benefitsContainer.append(benefitsItem);
  });
}

// Customers
function addCustomers() {
  const customersContainer = document.querySelector(".customers__container");
  const customersElementTemplate = document.querySelector("#customers-template")
    .content;
  data.customers.map((item) => {
    const customersItem = customersElementTemplate.cloneNode(true);
    const img = customersItem.querySelector(".customers__image");
    img.src = item.image;
    img.alt = item.title;
    customersItem.querySelector(".item-title").textContent = item.title;
    customersItem.querySelector(".item-description").textContent =
      item.description;
    customersContainer.append(customersItem);
  });
}

// Team
function addTeam() {
  const teamContainer = document.querySelector(".team__container");
  const teamElementTemplate = document.querySelector("#team-template").content;
  data.team.map((item) => {
    const teamItem = teamElementTemplate.cloneNode(true);
    const img = teamItem.querySelector(".team__image");
    img.src = item.image;
    img.alt = item.name;
    teamItem.querySelector(".item-title").textContent = item.name;
    teamItem.querySelector(".team__position").textContent = item.position;
    teamItem.querySelector(".item-description").textContent = item.description;
    teamContainer.append(teamItem);
  });
}

// Gallery item
function populateGalleryItem(item) {
  document.querySelector(
    ".gallery__image-container"
  ).style.background = `url(${item.image}) center/cover no-repeat`;
  document.querySelector(".gallery__slide-description").textContent =
    item.description;
}

// Products Item
function populateProductsItem(item) {
  document.querySelector(
    ".products__image-container"
  ).style.background = `url(${item.image}) center/cover no-repeat`;
  document.querySelector(".products").querySelector(".item-title").textContent =
    item.name;
  document.querySelector(
    "#max-payload"
  ).textContent = `Max payload: ${item.features.max_payload}`;
  document.querySelector("#size").textContent = `Size: ${item.features.size}`;
  document.querySelector(
    "#max-speed"
  ).textContent = `Max speed: ${item.features.max_speed}`;
  document.querySelector(
    "#running-time"
  ).textContent = `Running time: ${item.features.running_time}`;
  document.querySelector(
    "#charging-time"
  ).textContent = `Charging time: ${item.features.charging_time}`;
}

// Gallery Carousel
const galleryCarousel = new Carousel({
  data: data.gallery,
  btnBackClass: "gallery__button-back",
  btnForwardClass: "gallery__button-forward",
  populateItem: populateGalleryItem,
});

// Products Carousel
const productsCarousel = new Carousel({
  data: data.products,
  btnBackClass: "products__button-back",
  btnForwardClass: "products__button-forward",
  populateItem: populateProductsItem,
});

galleryCarousel.generateCarousel();
productsCarousel.generateCarousel();
addBenefits();
addTeam();
addCustomers();
