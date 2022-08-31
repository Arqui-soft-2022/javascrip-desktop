const API_LOGIN_URL= "https://codeqr-generate.herokuapp.com/api"

const formulario = document.getElementById('formulario')

const usuario = document.getElementById('usuario')
const password = document.getElementById('password')

formulario.addEventListener('submit', (e) => {
  e.preventDefault()
  iniciarSesion()
})

async function iniciarSesion() {
  try {
    let data = {
      username: usuario.value,
      password: password.value
    }
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
    const response = await fetch(`${API_LOGIN_URL}/auth/login`, options)
    const dataResponse = await response.json()
    if (dataResponse.errors && dataResponse.errors.length > 0) {
      alert(dataResponse.errors[0].msg)
    }
  } catch (error) {
    console.log(error[0])
  }
}