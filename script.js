var text = ["Développeur"];
text = text.map(i => i += '     ');
let count = 0,
    index = 0;
let letter = '',
    currentText = '';
(function Typewriter() {
    if (count === text.length) {
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);
    document.getElementById('developpeur').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(Typewriter, 200);
}());