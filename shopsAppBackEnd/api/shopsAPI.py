from flask import Flask, request, jsonify
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS, cross_origin
from flask_pymongo import PyMongo
from bson.json_util import dumps
import bson
from bson.objectid import ObjectId



app = Flask(__name__)
# enable Cross Origin Resource Sharing (CORS) for all use cases on a domain
CORS(app)
CORS(app, resources={r"/users": {"origins": "*"}})
CORS(app, resources={r"/loginUser": {"origins": "*"}})
CORS(app, resources={r"/updateuser": {"origins": "*"}})
CORS(app, resources={r"/prefered-shops": {"origins": "*"}})


#  connexion to mongodb
app.config['MONGO_DBNAME'] = 'shopsAppDB'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/shopsAppDB'

mongo = PyMongo(app)
api = Api(app)

parser = reqparse.RequestParser()
parser.add_argument('email')
parser.add_argument('password')
parser.add_argument('preferedshops', '--list', action='append')

# get all shops
class Shops(Resource):
    def get(self):
        shops = mongo.db.shops
        output = []
        cursor = shops.find().sort([('location.coordinates', 1)])

        for s in cursor :
            output.append({'name': s['name'], 'city': s['city'], 'picture': s['picture'], 'email': s['email'], 'id': str(s['_id']), 'location': s['location']})
        return jsonify(output)


# get users or add user
class Users(Resource):
    def get(self):

        users = mongo.db.users
        output2 = []
        cursor = users.find()

        for sr in cursor :
            output2.append({'email': sr['email'], 'password': sr['password'],'preferedshops': sr['preferedshops']})
        return jsonify(output2)

    def post(self):
        users = mongo.db.users
        args = parser.parse_args()
        output = {'email': args['email'],'password': args['password'],'preferedshops': []}
        users.insert_one(output)

        return None
# get prefered shops for user
class PreferedShops(Resource):
    def get(self):
        shops = mongo.db.shops
        users = mongo.db.users
        args = parser.parse_args()
        user = users.find_one({"$and": [{"email": args['email']}, {"password": args['password']}]},{ 'preferedshops': 1 })
        preferedShopsId = user['preferedshops']
        output = []

        for shopId in preferedShopsId :
            findShop = shops.find_one({"_id": ObjectId(shopId)})

            output.append({'name': findShop['name'], 'city': findShop['city'], 'picture': findShop['picture'], 'email': findShop['email'],
                           'id': str(findShop['_id']), 'location': findShop['location']})

        return jsonify(output)

    def post(self):
        return None


class LoginUser(Resource):


    def post(self):
        users = mongo.db.users
        args = parser.parse_args()
        cursor = users.find_one({"$and": [{"email": args['email']}, {"password": args['password']}]})
        output = {'email': cursor['email'],'password': cursor['password'],'preferedshops':cursor['preferedshops']}
        return output

#  add or delete prefered shop  for a user
class UpdateUser(Resource):


    def post(self):
        users = mongo.db.users
        args = parser.parse_args()
        newPreferedShop = args['preferedshops']
        cursor = users.update({"$and": [{"email": args['email']}, {"password": args['password']}]},{'$set':{'preferedshops':newPreferedShop}} )

        # output = {'email': cursor['email'], 'password': cursor['password']}


        return cursor




#  add routes
api.add_resource(Shops, '/shops') # Route_1
api.add_resource(Users, '/users',methods=['GET', 'POST']) # Route_2
api.add_resource(LoginUser, '/loginUser',methods=['POST']) # Route_3
api.add_resource(UpdateUser, '/updateuser',methods=['POST']) # Route_4
api.add_resource(PreferedShops, '/prefered-shops',methods=['GET', 'POST']) # Route_5






