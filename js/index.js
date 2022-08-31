const API_LOGIN_URL= "https://codeqr-generate.herokuapp.com/api"

const formulario = document.getElementById('formulario')

const usuario = document.getElementById('usuario')
const password = document.getElementById('password')

function main () {
  const usuarioLocalStorage = localStorage.getItem('usuario')
  if (usuarioLocalStorage !== null) {
    window.location.href="qrgenerate.html"
  }
}

main()

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
    if (response && response.status == 200) {
      window.location.href="qrgenerate.html"
      localStorage.setItem('usuario', JSON.stringify(dataResponse.usuario))
    } else {
      alert(dataResponse.msg)
    }
  } catch (error) {
    console.log(error[0])
  }
}