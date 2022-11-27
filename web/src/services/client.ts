import axios, { AxiosResponse } from "axios"

export const SERVER_URL = "http://localhost:5000"

export type SensorRecord = {
    sensor_id: string,
    location: string,
    volume: number,
    timestamp: string
}

export async function getLatestRecords(): Promise<AxiosResponse<SensorRecord[]>> {
    return await axios.get(SERVER_URL + "/record?last=true");
}

export async function getSensorRecords(sensorId: string): Promise<AxiosResponse<SensorRecord[]>> {
    return await axios.get(SERVER_URL + "/record?id=" + sensorId);
}
