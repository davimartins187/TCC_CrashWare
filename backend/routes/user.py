from fastapi import APIRouter, Depends,HTTPException


#Importando tabelas:
from models.usuarios import Usuarios
from models.usuarios_oauth import UsuariosOauth
from models.patentes import Patente


#Instânciando roteador
user = APIRouter(prefix="/user",tags=["usuario"])

#Importando dependencias
from dependences import pegar_sessao , validar_token


#Funcionalidas para enviar codigo para o email
import smtplib
import email.message

#dotenv
import os
from dotenv import load_dotenv

#ROTAS:
@user.get('/')
async def  perfil(usuario = Depends(validar_token)):
    if usuario is None:
        raise HTTPException(status_code=404,detail="Usuário não encontrado")
    else:
        nome_patente = usuario.patentes.nome_patente
        return{
            "nome" : usuario.nome_usuario.title(),
            "email" : usuario.email_usuario.lower(),
            "foto" : usuario.foto.lower(),
            "banner" : usuario.banner.lower(),
            "moedas" : usuario.moedas,
            "xp" : usuario.xp,
            "ativo": usuario.ativo,
            "patente" : nome_patente
        }




