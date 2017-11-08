from flask import Flask
import flask
import MySQLdb
import json
import hashlib
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
@app.route("/getHomeworks")
def getHomeworks():
    cursor.execute("SELECT * FROM homeworks;")
    result = []
    for subject, whenGiven, whenPass, textDescription, fileName, source in cursor:
        result.append({"subject":subject, "whenGiven":whenGiven, "whenPass":whenPass, "textDescription":textDescription, "fileName":fileName, "source":source});
    resp = flask.Response(json.dumps(result))
    resp.headers['Access-Control-Allow-Origin'] = "*"
    return resp
@app.route("/getInfo")
def getInfo():
    result = []
    cursor.execute("SELECT * FROM info;")
    for name, text, hash, date in cursor:
        result.append({"name":name, "text":text, "files":[], "date":date})
    for res in result:
        executable = 'SELECT * FROM infoFiles WHERE hash = "%s";' % hashlib.md5(b"%s" % res["text"].encode("utf-8")).hexdigest()
        cursor.execute(executable)
        for name, source, hash in cursor:
            res["files"].append({"name":name, "source":source})
    resp = flask.Response(json.dumps(result))
    resp.headers['Access-Control-Allow-Origin'] = "*"
    return resp

