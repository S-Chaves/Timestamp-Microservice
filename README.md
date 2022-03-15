
# Timestamp-Microservice

This is a simple web page where you can go to a date route and it returns a JSON object with the unix timestamp of the date and other information about it.

## Example Use

- /api/December 17, 1995 03:24:00 | Month dd, yyyy hh:mm:ss
- /api/1995-12-17 | yyyy-mm-dd
- /api/819181440000 | Unix timestamp
- /api/1995,12,17 | yyyy,mm,dd

## Example Output
`{"unix":819181440000,"utc":"Sun, 17 Dec 1995 06:24:00 GMT"}`
