This is a Czech region in 4 km resolution

# Building
Make sure to download geog.tar.gz into current directory from here: https://www.dropbox.com/s/x6wcsm7c26vt67a/geog.tar.gz?dl=0
Then run:

```
docker build -t my-rasp-czech-4k .
```

# Running
## Run the current day (or next if it's end of the day)

```
$ docker run -v /tmp/OUT:/root/rasp/CZECH/OUT/ -v /tmp/LOG:/root/rasp/CZECH/LOG/  --rm my-rasp-czech-4k
```

## Run the current day +1, +2, etc

START_HOUR environment variable can override default start hour which is '0'. See ![rasp.run.parameters.CZECH](CZECH/rasp.run.parameters.CZECH)

* START_HOUR=24 for current day +1
* START_HOUR=48 for current day +2, etc

```
docker run -v /tmp/OUT:/root/rasp/CZECH/OUT/ -v /tmp/LOG:/root/rasp/CZECH/LOG/ --rm -e START_HOUR=33 my-rasp-czech-4k
```
