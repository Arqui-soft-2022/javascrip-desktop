const btnCerrarSesion = document.getElementById('btnCerrarSesion')

btnCerrarSesion.addEventListener('click', (e)=> {
  e.preventDefault()
  localStorage.removeItem('usuario')
  window.location.href = 'index.html'
})