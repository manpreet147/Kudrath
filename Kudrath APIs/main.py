from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from router.employee import router, employee_data
from pydantic import BaseModel
from db import SessionLocal
from models import LoginHistory, User, Product

app = FastAPI()

app.include_router(router)

@app.get("/")
async def root():
    return {"message": "Hello World"}

class LoginRequest(BaseModel):
    email: str
    password: str

def authenticate_user(email, password):

    db = SessionLocal()

    user = db.query(User).filter(
        User.email == email,
        User.password == password
    ).first()

    db.close()

    return user
@app.post("/login")
def login(data: LoginRequest):

    user = authenticate_user(
        data.email,
        data.password
    )

    if not user:
        return{
            "status": False,
            "message": "Invalid Credentials"
        }
    db = SessionLocal()

    #save login record
    login_record = LoginHistory(
        email = data.email
    )

    db.add(login_record)
    db.commit()
    db.close()

    return{
        "status": True,
        "message": "Login Successful"
    }

@app.get("/items/{item_id}")
async def read_item(item_id: int):
    return {"item_id": item_id}

@app.get("/products")
def get_product():
    db = SessionLocal()
    products = db.query(Product).all()
    result = []
    for product in products:
        result.append({
            "id": product.id,
            "name": product.name,
            "price": product.price,
            "quantity": product.quantity,
            "image_url": product.image_url
        })
    db.close()
    return result

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # for development (later restrict this)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)