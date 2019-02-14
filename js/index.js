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


//NAV

let nav1 = document.getElementsByTagName('a')[0];
nav1.textContent = 'Services';

let nav2 = document.getElementsByTagName('a')[1];
nav2.innerHTML = 'Product';

let nav3 = document.getElementsByTagName('a')[2];
nav3.innerHTML = 'Vision';

let nav4 = document.getElementsByTagName('a')[3];
nav4.innerHTML = 'Features';

let nav5 = document.getElementsByTagName('a')[4];
nav5.innerHTML = 'Contact';

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// CTA

let cta = document.getElementsByTagName('h1')[0];
cta.innerHTML = 'DOM is Awesome';

let button = document.getElementsByTagName('button')[0];
button.innerHTML = 'Get Started';

// Main Content

let featuresHeader = document.getElementsByTagName('h4')[0];
featuresHeader.innerHTML = 'Features';

let featuresContent = document.getElementsByTagName('p')[0];
featuresContent.innerHTML = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

let aboutHeader = document.getElementsByTagName('h4')[1];
aboutHeader.innerHTML = "About";

let aboutContent= document.getElementsByTagName('p')[1];
aboutContent.innerHTML = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

// Img

let circle = document.getElementById("cta-img");
circle.setAttribute('src', siteContent['cta']['img-src'])

let middle = document.getElementById("middle-img");
middle.setAttribute('src', siteContent['main-content']['middle-img-src'])





//Footer
let footer = document.querySelector(['footer']);
footer.textContent = "Copyright Great Idea! 2018";



