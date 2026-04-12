from database.session import Session


#Função de pegar a sessão com segurança.
def pegar_sessao():
    try:
        session = Session()
        yield session
    finally:
        session.close()