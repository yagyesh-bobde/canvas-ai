import pandas as pd
import os
from flask import Flask, request, render_template
from dotenv import load_dotenv

import google.generativeai as genai

app = Flask(__name__,template_folder='./template')

load_dotenv()
API_KEY = os.getenv("GOOGLE_API_KEY")

genai.configure(api_key=API_KEY)
model = genai.GenerativeModel("gemini-pro")

def generate_response(question):
    response = model.generate_content(question)
    return response.text

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/get-response", methods=["POST"])
def get_response():
    question = request.form["question"]
    response = generate_response(question)
    return render_template("index.html", question=question, answer=response)

if __name__ == "__main__":
    app.run(debug=True)
