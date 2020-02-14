from flask_backend import app
from flask import render_template

# Shows the homepage
@app.route('/')
def index():
    return render_template("index.html", token="React and Flask")