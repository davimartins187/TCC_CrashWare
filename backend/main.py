from fastapi import FastAPI
from routes.auth import auth
import os #Acessa outros arquivos
from dotenv import load_dotenv # Le import arquivo .env



#Lendo arquivos .env
load_dotenv()

#Chave secreta
SECRET_KEY = os.getenv("SECRET_KEY")

#API
crashware = FastAPI()


#Colocando as rotas dentro da API:
crashware.include_router(auth)




#Server da API:
# uvicorn main:crashware --reload

