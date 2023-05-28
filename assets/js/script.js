function randHex() {
    return (Math.floor(Math.random() * 56) + 200).toString(16);
}

function randColor() {
    return randHex() + "" + randHex() + "" + randHex();
}

const jobsContentHtml = (job, id) => {
    let tags = '';

    job.tags.forEach(tag => {
        let tagBtn = `<button
        class="bg-transparent mb-2 mr-1 hover:bg-black text-xs text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded-full">
        ${tag}
        </button>`;

        tags += tagBtn;
    })

    let content = `<div class="card shadow py-5 bg-yellow-300 rounded-xl my-5" style='background:#${randColor()}' id=${id}>
    <div class="row">
        <div class="column pl-9">
            <h2 class="text-xl font-semibold">${job.role}</h2>
            <p class="text-lg">${job.company}</p>
        </div>
        <div class="column pl-9 lg:pl-0">
            ${tags}
        </div>
        <div class="column column-first flex flex-col items-center justify-center">
            <a href=${job.apply_link}
                target="_blank"
                class="bg-red-400 hover:bg-red-500 shadow text-white font-bold py-2 px-8 rounded cursor-pointer">
                Apply
            </a>
            <p class="text-base mt-2">${job.posted_date}</p>
        </div>
    </div>
    </div>`;

    return content;
} 

let cookieModal = document.getElementById('cookie-modal');
let cookieBtn = document.getElementById('cookie-accept');


window.onload = () => {
    let contentType = localStorage.getItem('content');
    changeContent(contentType);

    let cookieConsent = localStorage.getItem('cookie-accept');
    if(JSON.parse(cookieConsent)) {
        console.log("first")
        cookieModal.classList.add('hidden');
    }
}

const changeContent = (type = 'jobs') => {
    localStorage.setItem('content', type);
    let listings = document.getElementById("listings");
    let listingHeading = document.getElementById("listing-heading");

    let loader = document.getElementById("loader");

    loader.classList.toggle('hidden'); // loading starts

    // Remove all other listings before changing content 
    let cards = document.querySelectorAll(".card"); // existing cards
    for (let i = 0; i < cards.length; i++) {
        cards[i].remove();
    }

    if(type === 'internships') {
        console.log(type)
        let str = '';
        let id = internshipsData.length;

        internshipsData.forEach((job) => {
            str += jobsContentHtml(job, id--);
        })
    
        listings.insertAdjacentHTML( 'beforeend', str );
        listingHeading.innerText = 'Latest Internships';
    } else {
        console.log(type)
        let str = '';
        let id = jobsData.length;
    
        jobsData.forEach((job) => {
            str += jobsContentHtml(job, id--);
        })
    
        listings.insertAdjacentHTML( 'beforeend', str );
        listingHeading.innerText = 'Latest Jobs';
    }

    loader.classList.toggle('hidden');
}

cookieBtn.onclick = function() {
    localStorage.setItem('cookie-accept', true);
    cookieModal.classList.add('hidden');
}

let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}