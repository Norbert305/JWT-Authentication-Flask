"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

#First GET method
@api.route('/user', methods=['GET'])
def get_users():

    users_query = User.query.all()
    all_users = list(map(lambda x: x.serialize(), users_query))

    return jsonify(
        all_users
    ), 200

#Get Specific User
@api.route('/user/<id>', methods=['GET'])
def get_specific_user(id):

    user_query = User.query.get(id)

    return jsonify(
        user_query.serialize()
    ), 200

#Add New User
@api.route('/user', methods=['POST'])
def add_new_user():

    body = request.get_json()

    new_user = User(
        full_name=body["full_name"], 
        email=body["email"], 
        password=body["password"]
    )

    db.session.add(new_user)
    db.session.commit()

    users_query = User.query.all()
    all_users = list(map(lambda x: x.serialize(), users_query))
    return jsonify(all_users), 200

#User Login
@api.route('/login', methods=['POST'])
def user_login():

    body = request.get_json()

    user = User.query.filter_by(email = body["email"], password = body["password"]).first()

    if user == None:
        return "email or password is incorrect", 400
    return jsonify(
        user.serialize()
    ), 200