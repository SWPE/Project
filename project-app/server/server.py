"""
This is the back-end application.
It works with database
It gets some urls like "/request" and then do sth with this and returns response to front-end
"""

#Core of the server
from flask import Flask
import flask

#Object whcih represents db
import MySQLdb

#Useful objects
import json #to send data in json format to front-end
import hashlib #makes hashes where they are required

app = Flask(__name__) #The application itself


def getCursor():
    """
    Creates connection and cursor which is required to work with database
    """
    connection = MySQLdb.connectconnection=MySQLdb.connect(user="projectAdmin", password="opiproject", host="127.0.0.1", database="project", charset="utf8")
    cursor = connection.cursor()
    return (cursor, connection)


def closers(cursor, connection):
    """
    Closes cursor and connection
    """
    cursor.close()
    connection.close()


@app.route("/getPeople")
def getPeople():
    """
    The signature of all get methods are the same
    """
    cursor, connection = getCursor() #get the connection and cursor
    cursor.execute("SELECT * FROM peopleTable;") #get data from db
    response = []
    for id, name, number, isComing in cursor: #procces data
        response.append({"id":id,"name":name,"number":number, "isComing":isComing}) 
    closers(cursor, connection) #close connection with db
    resp = flask.Response(json.dumps(response)) #parse data to json and add to resp (response)
    resp.headers['Access-Control-Allow-Origin'] = '*' #add headers to pass through same origin policy
    return resp #return response to the front-end


@app.route("/getLectures")
def getLectures():
    cursor, connection = getCursor()
    cursor.execute("SELECT * FROM lecturesTable;")
    result = []
    for subject,filename,source,description in cursor:
        result.append({"subject":subject, "source":source, "fileName":filename,"description":description})
    closers(cursor, connection)
    resp = flask.Response(json.dumps(result))
    resp.headers['Access-Control-Allow-Origin'] = "*"
    return resp


@app.route("/getHomeworks")
def getHomeworks():
    cursor, c = getCursor()
    cursor.execute("SELECT * FROM homeworks;")
    result = []
    for subject, whenGiven, whenPass, textDescription, fileName, source in cursor:
        result.append({"subject":subject, "whenGiven":whenGiven, "whenPass":whenPass, "textDescription":textDescription, "fileName":fileName, "source":source});
    closers(cursor, c)
    resp = flask.Response(json.dumps(result))
    resp.headers['Access-Control-Allow-Origin'] = "*"
    return resp


@app.route("/getInfo")
def getInfo():
    cursor, c = getCursor()
    result = []
    cursor.execute("SELECT * FROM info;")
    for name, text, hash, date in cursor:
        result.append({"name":name, "text":text, "files":[], "date":date})
    for res in result:
        executable = 'SELECT * FROM infoFiles WHERE hash = "%s";' % hashlib.md5(b"%s" % res["text"].encode("utf-8")).hexdigest()
        cursor.execute(executable)
        for name, source, hash in cursor:
            res["files"].append({"name":name, "source":source})
    closers(cursor, c)
    resp = flask.Response(json.dumps(result))
    resp.headers['Access-Control-Allow-Origin'] = "*"
    return resp


@app.route("/getMeeting")
def getMeeting():
    cursor, c = getCursor()
    result = {}
    cursor.execute("SELECT * FROM meeting;")
    for place, date, description in cursor:
        result = {"place":place, "description":description, "date":date}
    closers(cursor, c)
    resp = flask.Response(json.dumps(result))
    resp.headers['Access-Control-Allow-Origin'] = "*"
    return resp

