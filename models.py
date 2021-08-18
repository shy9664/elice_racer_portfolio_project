from db_connect import db

class User(db.Model):
    __tablename__ = 'User'
    id = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    user_id = db.Column(db.String(20), unique=True, nullable=False)  # 나중에 이메일형식
    user_pw = db.Column(db.String(20), nullable=False)  # 나중에 암호화 고려 
    name = db.Column(db.String(10), nullable=False)

    def __init__(self, user_id, user_pw, name):
        self.user_id = user_id
        self.user_pw = user_pw
        self.name = name


class Introduction(db.Model):
    __tablename__ = 'Introduction'
    id = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    user_id = db.Column(db.ForeignKey('User.user_id'))
    name = db.Column(db.String(10), nullable=False)
    photo = db.Column(db.String(100))    # 나중에 사진 주소?
    introduction = db.Column(db.String(50))


class Education(db.Model):
    __tablename__ = 'Education'
    id = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    user_id = db.Column(db.ForeignKey('User.user_id'))
    school = db.Column(db.String(20), nullable=False)
    major = db.Column(db.String(20), nullable=False)
    degree = db.Column(db.String(20), nullable=False)  # 나중에 라디오 버튼으로..? 

    def __init__(self, user_id, school, major, degree):
        self.user_id = user_id
        self.school = school
        self.major = major
        self.degree = degree


class Awards(db.Model):
    __tablename__ = 'Awards'
    id = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    user_id = db.Column(db.ForeignKey('User.user_id'))
    title = db.Column(db.String(20), nullable=False)
    detail = db.Column(db.String(50), nullable=False)

    def __init__(self, user_id, title, detail):
        self.user_id = user_id
        self.title = title
        self.detail = detail


class Projects(db.Model):
    __tablename__ = 'Projects'
    id = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    user_id = db.Column(db.ForeignKey('User.user_id'))
    title = db.Column(db.String(20), nullable=False)
    detail = db.Column(db.String(50), nullable=False)
    period = db.Column(db.Integer, nullable=False)  # 나중에 datepicker로 

    def __init__(self, user_id, title, detail, period):
        self.user_id = user_id
        self.title = title
        self.detail = detail
        self.period = period


class Certificates(db.Model):
    __tablename__ = 'Certificates'
    id = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    user_id = db.Column(db.ForeignKey('User.user_id'))
    title = db.Column(db.String(20), nullable=False)
    organization = db.Column(db.String(20), nullable=False)
    date = db.Column(db.Integer, nullable=False)  # 날짜형식 

    def __init__(self, user_id, title, organization, date):
        self.user_id = user_id
        self.title = title
        self.organization = organization
        self.date = date
