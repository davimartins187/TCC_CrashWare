export class Adm
{
    constructor(setPopup = null , Navegacao = null)
    {
        this.setPopup = setPopup;
        this.Navegacao = Navegacao;
    }

    async adicionar_conquista(nomeConquista,opcao,descricaoConquista,moedas,xp,condicao)
    {
        try
        {
            const response = await fetch("https://api-crashware.onrender.com/adm/adicionar_conquista",
            {   
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                        nome_conquista: nomeConquista,
                        tipo_conquista: opcao,
                        descricao : descricaoConquista,
                        moeda: moedas,
                        xp: xp,
                        condicao_conquista: condicao
                    })
            })

            if (response.ok)
            {
                const resposta = await response.json()
                console.log(resposta.mensagem)
            }else
            {
                const erro = await response.json()

                console.log(erro.detail)
            }   
        
        }catch(error) 
        {
            console.log("Erro:", error);
            
            // this.setPopup({
            //     tipo: 'erro',
            //     titulo: 'Sem conexão',
            //     mensagem: 'Não foi possível conectar ao servidor.'
            // });

        }//catch

    }//add_conquista
}//classe