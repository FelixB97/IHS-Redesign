document.addEventListener("DOMContentLoaded", start);

function start() {

    //hentData();
    loadFooter();
    document.querySelector(".hoejskole").addEventListener("click", visHoejskoleDropdown);
    document.querySelector(".andre_tilbud").addEventListener("click", visAndreTilbudDropdown);
    document.querySelector("a.hoejskole").addEventListener("click", toggleHoejskoleMenu);
    document.querySelector("a.andre_tilbud").addEventListener("click", toggleAndreTilbudMenu);
}

function visHoejskoleDropdown() {

    document.querySelector(".hoejskole_dropdown").classList.toggle("hide_hoejskole_dropdown");
}

function visAndreTilbudDropdown() {

    document.querySelector(".andre_tilbud_dropdown").classList.toggle("hide_hoejskole_dropdown");
}


function myFunction(x) {
    x.classList.toggle("change");
    document.querySelector("nav").classList.toggle("hidden_menu");
}

function toggleHoejskoleMenu() {
    let erSkjult = document.querySelector(".hoejskole_dropdown").classList.contains("hide_hoejskole_dropdown");

    if (erSkjult == true) {
        document.querySelector(".hoejskole img").src = "arrow_down_orange.svg";

    } else {
        document.querySelector(".hoejskole img").src = "arrow_up_orange.svg";
    }

}

function toggleAndreTilbudMenu() {
    let erSkjult = document.querySelector(".andre_tilbud_dropdown").classList.contains("hide_hoejskole_dropdown");

    if (erSkjult == true) {
        document.querySelector(".andre_tilbud img").src = "arrow_down_orange.svg";

    } else {
        document.querySelector(".andre_tilbud img").src = "arrow_up_orange.svg";
    }

}

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
