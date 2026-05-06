#Importando comandos do sql para o código.

from sqlalchemy import Column, Integer, Float


#Importando a Base declarativa
from database.base import Base

#Importando a session
from database.session import Session



# Cria a sessão
session = Session()

class Nivel(Base):
    # Nome da tabela
    __tablename__ = "nivel"

    # Campos da tabela
    id_nivel = Column(Integer,primary_key=True,autoincrement=True)
    xp_minimo = Column(Float,nullable=False)


    # Criando atributos PARA O PYTHON (Naõ altera nada no banco de dados)
    def __init__(self,xp_minimo):
        self.xp_minimo = xp_minimo







session.close()

