document.getElementById('convertirBtn').onclick = () => {
    const expresionInput = document.getElementById("expresion").value, textoInput = document.getElementById("texto").value;
    if (!/^[\w\s.*+?^${}()|[\]\\-]+$/.test(expresionInput)) {
        return Swal.fire('Error', 'La expresión regular contiene caracteres no permitidos.', 'error');
    }
    try {
        const matches = textoInput.match(new RegExp(expresionInput, 'g')) || [];
        const title = matches.length 
            ? `${matches.length} coincidencia${matches.length > 1 ? 's' : ''} encontrada${matches.length > 1 ? 's' : ''}` : 'No se encontraron coincidencias. Intenta con otra expresión regular.';
        Swal.fire({
            title,
            html: matches.length ? `<ul>${matches.map(m => `<li>${m}</li>`).join("")}</ul>` : '',
            icon: matches.length ? 'success' : 'info'
        });
    } catch {
        Swal.fire('Error', 'Expresión regular inválida. Por favor, verifica la sintaxis.', 'error');
    }
};