/*Sleep*/
export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Sair da conta
export function SairDaConta(Navegacao){

     //Deleto o token do LocalStorage
    localStorage.removeItem("token");

    //Deleto o ID do LocalStorage
    localStorage.removeItem("id");

    //Levo para a tela inicial
    Navegacao("/")

}
       
