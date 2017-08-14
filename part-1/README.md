## Part 1: Simple web app

Build a very basic web API which conforms to the routes listed below.

Use Express. You don't need to use an HTML templater like EJS or Pug. (You can use `curl` or `Postman` to check whether the routes work)

The web server should provide the following routes:

```
GET /api/shout/:word
POST /api/array/merge
```

#### Route 1: GET /api/shout/:word
Shout the word back! Return the value of the URL parameter `:word` converted to ALL CAPS and with three exclamation points added to the end.

Example requests:
```
request: GET /api/shout/popcorn
response: POPCORN!!!
status: 200

request: GET /api/shout/friday
response: FRIDAY!!!
status: 200
```
