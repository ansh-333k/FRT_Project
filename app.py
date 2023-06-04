from flask import Flask, render_template
from pymongo import MongoClient

uri = "mongodb://tra-well-server:s5Q7sv7jfJpiaJ2KC0orrhLSfDwRSzxYk0cH0R5pnqsMPG2GAgo7qSIm28ywcVJKBNk6ww1u4h9FACDb000UEw==@tra-well-server.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@tra-well-server@"

app = Flask(__name__, template_folder="./templates/", static_folder="./static/")
client = MongoClient(uri)
db = client["tra-well-database"]["india"]

@app.route("/")
def index():
	return render_template('index.html')

@app.route("/india")
def india():
	categories = []
	for i in db.find():
		categories.append({
			"name": i.get("category"),
			"image": i.get("image")
		})
	return categories

@app.route("/india/<string:category>")
def category(category):
	return db.find_one({"category": category}).get("places")

if __name__ == "__main__":
	app.run(debug=True)
