const API_LOGIN_URL= "https://codeqr-generate.herokuapp.com/api"
const btnCerrarSesion = document.getElementById('btnCerrarSesion')

const inputURL = document.getElementById('inputUrl')
const btnGeneraQR = document.getElementById('btnGeneraQR')
const imgQR = document.getElementById('imgQR')
const btnExportarQR = document.getElementById('btnExportarQR')


let qrGenerado = ''

btnCerrarSesion.addEventListener('click', (e)=> {
  e.preventDefault()
  localStorage.removeItem('usuario')
  window.location.href = 'index.html'
})

btnGeneraQR.addEventListener('click', (e)=> {
  e.preventDefault()
  crearQR()
})

btnExportarQR.addEventListener('click', (e)=> {
  e.preventDefault()
  descargarQR()
})

async function crearQR() {
  try {
    let idUsuario = ''
    const usuarioLocalStorage = localStorage.getItem('usuario')
    if (usuarioLocalStorage !== null) {
      const usuario = JSON.parse(usuarioLocalStorage)
      idUsuario = usuario.id_usuario
    }

    let data = {
      url: inputURL.value,
      user: idUsuario
    }
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
    const response = await fetch(`${API_LOGIN_URL}/code/`, options)
    const dataResponse = await response.json()
    console.log(dataResponse)
    if (response && response.status == 200) {
      qrGenerado = dataResponse.qr_code.url_code
      verQR()
    } else {
      alert(dataResponse.msg)
    }
  } catch (error) {
    console.log(error)
  }
}

function verQR() {
  console.log(qrGenerado, 'base64')
  imgQR.src = qrGenerado
}

function descargarQR() {
  var a = document.createElement("a"); //Create <a>
  a.href = qrGenerado //Image Base64 Goes here
  a.download = "qr.png"; //File name Here
  a.click(); //Downloaded file
}