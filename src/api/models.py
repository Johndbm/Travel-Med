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

    payments = db.relationship('Pago', backref='user', uselist=True)
    historys = db.relationship('Historia', backref='user', uselist=True)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "lastname": self.lastname,
            "country": self.country,
            "city": self.city,
            "state": self.state,

            "payments": list(map(lambda x: x.serialize(), self.payments)),
            "historys": list(map(lambda x: x.serialize(), self.historys))
            # do not serialize the password, its a security breach
        }


class Pago(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    id_passport = db.Column(db.String(20), unique=False, nullable=False)
    payment_method = db.Column(db.String(20), unique=False, nullable=False)
    confirmation_number = db.Column(db.Integer, unique=True, nullable=False)
    transaction_person = db.Column(db.String(20), unique=False, nullable=False)
    image_of_payment = db.Column(db.String(200),  nullable=False)
    image_id = db.Column(db.String(100))

    def __repr__(self):
        return f'<Pago {self.user_id}>'

    def serialize(self):
        return {
            "user_id": self.user_id,
            "id_passport": self.id_passport,
            "payment_method": self.payment_method,
            "confirmation_number": self.confirmation_number,
            "transaction_person": self.transaction_person,
            "image_of_payment": self.image_of_payment,
            "image_id": self.image_id

        }


class Historia(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    name = db.Column(db.String())
    edad = db.Column(db.Integer, nullable=False)
    peso = db.Column(db.Integer, nullable=False)
    telef = db.Column(db.Integer, nullable=False)
    correo = db.Column(db.String())
    direccion = db.Column(db.String())
    paisRes = db.Column(db.String())
    sexo = db.Column(db.String())
    alt = db.Column(db.String())
    cirugiasAnt = db.Column(db.String())
    alergias = db.Column(db.String())
    obs = db.Column(db.String())

    def __repr__(self):
        return f'<Historia {self.user_id}>'

    def serialize(self):
        return {
            "user_id": self.user_id,
            "body": self.body,
            "name": self.name,
            "edad": self.edad,
            "peso": self.peso,
            "telef": self.telef,
            "correo": self.correo,
            "direccion": self.direccion,
            "paisRes": self.paisRes,
            "sexo": self.sexo,
            "alt": self.alt,
            "cirugiasAnt": self.cirugiasAnt,
            "alergias": self.alergias,
            "obs": self.obs,
        }
