from flask import Flask
from flask import jsonify, make_response
from flask_restful import reqparse, abort, Api, Resource
import requests
import os
import sys
import logging
from flask_restful.utils import cors

parser = reqparse.RequestParser()

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.StreamHandler()
    ]
)
API_KEY = os.getenv('API_KEY')
API_URL = os.getenv("API_URL")

app = Flask("weather")
api = Api(app)

class Weather(Resource):
    @cors.crossdomain(origin='*',methods="*", headers="*")
    def get(self, city):
        args = parser.parse_args()
        url = API_URL+city+"&appid="+API_KEY
        logging.info(f"requested weather in {city}")
        r = requests.get(url).json()
        resp = {
            "temperature": int(r["main"]["temp"]) - 273,
            "description": [r["weather"][i]["description"] for i in range(len(r["weather"]))],
            "icon": [r["weather"][i]["icon"] for i in range(len(r["weather"]))],
            "wind_speed": r["wind"]["speed"],
            "city_name": r["name"],
            "pressure": r["main"]["pressure"]
            }
        return make_response(resp, 200)


api.add_resource(Weather, '/weather/<string:city>')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
    logging.info('Server started')
