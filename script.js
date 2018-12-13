/*NAVIGATION*/

function openNav() {
    document.getElementById("myNav").style.width = "70%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


function showHome() {
    console.log("showHome");


    document.querySelector(".lektie").classList.add("hide");
    document.querySelector(".ugeplan").classList.remove("blur");
    document.querySelector(".dagens_skema").classList.remove("blur");
    document.querySelector(".besked").addEventListener("mousedown", showBesked);
}

function showBesked() {
    console.log("showBesked");

    document.querySelector(".lektie").classList.remove("hide");
    document.querySelector(".ugeplan").classList.add("blur");
    document.querySelector(".dagens_skema").classList.add("blur");
    document.querySelector(".lektie").addEventListener("mousedown", closeBesked);

}

function closeBesked() {
    console.log("closeBesked");

    //    document.querySelector("#homecontainer").classList.remove("blur");
    document.querySelector(".lektie").addEventListener("mousedown", showHome);

}
