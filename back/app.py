from flask import Flask
from flask_cors import CORS

from blueprints.login import Login
from blueprints.register import Register
from blueprints.logout import Logout

from blueprints.portfolio.achievement import achievement
from blueprints.portfolio.certificate import certificate


from db_connect import db

from secret import secret_key

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:root@127.0.0.1:3306/racer_portfolio'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = secret_key

app.register_blueprint(Login)
app.register_blueprint(Register)
app.register_blueprint(Logout)
app.register_blueprint(achievement)
app.register_blueprint(certificate)


db.init_app(app)
CORS(app)

app.run(debug=True)