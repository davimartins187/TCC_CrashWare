import Style from "./ConteudoTermos.module.css";

const ConteudoTermos = () => {
    return(
        <>
            <div className={Style.bodySubstituto}>

                <h1>Termos de Serviço CrashWare</h1>
                <hr />

                    <div className={Style.textos}>
                        <h2>1. Aceitação dos Termos</h2>
                        <p>Ao criar uma conta e utilizar a plataforma CrashWare, você concorda com todos os termos descritos neste documento. Se não concordar com qualquer parte, recomendamos que não utilize nossos serviços.</p>
    
                        <h2>2. Sobre a Plataforma</h2>
                        <p>A CrashWare é uma plataforma educacional gratuita dedicada ao ensino de hardware e software de forma gamificada e acessível. Nosso objetivo é tornar o aprendizado de tecnologia divertido, progressivo e disponível para todos.</p>
    
                        <h2>3. Cadastro e Conta</h2>
    
                        <p>
                            Você deve ter no mínimo 13 anos para criar uma conta.
                            As informações fornecidas no cadastro devem ser verídicas e atualizadas.
                            Você é responsável pela segurança da sua senha e por todas as atividades realizadas na sua conta.
                            Em caso de acesso não autorizado, entre em contato conosco imediatamente.
                        </p>
    
    
                        <h2>4. Uso Aceitável</h2>
                        <h3>Ao usar a CrashWare, você se compromete a não:</h3>
    
                        <p>
                            Compartilhar conteúdo ofensivo, discriminatório ou ilegal.
                            Tentar burlar o sistema de progressão ou conquistas da plataforma.
                            Usar bots, scripts ou qualquer automação para simular atividades de aprendizado.
                            Reproduzir, vender ou distribuir nosso conteúdo sem autorização prévia.
                            Assediar outros usuários da comunidade.
                        </p>
    
    
                        <h2>5. Conteúdo Educacional</h2>
    
                        <p>
                            Todo o conteúdo disponível na CrashWare — lições, trilhas, quizzes, ilustrações e explicações — é de propriedade intelectual da CrashWare. O acesso é gratuito para fins de aprendizado pessoal, mas qualquer uso comercial ou redistribuição é proibido sem autorização
                        </p>
    
                        <h2>6. Progresso e Gamificação</h2>
    
                        <p>
                            Seu progresso, pontos, conquistas e streak são vinculados à sua conta. A CrashWare não garante a permanência desses dados em casos de encerramento de conta por violação dos termos ou por decisão do próprio usuário.
                        </p>
    
                        <h2>7. Privacidade</h2>
    
                        <p>
                            Coletamos apenas os dados necessários para o funcionamento da plataforma, como e-mail, progresso nas lições e preferências de uso. Não vendemos seus dados a terceiros. Para mais detalhes, consulte nossa Política de Privacidade.
                        </p>
    
                        <h2>8. Disponibilidade do Serviço</h2>
    
                        <p>
                            A CrashWare é oferecida de forma gratuita e nos reservamos o direito de realizar manutenções, atualizações ou descontinuar funcionalidades sem aviso prévio. Faremos o possível para comunicar mudanças importantes com antecedência.
                        </p>
    
                        <h2>9. Encerramento de Conta</h2>
    
                        <p>
                            Você pode excluir sua conta a qualquer momento nas configurações. A CrashWare também pode suspender ou encerrar contas que violem estes termos, sem necessidade de aviso prévio.
                        </p>
    
                        <h2>10. Alterações nos Termos</h2>
    
                        <p>
                            Estes termos podem ser atualizados periodicamente. Quando isso ocorrer, você será notificado pela plataforma. O uso contínuo após as alterações implica na aceitação dos novos termos.
                        </p>
    
                        <div className={Style.contato}>
                            <h2>11. Contato</h2>
                            <p>
                                Dúvidas, sugestões ou denúncias podem ser enviadas para:
                            </p>
                            <span> suporte@crashware.com.br</span>
                        </div>
                </div>
            </div>      
        </>
    );
};

export { ConteudoTermos };