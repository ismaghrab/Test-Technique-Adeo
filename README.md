# Adeo Test Technique - Ismail Ghrab

This command-line interface (CLI) tool is developed in Node.js to filter and count data from a provided dataset. It offers functionalities to filter elements containing a specific pattern and to count the number of people and animals in the dataset.


## Installation


```bash
  npm install 
```

## Filter
To filter the data based on a specific pattern, use the --filter option followed by the desired pattern.
```bash
  node app.js --filter=<pattern>
```
exemple : 
```bash
  node app.js --filter=ry
``` 
## Count
To count the number of people and animals and append the counts to their names, use the --count option.

```bash
  node app.js --count
```

## Testing

### Unit test
To run unit test : 

```bash
  npm test unit
``` 

### End-to-End test

To run end-to-end test : 

```bash
  npm test e2e
``` 

### All test 

To run all tests (unit and end-to-end)

```bash
  npm test
``` 


