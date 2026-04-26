from fastapi import Header, Depends , HTTPException


#Pego a sessão
from database.session import Session

#Importando criptografia para tokens
from jose import jwt,JWTError

#dotenv
import os
from dotenv import load_dotenv

#Importando tabelas
from models.usuarios import Usuarios

#Biblioteca de tempo
from datetime import datetime , timezone

load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITIMO = os.getenv("ALGORITIMO")

#Função de pegar a sessão com segurança.
def pegar_sessao():
    try:
        session = Session()
        yield session
    finally:
        session.close()

#Função que pega o token do header
async def pegar_token(authorization: str = Header(None)):
    if authorization is None:
        return HTTPException(status_code=401 , detail="Token não enviado")
    else:
        token =  authorization.replace("Bearer ", "")
        return token



