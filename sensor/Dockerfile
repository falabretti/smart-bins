FROM python:3.10.8-alpine

COPY . .

ENV PYTHONUNBUFFERED=1

RUN python -m pip install -r requirements.txt

CMD python sensor.py --id $SENSOR_ID --location $SENSOR_LOCATION --server $SERVER_URL
