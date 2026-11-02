// Funções Utilitárias
export const obterelemento = (id) => document.getElementById(id);
export const valorNegativo = (valor) => valor < 0;
export const somaValor = (total, valor) => total + valor;


// Atualiza a interface
export const atualizarInterface = (gastosPorCategoria) => {
    const categorias = gastosPorCategoria.categorias;
    categorias.forEach(({nome, valor}) => {
        const elemento = obterelemento(nome);
        elemento.textContent = `${nome}: R$ ${valor}`;
})
    const elementoTotal = obterElemento("Total");
    elementoTotal.textContent = `Total: R$ ${gastosPorCategoria.obterTotal()}`
};