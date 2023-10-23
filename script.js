document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var pontuacao = 0;

    var respostas = this.elements;
    for (var i = 0; i < respostas.length; i++) {
        if (respostas[i].type == 'radio' && respostas[i].checked) {
            if (respostas[i].value == 'correta') {
                pontuacao++;
            }
        }
    }

    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '<h2>Sua pontuação é: ' + pontuacao + ' de 3</h2>';
});
