const socket = io();

let username = null;

if (!username) {
  Swal.fire({
    title: "¡Welcome to chat!",
    input: "text",
    text: "Insert your username",
    inputValidator: (value) => {
      if (!value) {
        return "Your username is required";
      }
    },
  }).then((input) => {
    username = input.value;
    socket.emit("newUser", username);
  });
}

const inputMessage = document.getElementById("message");
const btn = document.getElementById("send");
const output = document.getElementById("output");
const actions = document.getElementById("actions");

btn.addEventListener('click', () => {
    socket.emit('chat:message', {
        username,
        message: inputMessage.value
    })
    inputMessage.value = ''
});

socket.on('messages', (data)=>{
    actions.innerHTML = '';
    const chatRender = data.map((msg) =>{
        return `<p><strong>${msg.username}</strong>: ${msg.message}</p>`
    }).join(' ')
    output.innerHTML = chatRender
})

socket.on('newUser', (username)=>{
    Toastify({
        text: `${username} is logged in`,
        close: true,
        duration: 3000,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
            borderRadius: "10px",
            boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
        },
        // onClick: ()=>{}
    }).showToast()
})

inputMessage.addEventListener('keypress', ()=>{
    socket.emit('chat:typing', username)
});

socket.on('chat:typing', (username)=>{
    // console.log(username)
    actions.innerHTML = `<p>${username} is writing a message...</p>`
})