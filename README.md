  

## Installation

  

```bash

$ pnpm install

```

  

## Running the project


```bash

$ pnpm install

```

#### Solution

Since limitation on transaction API is 5 requests per min on transaction API WE can make 7200 requests per day, and with limit of 1000, on average it will be 7,200,000 records per day.

- Make a table for translations

- Implementing a Cron job to run every 5 mins and and get data from transposition Api startDate: now - endDate 5 mins earlear - 10 second, with each running this process will be repeated and fetch my data.(Ofc some pagination is needed if total page was more than)


- Writing data to database including adding creating, updating, deleting to have updated transactions info all the time

- On each request from our users we will fetch data from data base and save it to Redis

like this ``redis.set(`transaction:${transaction.id}`, JSON.stringify(aggregationData), 'EX', 120)`` with expiring time of 60 second


#### Testing Strategy

- Create a test database with test environment
- Create mock data for external API
- I will start with writing test for easier and smaller services. including writing and reading from database
- Writing test for cron job
- Writing tests for controller including input validation, response and payload