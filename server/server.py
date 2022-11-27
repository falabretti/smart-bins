import client
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_socketio import SocketIO, emit

SENSOR_ID_PARAM = 'id'
LAST_PARAM = 'last'

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app,  cors_allowed_origins="*", logger=True, engineio_logger=True)


@app.route('/record', methods=['POST'])
def create_record():
    record = request.get_json()
    client.write_record(record)
    socketio.send(record)
    return '', 201


@app.route('/record')
def retrieve_records():
    sensor_id = request.args.get(SENSOR_ID_PARAM)
    last_only = request.args.get(LAST_PARAM)
    return jsonify(client.query_records(sensor_id=sensor_id, last_only=last_only))


socketio.run(app, debug=True, host='0.0.0.0', allow_unsafe_werkzeug=True)
