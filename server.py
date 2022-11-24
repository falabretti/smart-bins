from flask import Flask, request, jsonify

app = Flask(__name__)

records = []


@app.route('/record')
def retrieve_records():
    return jsonify(records)


@app.route('/record', methods=['POST'])
def create_record():
    record = request.get_json()
    records.append(record)
    return jsonify(record), 201


app.run(debug=True)
