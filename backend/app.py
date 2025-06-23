from flask import Flask, jsonify
from flask_cors import CORS
from canvas_api import get_upcoming_assigments

app = Flask(__name__)
CORS(app)  # Allow requests from frontend

@app.route("/api/assigments", methods=["GET"])
def assignments():
    try:
        data = get_upcoming_assigments()
        return jsonify({"assigments": data})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
@app.route("/ping")
def ping():
    return jsonify({"message": "Backend is working!"})

if __name__ == "__main__":
    app.run(debug=True)
