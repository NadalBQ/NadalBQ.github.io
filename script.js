function submitForm() {
    var pais = document.getElementById('pais').value;
    var renta = document.getElementById('renta').value;

    fetch('/process', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ pais: pais, renta: renta })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('resultDiv').innerText = 'Result: ' + data.result;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('resultDiv').innerText = 'An error occurred.';
    });
}
