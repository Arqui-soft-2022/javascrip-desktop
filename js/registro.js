const API_LOGIN_URL= "https://codeqr-generate.herokuapp.com/api"

const formulario = document.getElementById('formulario')

const nombre = document.getElementById('nombre')
const usuario = document.getElementById('usuario')
const password = document.getElementById('password')
const email = document.getElementById('email')

formulario.addEventListener('submit', (e) => {
  e.preventDefault()
  registro()
})

async function registro() {
  try {
    let data = {
      name: nombre.value,
      username: usuario.value,
      password: password.value,
      email: email.value
    }
    console.warn(data, 'data enviar')
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
    const response = await fetch(`${API_LOGIN_URL}/auth/register`, options)
    const dataResponse = await response.json()
    if (dataResponse.errors && dataResponse.errors.length > 0) {
      alert(dataResponse.errors[0].msg)
    } else {
      alert(dataResponse.msg)
      window.location.href="index.html"
    }
  } catch (error) {
    console.log(error[0])
  }
}