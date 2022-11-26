import axios, { AxiosResponse } from 'axios'

const HOST = 'http://localhost:5000'

export type SensorRecord = {
    sensor_id: string,
    location: string,
    volume: number,
    timestamp: string
}

export async function getLatestRecords(): Promise<AxiosResponse<SensorRecord[]>> {
    return await axios.get(HOST + '/record?last=true');
}

export async function getSensorRecords(sensorId: string): Promise<AxiosResponse<SensorRecord[]>> {
    return await axios.get(HOST + '/record?id=' + sensorId);
}
