function showHome() {

    document.querySelector("besked").classList.add("hide");
    document.querySelector("besked").addEventListener("click", clickHome);
}

function clickHome() {


    document.querySelector("homecontainer").classList.add("blur");

    document.querySelector("besked").addEventListener("click", showHome);

}
