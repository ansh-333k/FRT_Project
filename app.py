from flask import Flask, render_template
from pymongo import MongoClient
from bson.objectid import ObjectId
from bson.json_util import dumps

uri = "mongodb://tra-well-server:s5Q7sv7jfJpiaJ2KC0orrhLSfDwRSzxYk0cH0R5pnqsMPG2GAgo7qSIm28ywcVJKBNk6ww1u4h9FACDb000UEw==@tra-well-server.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@tra-well-server@"

app = Flask(__name__, template_folder='./templates/', static_folder='./static/')
client = MongoClient(uri)

@app.route("/")
def index():
	return render_template('index.html')

if __name__ == "__main__":
	app.run(debug=True)