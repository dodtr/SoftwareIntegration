const item = sessionStorage.getItem("itemDetail");
const itemPicture = document.getElementById("product");
const itemName = document.getElementById("itemName");
const itemPrice = document.getElementById("itemPrice");
console.log(item);

if(item === "item_00") {
    render("../picture/asusAMD.jfif", "ASUS 500", 500)
}else if(item === "item_01") {
    render("../picture/asusD509.jfif", "ASUS D509", 600);
}else if(item === "item_02") {
    render("../picture/dell3505.jfif", "DELL 3505", 550);
}else if(item === "item_03") {
    render("../picture/lenovo.jfif", "LENOVO 35XX", 700);
}else if(item === "item_04") {
    render("../picture/MSImodern.jfif", "MSI MODERN", 450);
}else if(item === "item_05") {
    render("../picture/ryzen5.jfif", "RYZEN 5", 400);
}

function render(src, name, price) {
    itemPicture.src = src;
    itemName.innerText = name;
    priceText = "$" + price;
    itemPrice.innerText = priceText;
}


// HANDLE MODAL
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}