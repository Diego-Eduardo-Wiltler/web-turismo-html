function toggleDescription(button) {
    var description = button.previousElementSibling; // Seleciona o elemento de descrição
    if (description.classList.contains('expanded')) {
        description.classList.remove('expanded');
        button.textContent = 'Ler mais';
    } else {
        description.classList.add('expanded');
        button.textContent = 'Ler menos';
    }
}
