from flask import Flask
import flask
import MySQLdb
import json
connection=MySQLdb.connect(user="projectAdmin", password="opiproject", host="127.0.0.1", database="project", charset="utf8")
cursor = connection.cursor()
app = Flask(__name__)
@app.route("/getPeople")
def getPeople():
    cursor.execute("SELECT * FROM peopleTable;")
    response = []
    for id, name, number, isComing in cursor:
        response.append({"id":id,"name":name,"number":number, "isComing":isComing})
    resp = flask.Response(json.dumps(response))
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp
@app.route("/getLectures")
def getLectures():
    cursor.execute("SELECT * FROM lecturesTable;")
    result = []
    for subject,filename,source,description in cursor:
        result.append({"subject":subject, "source":source, "fileName":filename,"description":description})
    resp = flask.Response(json.dumps(result))
    resp.headers['Access-Control-Allow-Origin'] = "*"
    return resp
