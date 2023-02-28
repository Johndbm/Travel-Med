"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required


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

    if email is None or password is None:
        return jsonify({"msg": "Bad username or password"}), 401
    
    user = User.query.filter_by(email=email, password=password).first()
    if user is None :
        return jsonify({"msg": "Bad username or password"}), 401
    
    access_token = create_access_token(identity=user.id)
    return jsonify(access_token=access_token), 200

    # user = User.query.filter_by(email=email, password=password).first()
    # if user is None :
    #     return jsonify({"msg": "Bad username or password"}), 401

    # access_token = create_access_token(identity=email)
    # return jsonify(access_token=access_token)

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
    if request.method == 'POST' :
        user_id = get_jwt_identity()
        data_files = request.files
        data_form = request.form

        data = {
            "payment_method": data_form.get("payment_method", None),
            "confirmation_number": data_form.get("confirmation_number", None),
            "transaction_person": data_form.get("transaction_person", None),
            "image_of_payment": data_files.get("image_of_payment", None),
            "id_passport": data_form.get("id_passport", None)
        }

        # print(data)

        if data is None:
            return jsonify("Debe ingresar todos los datos"), 400
        if data.get('payment_method') is None:
            return jsonify("Debe ingresar un metodo de pago"), 400
        if data.get('confirmation_number') is None:
            return jsonify("Debe ingresar un numero de confirmacion"), 400
        if data.get('transaction_person') is None:
            return jsonify("Debe ingresar una persona de transaccion"), 400
        if data.get('image_of_payment') is None:
            return jsonify("Debe ingresar una imagen de pago"), 400
        if data.get('id_passport') is None:
            return jsonify("Debe ingresar un id de pasaporte"), 400
        
        try:
            imagen_upload = uploader.upload(data.get('image_of_payment'))
            pago = Pago(
                user_id=user_id,
                payment_method=data.get('payment_method'),
                confirmation_number=data.get('confirmation_number'),
                transaction_person=data.get('transaction_person'),
                image_of_payment=imagen_upload.get('url'),
                id_passport=data.get('id_passport'),
                image_id=imagen_upload["public_id"]
            )
            db.session.add(pago)
            db.session.commit()
            return jsonify("message" "El formulario de pago ha sido llenado con exito"), 201
        except Exception as error:
            db.session.rollback()
            return jsonify(error.args)
        
    


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

    
@api.route('/prueba',  methods=['GET'])
@jwt_required()
def prueba():
    user_id = get_jwt_identity()
    return jsonify(user_id), 200
