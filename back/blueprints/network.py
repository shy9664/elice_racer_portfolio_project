from flask import Blueprint, jsonify
from models.user import User

Network = Blueprint('Network', __name__)

@Network.route('/network')
def network():
  all_user = User.query.all()
  users = []
  for user in all_user:
    users.append({
      'user_name':user.name,
    })

  return jsonify(data = users)
