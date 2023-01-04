const keys = [...document.querySelectorAll('.btn_calculator')];
const listKeyCode = keys.map(key => key.dataset.keycode);
const screen = document.querySelector('.screen');

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.keycode;
    calculation(valeur)

})

const calculation = (valeur) => {
    if (listKeyCode.includes(valeur)) {
        switch (valeur) {
            case '8':
                screen.innerHTML = "";
                break;
            case '13':
                const calcul = eval(screen.textContent)
                screen.textContent = calcul;
                break;
            default:
                const indexKeycode = listKeyCode.indexOf(valeur);
                const key = keys[indexKeycode];
                screen.innerHTML += key.innerHTML;

        }
    }
}
