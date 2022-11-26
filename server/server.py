import client
from flask import Flask, request, jsonify
from flask_cors import CORS

LAST_PARAM = 'last'

app = Flask(__name__)
CORS(app)


@app.route('/record', methods=['POST'])
def create_record():
    record = request.get_json()
    client.write_record(record)
    return '', 201


@app.route('/record')
def retrieve_records():
    last_only = request.args.get(LAST_PARAM)
    return jsonify(client.query_records(last_only=last_only))


app.run(host="0.0.0.0", debug=True)
