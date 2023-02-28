"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from amadeus import Client, ResponseError


from api.models import db, User
from api.models import db, Pago
from api.models import db, Historia
from api.utils import generate_sitemap, APIException
import cloudinary.uploader as uploader

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email, password=password).first()
    if user is None :
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

@api.route('/user', methods=['GET'])
def get_users():

    if request.method == "GET" :
        all_users = User.query.all()
        user_dictionary = []
        for user in all_users:
            user_dictionary.append(user.serialize())
        print(user_dictionary)

    return jsonify(user_dictionary), 200

@api.route('/user', methods=['POST'])
def post_users():
    if request.method == "POST" :
        body = request.json
        email = body.get("email", None)
        password = body.get("password", None)
        name = body.get("name", None)
        lastname = body.get("lastname", None)
        country = body.get("country", None)
        city = body.get("city", None)
        state = body.get("state", None)
        try:
            if email is None or password is None or name is None or lastname is None or country is None or city is None or state is None:
                raise Exception("No ingresaste todos los datos",400)
            user = User(email=email, password=password, name=name, lastname=lastname, country=country, city=city, state=state)
            db.session.add(user)
            db.session.commit()
            return jsonify("message" "User Created!")
        except Exception as error:
            return jsonify(error.args[0]),error.args[1]



@api.route('/pago', methods=['GET']) 
def get_pagos():
    response={"mensaje":"Probando pagos"}
    if request.method == 'GET' :
        all_payments= Pago.query.all()
        payment_dictionary = []
        for payment in all_payments :
            payment_dictionary.append(payment.serialize())
        print(payment_dictionary)
    return jsonify(payment_dictionary,response),200


@api.route('/pago', methods=['POST'])
@jwt_required()
def post_pagos():
    if request.method == 'POST':
        
      

        user_id = 2
        payment_method = request.form.get("payment_method", None)
        confirmation_number = request.form.get("confirmation_number", None)
        transaction_person = request.form.get("transaction_person", None)
        image_of_payment = request.files["image_of_payment"]
        id_passport = request.form.get("id_passport",None)

       
        try:
            imagen_upload = uploader.upload(image_of_payment)
            print(imagen_upload)
            if id_passport is None or payment_method is None or confirmation_number is None or transaction_person is None or image_of_payment is None :
                raise Exception("Debe ingresar todos los datos", 400)
            pago= Pago(id_passport=id_passport,payment_method=payment_method,confirmation_number=confirmation_number,transaction_person=transaction_person,image_of_payment=imagen_upload["url"],image_id=imagen_upload["public_id"], user_id=user_id)
            db.session.add(pago)
            db.session.commit()
            return jsonify("message" "El formulario de pago ha sido llenado con exito"), 201
            return jsonify([]), 200
        except Exception as error:
            print(error.args)
            # return jsonify(error.args[0]),error.args[1]
            return jsonify([]), 500


@api.route('/historia', methods=['GET']) 
def get_historias():
    response={"mensaje":"historia medica"}
    if request.method == 'GET' :
        all_historias= Historia.query.all()
        historia = []
        for historia in all_historias :
            historia.append(historia.serialize())
        print(historia)
    return jsonify(historia,response),200


@api.route('/historia', methods=['POST'])
def post_historias():
    if request.method == 'POST' :
        user_id = 1
        body = request.json
        name = body.get("name", None)
        edad = body.get("edad", None)
        peso = body.get("peso", None)
        telef = body.get("telef", None)
        correo = body.get("correo",None)
        paisRes = body.get("paisRes",None)
        direccion = body.get("direccion",None)
        sexo = body.get("sexo",None)
        alt = body.get("alt",None)
        cirugiasAnt = body.get("cirugiasAnt",None)
        alergias = body.get("alergias",None)
        obs = body.get("obs",None)
        try:
            if name is None or edad is None or peso is None or telef is None or correo is None or direccion is None or sexo is None or alt is None or cirugiasAnt is None or alergias is None or obs in None:
                raise Exception("Debe ingresar todos los datos", 400)
            historia = Historia(name=name, edad=edad, peso=peso, telef=telef, correo=correo,direccion=direccion,sexo=sexo,alt=alt,cirugiasAnt=cirugiasAnt,alergias=alergias,obs=obs)
            db.session.add(historia)
            db.session.commit()
            return jsonify("message" "La historia medica ha sido llenada con exito")
        except Exception as error:
            print(error.args)
            # return jsonify(error.args[0]),error.args[1]
            return jsonify([]), 500


@api.route('/send mail' , methods=['POST'])
def send_mail():
    if request.method == 'POST':
        data = request.json            
       
        
        return jsonify([]), 200


@api.route('/flight_offers' , methods=['GET'])
def flight_offers():
    if request.method == 'GET':
        try:
            response = amadeus. shopping.flight_offers_search.get(
                originLocationCode='MAD',
                destinationLocationCode='ATH',
                departureDate='2023-04-01',
                adults=1)
                
            print(response.data)
        except ResponseError as error:
            print(error)   

