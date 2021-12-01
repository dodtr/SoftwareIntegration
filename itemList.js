const array = JSON.parse(sessionStorage.getItem("orderList"));
const itemList = document.getElementById("itemList");
const totalCostText = document.getElementById("totalCost");
const checkoutButton = document.getElementById("checkoutButton");

for(var i = 0; i < array.length; i++) {
    render(array[i].src, array[i].name, array[i]. price)
}

console.log(array);
var sum = calcTotalCost();
console.log(sum);

checkoutButton.addEventListener("click", () => {
    sessionStorage.clear();
})

function render(src, name, price) {
    const itemContainer = document.createElement("div");
    itemContainer.className = "cartItem";
    const image = document.createElement("img");
    image.src = src;
    image.className = "cartImage";
    const innerDiv1 = document.createElement("div");
    const innerDiv2 = document.createElement("div");
    const itemName = document.createElement("h3");
    itemName.innerText = name;
    itemName.className = "cartHeader"
    innerDiv1.appendChild(itemName);
    const cartInnerDiv = document.createElement("div");
    cartInnerDiv.className = "cartInnerDiv";
    const itemPrice = document.createElement("h2");
    itemPrice.innerText = "$" + price;
    const removeButton = document.createElement("button");
    removeButton.className = "cartRemoveButton";
    removeButton.innerText = "REMOVE";
    cartInnerDiv.appendChild(itemPrice);
    innerDiv2.appendChild(cartInnerDiv);
    innerDiv2.appendChild(removeButton);
    innerDiv1.appendChild(innerDiv2);
    itemContainer.appendChild(image);
    itemContainer.appendChild(innerDiv1);
    itemList.appendChild(itemContainer);
}

function calcTotalCost() {
    var sum = 0;
    for(var i = 0; i < array.length; i++) {
        sum += array[i].price;
    }
    totalCostText.innerText = "$" + sum;
    return sum;
}