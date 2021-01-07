# HTTP POST Request CSV Logger

appends log entries to csv files. CSV file names are configurable by request parameters. Any parameters can be logged to CSV

 
##example:
```
POST /api/logToCSV/:participantId/:mode/:version
body: {
    id: 'Sw4Dfks1',
    stimulus: 'spawn_intro.wav',
    'onset time': '22:45:11',
    'response time': '22:45:25',
    'onset time since experiment start': 2394735,
    'response time since experiment start': 6036334
}
```

### upsert CSV file with header
upserts a file at `./data/${participantId}_${mode}_${version}.csv`

creates CSV header line by sorting request body keys alphabetically:
```
id,onset time,onset time since experiment start,response time,response time since experiment start,stimulus
```

### append log entry
creates CSV entry line by sorting request body keys alphabetically and joining values into:

```
Sw4Dfks1,22:45:11,2394735,22:45:25,6036334,spawn_intro.wav
```

--------------

When request body attributes are added, renamed, or deleted `:version` should be changed to avoid mixing old CSV data-formats. 
