from sqlalchemy import Column, Integer, String, TIMESTAMP, Text, Float
from sqlalchemy.sql import func
from db import engine
from sqlalchemy.orm import declarative_base

Base = declarative_base()

class Product(Base):
    __tablename__ = "products"

    id  = Column(Integer, primary_key = True, index = True)
    name = Column(String)
    price = Column(Float)
    quantity = Column(Integer)
    image_url = Column(Text)

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)

class LoginHistory(Base):
    __tablename__ = "login_history"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String)
    login_time = Column(
        TIMESTAMP,
        server_default=func.now()
    )

Base.metadata.create_all(bind=engine)