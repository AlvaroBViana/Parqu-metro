// Funções Utilitárias (restou somente essas duas)
export const obterelemento = (id) => document.getElementById(id);
export const valorNegativo = (valor) => valor < 0;


// Atualiza a interface
export const atualizarInterface = (gastosPorCategoria) => {
    const categorias = gastosPorCategoria.categorias;
    categorias.forEach(({nome, valor}) => {
        const elemento = obterelemento(nome);
        elemento.textContent = `${nome}: R$ ${valor}`;
})
    // Acessa a ID "total" do HTML pela função
    const elementoTotal = obterelemento("Total");
    // Imprime no valor do total, acessando a variável e obtendo o método obterTotal() de classes.js
    elementoTotal.textContent = `Total: R$ ${gastosPorCategoria.obterTotal()}`
};