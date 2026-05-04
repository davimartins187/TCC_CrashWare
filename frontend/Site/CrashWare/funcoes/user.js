export class Usuario
{

    //Parâmetros do método construtor
     constructor(setPopup = null, Navegacao = null)
    {
        this.setPopup = setPopup;
        this.Navegacao = Navegacao;
    }

    async perfil()
    {
        //Pego o token
        const token = localStorage.getItem("token")
        try
        {
            const response = await fetch("https://api-crashware.onrender.com/user/",
                {
                    method: "GET",
                    headers:
                    {
                        "Authorization": `Bearer ${token}`
                    }
                })

            if(response.ok)
            {
                //Caso a requisiçaõ deu certo


                //Pego as informaçoes do usuario
                const dados = await response.json();

                //Aviso para o site, que essa requisição não será necessaria fazer mais de uma vez
                localStorage.setItem("info",true);

                //Guardo as informações do usuario no localstorage
                localStorage.setItem("dados", JSON.stringify(dados));
            }
            else
            {
                const erro = await response.json()

                console.log(erro)
            }
            
        }catch (error) 
        {
            console.log("Erro:", error);
            
            setPopup({
                tipo: 'erro',
                titulo: 'Sem conexão',
                mensagem: 'Não foi possível conectar ao servidor.'
            });

        }   
    }//Perfil
}//classe