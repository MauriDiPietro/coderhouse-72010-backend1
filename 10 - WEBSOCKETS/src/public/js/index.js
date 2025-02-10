const socket = io();

socket.on("saludoDesdeBack", (message) => {
  console.log(message);
  socket.emit("respuestaDesdeFront", "Muchas gracias");
});

const form = document.getElementById("form");
const inputName = document.getElementById("name");
const inputPrice = document.getElementById("price");
const productsList = document.getElementById("products");
const messages = document.getElementById("messages");

form.onsubmit = (e) => {
  e.preventDefault();
  const name = inputName.value;
  const price = inputPrice.value;
  const product = {
    name,
    price,
  };
  socket.emit("newProduct", product);
};

socket.on("arrayProducts", (array) => {
  let infoProducts = "";
  array.forEach((p) => {
    infoProducts += `${p.name} - $${p.price} <br>`;
  });
  productsList.innerHTML = infoProducts;
});

socket.on('message', (message)=>{
    messages.innerHTML = message
})
