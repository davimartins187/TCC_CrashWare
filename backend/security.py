#Importando ferramentas para cirpotgrafia
from passlib.context import CryptContext
from passlib.handlers.bcrypt import bcrypt

criptografia = CryptContext(schemes=["bcrypt"], deprecated = "auto")