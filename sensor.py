import requests

server_url = 'http://localhost:5000'


def write_record(location, sensor_id, volume):
    response = requests.post(server_url + '/record', json={
        'location': location,
        'sensor_id': sensor_id,
        'volume': volume
    })

    print(response.status_code, response.json())


def read_records():
    response = requests.get(server_url + '/record')
    print(response.json())


write_record('City', '50', 0.3)
write_record('City', '56', 0.7)
write_record('City', '14', 0.1)
write_record('City', '76', 0.3)
read_records()
