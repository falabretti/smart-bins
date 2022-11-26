for /l %%i in (1, 1, %1) do docker run -d --network %NETWORK% -e SENSOR_ID=%%i -e SENSOR_LOCATION=%LOCATION% -e SERVER_URL=http://server:5000 %IMAGE%
