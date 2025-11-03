document.addEventListener('DOMContentLoaded', () => {
  const reserveBtn = document.getElementById('reserveBtn')
  const loginBtn = document.getElementById('loginBtn')
  const modalReserve = document.getElementById('modalReserve')
  const modalLogin = document.getElementById('modalLogin')

  function openModal(modal){
    modal.setAttribute('aria-hidden', 'false')
  }
  function closeModal(modal){
    modal.setAttribute('aria-hidden', 'true')
  }

  document.querySelectorAll('[data-close]').forEach(btn=>btn.addEventListener('click', e=>{
    const modal = e.target.closest('.modal')
    if(modal) closeModal(modal)
  }))

  reserveBtn.addEventListener('click', ()=> openModal(modalReserve))
  // Navigate to login page instead of opening modal
  loginBtn.addEventListener('click', ()=> { window.location.href = 'login.html' })

  // fetch canchas and populate select (placeholder)
  const selectCancha = document.getElementById('selectCancha')
  fetch('/api/canchas')
    .then(r => r.json())
    .then(data => {
      selectCancha.innerHTML = ''
      data.forEach(c => {
        const opt = document.createElement('option')
        opt.value = c.idCancha || c.id
        opt.textContent = c.nombre || `Cancha ${c.idCancha || c.id}`
        selectCancha.appendChild(opt)
      })
    }).catch(()=>{
      selectCancha.innerHTML = '<option value="">No se pudieron cargar canchas</option>'
    })

  // handle form submit placeholders
  document.getElementById('reserveForm').addEventListener('submit', e=>{
    e.preventDefault()
    const form = new FormData(e.target)
    const payload = {
      fecha: form.get('fecha'),
      idCancha: form.get('cancha')
    }
    // placeholder: show alert and close modal
    alert('Reserva enviada (placeholder): ' + JSON.stringify(payload))
    closeModal(modalReserve)
  })

  document.getElementById('loginForm').addEventListener('submit', e=>{
    e.preventDefault()
    const form = new FormData(e.target)
    alert('Login (placeholder): ' + form.get('usuario'))
    closeModal(modalLogin)
  })
})
