import environment
import influxdb_client
from influxdb_client.client.write_api import SYNCHRONOUS

MEASUREMENT = "bin_sensor"
LOCATION_TAG = "location"
SENSOR_ID_TAG = "sensor_id"
FIELD = "capacity"

client = influxdb_client.InfluxDBClient(
    url=environment.URL,
    token=environment.TOKEN,
    org=environment.ORG
)


def write_record(record):
    write_api = client.write_api(write_options=SYNCHRONOUS)

    point = influxdb_client.Point(MEASUREMENT)
    point = point.tag(LOCATION_TAG, record[LOCATION_TAG])
    point = point.tag(SENSOR_ID_TAG, record[SENSOR_ID_TAG])
    point = point.field(FIELD, record[FIELD])

    write_api.write(bucket=environment.BUCKET,
                    org=environment.ORG, record=point)


def query_records(location=None, sensor_id=None, last_only=False, limit=None):
    query_api = client.query_api()
    query = build_query(location, sensor_id, last_only, limit)

    result = query_api.query(org=environment.ORG, query=query)
    return build_results(result)


def build_query(location=None, sensor_id=None, last_only=None, limit=None):

    query = f'from(bucket:"{environment.BUCKET}")\
    |> range(start: -1d)\
    |> filter(fn:(r) => r._measurement == "{MEASUREMENT}")'

    if location is not None:
        query += f'|> filter(fn:(r) => r.{LOCATION_TAG} == "{location}")'

    if sensor_id is not None:
        query += f'|> filter(fn:(r) => r.{SENSOR_ID_TAG} == "{sensor_id}")'

    query += f'|> filter(fn:(r) => r._field == "{FIELD}")'

    if limit is not None:
        query += f'|> limit(n: {limit}, offset: 0)'

    if last_only:
        query += '|> last()'

    return query


def build_results(result):
    results = []
    for table in result:
        for record in table.records:
            results.append({
                'location': record.values.get(LOCATION_TAG),
                'sensor_id': record.values.get(SENSOR_ID_TAG),
                record.get_field(): record.get_value(),
                'timestamp': record.get_time()
            })

    return results
