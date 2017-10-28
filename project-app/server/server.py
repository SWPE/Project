from flask import Flask
app = Flask(__name__)
@app.route("/test")
def test():
    with open("test.json", "r") as f:
        return f.read()
