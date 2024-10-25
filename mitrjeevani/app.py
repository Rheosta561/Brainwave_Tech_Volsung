from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
from modelling import get_response  # Import the function from modelling.py

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/api/process', methods=['POST'])
def process_input():
    data = request.get_json()
    user_query = data.get("userInput", "")

    # Get the response from modelling.py based on the user query
    answer = get_response(user_query) 
    
    # Return the answer as JSON to the React app
    return jsonify(result=answer)

if __name__ == '__main__':
    app.run(port=3001, debug=True)
