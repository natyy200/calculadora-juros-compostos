document.getElementById('calculate').addEventListener('click', () => {
    const value = document.getElementById('value').value;
    const fee = (document.getElementById('fee').value) / 100;
    const time = document.getElementById('time').value;

    const total = value * (1 + fee)**time;

    document.getElementById('total').textContent = ('R$ ' + total.toFixed(2).replace('.', ','));
});