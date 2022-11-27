import argparse
import random
import requests
import time


def write_record(server_url, location, sensor_id, volume):
    record = {
        'location': location,
        'sensor_id': sensor_id,
        'volume': volume
    }

    print(f'Sending record: {record}')
    try:
        requests.post(server_url + '/record', json=record)
    except Exception as e:
        print('An error occurred when sending record to server:', e)


def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument('--id', dest='sensor_id', type=str, required=True)
    parser.add_argument('--location', dest='location', type=str, required=True)
    parser.add_argument('--server', dest='server_url', type=str, required=True)
    return parser.parse_args()


def simulate_sensor(args):
    while True:
        volume = random.random()
        write_record(args.server_url, args.location, args.sensor_id, volume)

        sleep_time = 30 + random.randint(0, 5)
        print(f'Sleeping for {sleep_time}s')
        time.sleep(sleep_time)


args = parse_args()
simulate_sensor(args)
