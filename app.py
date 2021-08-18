from flask import Flask
from db_connect import db

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = ""
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)

app.run(debug=True)