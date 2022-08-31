const app = new Vue({
  el: '#app',

  created() {
    this.consutarHistorial();
  },
  data: {
    urlAPI: "https://codeqr-generate.herokuapp.com/api",
    listaQR: []
  },
  methods: {

    async consutarHistorial() {
      try {
        let idUsuario = ''
        const usuarioLocalStorage = localStorage.getItem('usuario')
        if (usuarioLocalStorage !== null) {
          const usuario = JSON.parse(usuarioLocalStorage)
          idUsuario = usuario.id_usuario
        }
        let data = {
          user: idUsuario
        }
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }
        const response = await fetch(`${this.urlAPI}/code/historial/`, options)
        const dataResponse = await response.json()
        if (response && response.status == 200) {
          this.listaQR = dataResponse.codes
        } else {
          if (dataResponse.errors && dataResponse.errors.length > 0) {
            alert(dataResponse.errors[0].msg)
          }
        }
      } catch (error) {
        console.log(error)
      }
    },
    exportarQR(data) {
      console.warn(data, 'data click')
      var a = document.createElement("a") //Create <a>
      a.href = data //Image Base64 Goes here
      a.download = "qr.png"; //File name Here
      a.click(); //Downloaded file
    }
  },
})