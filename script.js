// Captura o formulário pelo ID e adiciona um evento de envio
document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    // Previne o envio do formulário antes da validação
    event.preventDefault();

    // Obtém o valor da data de nascimento digitada pelo usuário
    let dataNascimento = document.getElementById("dataNascimento").value;

    // Chama a função para validar a data de nascimento
    if (!validarDataNascimento(dataNascimento)) {
        alert("Data de nascimento inválida! Não pode ser uma data no futuro.");
        return;
    }

    // Se passar pela validação, exibe a mensagem de sucesso
    alert("Cadastro realizado com sucesso!");

    // Limpa os campos do formulário
    document.getElementById("cadastroForm").reset();
});

/**
 * Função para validar a data de nascimento
 * @param {string} data - Data de nascimento fornecida pelo usuário
 * @returns {boolean} - Retorna verdadeiro se a data for válida, falso caso contrário
 */
function validarDataNascimento(data) {
    // Converte a string da data para um objeto Date
    let dataNascimento = new Date(data);

    // Obtém a data atual para comparação
    let dataAtual = new Date();

    // Verifica se a data de nascimento é no futuro
    if (dataNascimento > dataAtual) {
        return false;
    }

    return true;
}

