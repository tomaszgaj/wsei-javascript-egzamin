document.addEventListener("DOMContentLoaded", () => {
    var shoplist = document.getElementById("shopping-list");

    document.getElementById("button-1").addEventListener("click", function() {
        var newElement = document.createElement("LI");

        shoplist.appendChild(newElement).innerHTML = "Chleb";

    });

    document.getElementById("button-2").addEventListener("click", function() {
        shoplist.removeChild(shoplist.lastElementChild);
    });

    document.getElementById("button-3").addEventListener("click", function() {
        var clone = shoplist.children[1].cloneNode(true);

        shoplist.appendChild(clone);

    });
});
