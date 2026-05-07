from dbm import error

from fastapi import APIRouter, Depends,HTTPException,UploadFile, File

#Biblioteca de requesição
import requests

#Importando tabelas:
from models.usuarios import Usuarios
from models.usuarios_oauth import UsuariosOauth
from models.gamificacao import Patente
from routes.auth import auth

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

##Carrego o .env
load_dotenv()

#Pego informações do banco:
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_SERVICE_KEY")
SUPABASE_BUCKET = os.getenv("SUPABASE_BUCKET")


#ROTAS:
@user.get('/')
async def  perfil(usuario = Depends(validar_token)):
    if usuario is None:
        raise HTTPException(status_code=404,detail="Usuário não encontrado")
    else:
        nome_patente = usuario.patentes.nome_patente
        criado_em = usuario.created_at
        data_formatada = criado_em.strftime("%d/%m/%Y")
        return{
            "nome" : usuario.nome_usuario.title(),
            "email" : usuario.email.lower(),
            "foto" : usuario.foto,
            "banner" : usuario.banner,
            "moedas" : usuario.moedas,
            "xp" : usuario.xp,
            "ativo": usuario.ativo,
            "patente": nome_patente,
            "nivel": usuario.nivel_id,
            "adm": usuario.admin,
            "criado_em" :  data_formatada
        }

@user.post('/adicionar_foto')
async def adicionar_foto(foto : UploadFile = File(...),usuario = Depends(validar_token),session = Depends(pegar_sessao)):
    if usuario is None:
        raise HTTPException(status_code=404,detail="Usuário não encontrado")
    try:
        ##altero a foto no banco de dados:
        id = str(usuario.id_usuario) + '/'

        nome_arquivo = id + foto.filename

        ##Gero uma nova imagem no bucket

        ##Gero uma requisição

        ##Pego a foto
        conteudo = await foto.read()

        ##URL DE UPLOAD
        url_upload = f"{SUPABASE_URL}/storage/v1/object/{SUPABASE_BUCKET}/{nome_arquivo}"

        #Headers da requisição
        headers = {
            "Authorization": f"Bearer {SUPABASE_KEY}",
            "apikey": SUPABASE_KEY,
            "Content-Type": foto.content_type
        }

        #Requisição
        resposta = requests.post(
            url_upload,
            headers=headers,
            data=conteudo
        )

        if(resposta.status_code > 199 and resposta.status_code < 300):
            ##Retorno mensagem de sucesso
            usuario.foto = nome_arquivo
            session.commit()
            return {"mensagem": "Foto adicionada com sucesso!"}
        else:
            ##Retorno o erro
            raise HTTPException(status_code=400,detail=resposta.text)

    except Exception as exception:
        ##Se não der certo eu retorno o erro, e dou rollback no banco.
        session.rollback()
        raise HTTPException(status_code=400, detail=str(exception))





