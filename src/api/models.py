from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    name = db.Column(db.String(20), unique=False, nullable=False)
    lastname = db.Column(db.String(20), unique=False, nullable=False)
    country = db.Column(db.String(30), unique=False, nullable=False)
    city = db.Column(db.String(20), unique=False, nullable=False)
    state = db.Column(db.String(20), unique=False, nullable=False)
    

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "lastname": self.lastname,
            "country": self.country,
            "city":self.city,
            "state":self.state,
            # do not serialize the password, its a security breach
        }


class Pago(db.Model):
    id= db.Column(db.Integer,primary_key=True)
    user_id= db.Column(db.Integer, ForeignKey("user.id"))
    name = db.Column(db.String(20), unique= False, nullable= False)
    id_passport = db.Column(db.String(20), unique=True, nullable=False)
    payment_method = db.Column(db.String(20), unique=False, nullable = False)
    confirmation_number = db.Column(db.Integer, unique= True, nullable= False) 
    transaction_person = db.Column(db.String(20), unique= False, nullable= False)
    proof_of_payment = db.Column(db.String(20), unique= False, nullable=False)

    def __repr__(self):
        return f'<Pago {self.user_id}>'

    def serialize(self):
        return{
            "user_id":self.user_id,
            "name": self.name,
            "id_passport":self.id_passport,
            "payment_method": self.payment_method,
            "confirmation_number":self.confirmation_number,
            "transaction_person": self.transaction_person,
            "proof_of_payment": self.proof_of_payment,

        }