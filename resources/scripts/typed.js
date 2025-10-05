const phrases = ["Software developer", "Frontend developer"];
let index = 0, char = 0, deleting = false;
const el = document.getElementById('typed');

function type() {
    const phrase = phrases[index];
    if (!deleting) {
        el.textContent = phrase.slice(0, ++char);
        if (char === phrase.length) { deleting = true; setTimeout(type, 1000); return; }
    } else {
        el.textContent = phrase.slice(0, --char);
        if (char === 0) { deleting = false; index = (index + 1) % phrases.length; }
    }
    setTimeout(type, deleting ? 50 : 80);
}
type();