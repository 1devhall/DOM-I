
const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

// img 

let navImg = document.getElementById("logo-img")
navImg.setAttribute("src", siteContent["nav"]["img-src"])
let ctaImg = document.getElementById("cta-img")
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);
let midImg = document.getElementById("middle-img")
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// nav

let ancor = document.querySelectorAll("header nav a")

ancor.forEach(function (item, index, array){
  item.textContent = siteContent["nav"][`nav-item-${index += 1}`]
})

for (let i = 0; i < ancor.length; i++){
  ancor[i].style.color = "green";
}

//added items to nav

const newItem = document.createElement("a");
newItem.textContent = "Sign In";
newItem.style.color = "green";
const navAdd = document.querySelector('nav');
navAdd.append(newItem);

const newItem2 = document.createElement("a");
newItem2.textContent = "Home";
newItem2.style.color = "green";
const navAdd2 = document.querySelector('nav');
navAdd2.prepend(newItem2);


//header

let ctaText = document.querySelector(".cta-text h1")
ctaText.textContent = (siteContent["cta"]["h1"])
let ctaButton = document.querySelector(".cta-text button")
ctaButton.textContent = (siteContent["cta"]["button"])

//Main content 

let mainText = document.querySelectorAll('.main-content .top-content .text-content h4')[0];
mainText.textContent = (siteContent["main-content"]["features-h4"]);
let mainP = document.querySelectorAll('.main-content .top-content .text-content p')[0];
mainP.textContent = (siteContent["main-content"]["features-content"]);
let mainText2 = document.querySelectorAll('.main-content .top-content .text-content h4')[1];
mainText2.textContent = (siteContent["main-content"]["about-h4"]);
let mainP2 = document.querySelectorAll('.main-content .top-content .text-content p')[1];
mainP2.textContent = (siteContent["main-content"]["about-content"]);


//bottom content

let bottomText = document.querySelectorAll(".bottom-content .text-content h4")[0]
bottomText.textContent = (siteContent["main-content"]["services-h4"]);
let bottomText2 = document.querySelectorAll(".bottom-content .text-content h4")[1]
bottomText2.textContent = (siteContent["main-content"]["product-h4"]);
let bottomText3 = document.querySelectorAll(".bottom-content .text-content h4")[2]
bottomText3.textContent = (siteContent["main-content"]["vision-h4"]);

let bottomP = document.querySelectorAll(".bottom-content .text-content p")[0]
bottomP.textContent = (siteContent["main-content"]["services-content"])
let bottomP2 = document.querySelectorAll(".bottom-content .text-content p")[1]
bottomP2.textContent = (siteContent["main-content"]["product-content"]);
let bottomP3 = document.querySelectorAll(".bottom-content .text-content p")[2]
bottomP3.textContent = (siteContent["main-content"]["vision-content"]);

//contact

let chead = document.querySelector(".contact h4");
chead.textContent = (siteContent["contact"]["contact-h4"]);
let cP1 = document.querySelectorAll(".contact p")[0]
cP1.textContent = (siteContent["contact"]["address"]);
let cP2 = document.querySelectorAll(".contact p")[1]
cP2.textContent = (siteContent["contact"]["phone"]);
let cP3 = document.querySelectorAll(".contact p")[2]
cP3.textContent = (siteContent["contact"]["email"]);

//footer

let foot = document.querySelector("footer p")
foot.textContent = (siteContent["footer"]["copyright"])






