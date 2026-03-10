/* 1. Definir o que possui um parquímetro (X)
   2. Definição da opção e pegar o valor digitado (X)
   3. Relacionar a opção digitada com o tempo e o valor (X)
   4. Invalidar se a opção for diferente do 1, 2 ou 3 (X)
   */



    
class Parquimetro {
    
    constructor (tempo, valor, opcao) {
        this.tempo = tempo;
        this.valor = valor;
        this.opcao = opcao
        
    }

    // Métodos
    option () {
        // Pegar a opção digitada e atribuí-la à propriedade
        const x = parseFloat(document.getElementById("opcao").value)
        this.opcao = x
        // Opções
        if (this.opcao == 1) {
            document.getElementById("resultado").textContent = `A opção escolha foi ${this.opcao}. E o parquímetro será no valor de: R$1,00. ` 
        }
        else if (this.opcao == 2) {
            document.getElementById("resultado").textContent = `A opção escolha foi ${this.opcao}. E o parquímetro será no valor de: R$1,75.` 
        }
        else if (this.opcao == 3){
            document.getElementById("resultado").textContent = `A opção escolha foi ${this.opcao}. E o parquímetro será no valor de: R$3,00.` 
        }
        else {document.getElementById("resultado").textContent = 'Opção inválida! Tente novamente.'}
    }

    valorPago () {
        // Pegar valor
        const pagamento = parseFloat(document.getElementById("valor").value)
        this.valor = pagamento
        
        // Definir se há troco
        const opcao1 = 1.00
        const opcao2 = 1.75
        const opcao3 = 3.00
        if (this.valor > opcao1){
            this.valor -= opcao1;
            document.getElementById("resultado2").textContent = `Você pagou: R$${pagamento}`;
            document.getElementById("troco").textContent = `Seu troco é de R$${this.valor}`;
        }
        else if (this.valor >= opcao2){
            this.valor -= opcao2;
            document.getElementById("resultado2").textContent = `Você pagou: R$${pagamento}`;
            document.getElementById("troco").textContent = `Seu troco é de R$${this.valor}`;
        }
        else if (this.valor >= opcao3){
            this.valor -= opcao3;
            document.getElementById("resultado2").textContent = `Você pagou: R$${pagamento}`;
            document.getElementById("troco").textContent = `Seu troco é de R$${this.valor}`;
        }
        else {document.getElementById("resultado2").textContent = `Você pagou: R$${pagamento}. Este valor é insuficiente!`};
    }   
}

const parquimetro = new Parquimetro ()

    








    
















