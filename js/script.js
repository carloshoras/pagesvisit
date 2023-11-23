const contador = document.getElementById('contadorVisitas')
const reset = document.getElementById('btnReestablecer')

function pintaYResetea () {
    contador.innerHTML = localStorage.getItem('contador')
    localStorage.setItem('contador', Number.parseFloat(contador.innerHTML) + 1)
}

if (localStorage.getItem('contador') === null) {
    localStorage.setItem('contador', 0)
}

pintaYResetea()

reset.addEventListener('click', () => {
    localStorage.setItem('contador', 0)
    pintaYResetea()
})

