import { categoria, ListaGastosPorCategoria } from "./classes.js";
import { valorNegativo, atualizarInterface } from "./utils.js";

//Continuei com a matriz das categorias, só que em uma única linha de código, aproveitando e utilizando a função map() para instanciar cada elemento da matriz na classe categoria.
//Mas somente o primeiro valor da sublista contida na matriz, ou seja, o nome das categorias.
const nomedascategorias = [["Alimentação", 0], ["Transporte", 0], ["Lazer", 0], ["Outros", 0]].map(n => new categoria(n[0]));;
//Depois utilizei o spread operator para colocar a sublista em argumentos soltos, porque o map() modificou o estado da classe para uma array.
const gastosPorCategoria = new ListaGastosPorCategoria(...nomedascategorias)
    /*new categoria("Alimentação"),
    new categoria("Transporte"),
    new categoria("Lazer"),
    new categoria("Outros")*/
    // -> Substituídos pela função map() e uso do spread operator
    


// Manipulação do DOM
const formulario = document.querySelector("form");

formulario.addEventListener("submit", (evento) => {
    //Prevenção do comportamento padrão
    evento.preventDefault();
    
    const valorInformado = formulario.elements.valor.value;
    const categoriaInformada = formulario.elements.categoria.value;

    // Impedir números negativos
    if(valorNegativo(valorInformado)){
        alert("Valor inválido. O valor não pode ser negativo.");
        return;
    }
    // Variável que pega a variável que contém as categorias e aciona o método obterCategoriaPorNome importado de classes
    const categoria = gastosPorCategoria.obterCategoriaPorNome(categoriaInformada);
    categoria.adicionarValor(valorInformado);
    
    
    //5. Atualizar interface
    atualizarInterface(gastosPorCategoria);
    //6. Limpar campos
    formulario.reset();
})

/*Código antigo
// Obter Valores do formulário
const obterValorInformado = () => parseFloat(obterelemento("valor").value);
const obterCategoriaInformada = () => obterelemento("categoria").value;

//. Obter categoria da matriz
const obterCategoria = (matriz, nomeCategoria) => matriz.find((item) => item[0] == nomeCategoria);

//. Atualizar valores da matriz
const atualizaValorCategoria = (categoria, valor) => categoria[1] = somaValor(categoria[1], valor);


function adicionarGasto() {
    //1. Pegar o valor informado
    const valorInformado = obterValorInformado();
    
    //2. Pegar categoria informada
    const categoriaInformada = obterCategoriaInformada();

    //3. Impedir números negativos
    if(valorNegativo(valorInformado)){
        alert("Valor inválido. O valor não pode ser negativo.");
        return;
    }
    //4. De acordo com a categoria, atualiza o valor
    //4.1 Criar variáveis para controlar ou armazenar os valores de cada uma das categorias
    const categoria = obterCategoria(matrizGastos, categoriaInformada);
    const total = obterCategoria(matrizGastos, "Total");
    
    atualizaValorCategoria(categoria, valorInformado);
    atualizaValorCategoria(total, valorInformado);
    
    
    //5. Atualizar interface
    atualizarInterface();
    //6. Limpar campos
    limparCampos();



}
*/
