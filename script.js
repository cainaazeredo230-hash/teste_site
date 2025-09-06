const botao = document.getElementById('botaoConfirme');
const nomeInput = document.getElementById('nomeInput');
const arquivoHtml = File.ReadAllText('login');

botao.addEventListener('mouseover', () => {
    botao.style.backgroundColor = 'rgb(241, 169, 169)'
});
botao.addEventListener('mouseout', () => {
    botao.style.backgroundColor = 'rgb(165, 42, 42)'
});