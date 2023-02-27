"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
# from smtplib import SMTP
import smtplib
# from flask_jwt_extended import create_access_token
# from flask_jwt_extended import get_jwt_identity
# from flask_jwt_extended import jwt_required


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
    if user is None:
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)


@api.route('/user', methods=['GET'])
def get_users():

    if request.method == "GET":
        all_users = User.query.all()
        user_dictionary = []
        for user in all_users:
            user_dictionary.append(user.serialize())
        print(user_dictionary)

    return jsonify(user_dictionary), 200


@api.route('/user', methods=['POST'])
def post_users():
    if request.method == "POST":
        body = request.json
        email = request.form.get("email", None)
        password = request.form.get("password", None)
        name = request.form.get("name", None)
        lastname = request.form.get("lastname", None)
        country = request.form.get("country", None)
        city = request.form.get("city", None)
        state = request.form.get("state", None)
        try:
            if email is None or password is None or name is None or lastname is None or country is None or city is None or state is None:
                raise Exception("No ingresaste todos los datos", 400)
            user = User(email=email, password=password, name=name,
                        lastname=lastname, country=country, city=city, state=state)
            db.session.add(user)
            db.session.commit()
            return jsonify("message" "User Created!")
        except Exception as error:
            return jsonify(error.args[0]), error.args[1]


@api.route('/pago', methods=['GET'])
def get_pagos():
    response = {"mensaje": "Probando pagos"}
    if request.method == 'GET':
        all_payments = Pago.query.all()
        payment_dictionary = []
        for payment in all_payments:
            payment_dictionary.append(payment.serialize())
        print(payment_dictionary)
    return jsonify(payment_dictionary, response), 200


@api.route('/pago', methods=['POST'])
def post_pagos():
    if request.method == 'POST':

        user_id = 2
        payment_method = request.form.get("payment_method", None)
        confirmation_number = request.form.get("confirmation_number", None)
        transaction_person = request.form.get("transaction_person", None)
        image_of_payment = request.files["image_of_payment"]
        id_passport = request.form.get("id_passport", None)

        try:
            imagen_upload = uploader.upload(image_of_payment)
            print(imagen_upload)
            if id_passport is None or payment_method is None or confirmation_number is None or transaction_person is None or image_of_payment is None:
                raise Exception("Debe ingresar todos los datos", 400)
            pago = Pago(id_passport=id_passport, payment_method=payment_method, confirmation_number=confirmation_number,
                        transaction_person=transaction_person, image_of_payment=imagen_upload["url"], image_id=imagen_upload["public_id"], user_id=user_id)
            db.session.add(pago)
            db.session.commit()
            return jsonify("message" "El formulario de pago ha sido llenado con exito"), 201
            # return jsonify([]), 200
        except Exception as error:
            print(error.args)
            # return jsonify(error.args[0]),error.args[1]
            return jsonify([]), 500


@api.route('/historia', methods=['GET'])
def get_historias():
    response = {"mensaje": "historia medica"}
    if request.method == 'GET':
        all_historys = Historia.query.all()
        history = []
        for historia in all_historys:
            history.append(historia.serialize())
        print(history)
    return jsonify(history, response), 200


@api.route('/historia', methods=['POST'])
def post_historias():
    if request.method == 'POST':
        body = request.json
        user_id = 1
        name = body.get("name", None)
        edad = request.form.get("edad", None)
        peso = request.form.get("peso", None)
        telef = request.form.get("telef", None)
        correo = request.form.get("correo", None)
        paisRes = request.form.get("paisRes", None)
        direccion = request.form.get("direccion", None)
        sexo = request.form.get("sexo", None)
        alt = request.form.get("alt", None)
        cirugiasAnt = request.form.get("cirugiasAnt", None)
        alergias = request.form.get("alergias", None)
        obs = request.form.get("obs", None)

        if name is None or edad is None or peso is None or telef is None or correo is None or direccion is None or sexo is None or alt is None or cirugiasAnt is None or alergias is None or obs in None:
            return jsonify("error, faltan datos"), 400

        try:
            historia = Historia(name=name, edad=edad, peso=peso, telef=telef, correo=correo,
                                direccion=direccion, sexo=sexo, alt=alt, cirugiasAnt=cirugiasAnt, alergias=alergias, obs=obs)
            db.session.add(historia)
            db.session.commit()
            return jsonify("message" "La historia medica ha sido llenada con exito.."), 200
        except Exception as error:
            print(error.args)
            return jsonify([]), 500


@api.route('/send-mail', methods=['POST'])
def send_mail():
    if request.method == 'POST':
        data = request.json

        message = data.get("message")
        try:
            server = smtplib.SMTP("smtp.gmail.com", 587)
            server.starttls()
            server.login('travelmed23@gmail.com', 'duspfibotpbahgya')
            server.sendmail('travelmed23@gmail.com',
                            'travelmed23@gmail.com', message)
            server.quit()
            print("email send")
            return jsonify("message"), 200

        except Exception as error:
            print(error)
            print("Email not sending, error", error.args)
            return jsonify({"message": "error"}), 500
