document.addEventListener("DOMContentLoaded", start);

function start() {

    //hentData();
    loadFooter();
    document.querySelector(".hoejskole").addEventListener("click", visHoejskoleDropdown);
}

function visHoejskoleDropdown() {

    document.querySelector(".hoejskole_dropdown").classList.toggle("hide_hoejskole_dropdown");
}

function myFunction(x) {
    x.classList.toggle("change");
    document.querySelector("nav").classList.toggle("hidden_menu");
} //burgerm menu toggle

//async function hentData() {
    //let url = "http://signemariemathiasen.dk/kea/2_sem/09.05.01_ihs/wordpress/wp-json/wp/v2/etFag?per_page=100";

   // let jsonData = await fetch(url);
    //etFag = await jsonData.json();
    //console.log("hentData(json)");
    //loadGlobalContent();
    //vis(etFag);
//}
async function loadFooter() {
    let url = "http://signemariemathiasen.dk/kea/2_sem/09.05.01_ihs/wordpress/wp-json/wp/v2/pages/455";
    let jsonData = await fetch(url);
    footer = await jsonData.json();
    console.log("LOADING DONE");

    document.querySelector(".footer_tekst").innerHTML = footer.content.rendered;
}

function vis(data) {
    console.log(data);
}

function loadGlobalContent() {
    loadHeaderContent();
    loadFooterContent();
    console.log("loadGlobalContent");
}


function loadHeaderContent() {
    // console.log("loadHeader");
    //if (id == 264) {
    //  document.querySelector("#logo img").src = etFag.media.guid;
    //  }
}

function loadFooterContent() {
    console.log("loadFooter");
    //document.querySelector()
}

function loadFrontContent() {
    console.log("loadForside");
}

function loadFagContent() {
    console.log("loadFag");
}

function loadPratiskContent() {
    console.log("loadPratisk");
}

function loadTilmeldingContent() {
    console.log("loadTilmeling");
}
