from flask import Blueprint, request, jsonify, session
from models.certificate import Certificate
from db_connect import db

certificate = Blueprint('certificate', __name__, url_prefix='/portfolio')

@certificate.route('/certificate', methods=['GET', 'POST', 'PATCH', 'DELETE'])
def certificates():
    if request.method == 'POST':
        title = request.form['title']
        organization = request.form['organization']
        date = request.form['date']
        user_id = session['login']

        new_certificate = Certificate(user_id, title, organization, date)
        db.session.add(new_certificate)
        db.session.commit()

        return jsonify('자격증 등록이 완료되었습니다!')
    
    elif request.method == 'PATCH':
        pass

    elif request.method == 'DELETE':
        pass

    else: 
        user_id = request.args['id']
        # 여러개 있으면 여러개 가져오도록 해야함 
        stored_certificate = Certificate.query.filter(Certificate.user_id == user_id).first()
        return jsonify(data = [
                {'title': stored_certificate.title},
                {'organization': stored_certificate.organization},
                {'date': stored_certificate.date}
        ])