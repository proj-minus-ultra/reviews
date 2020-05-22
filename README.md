# reviews-SDC

My Trello Board For this Application:
  https://trello.com/b/YyDNqINY/review-sdc

To Seed Database with at least 10 million Primary Entries:
  1. npm run seed
  2. Terminal should say 'Generating CSV...'
  4. Wait, should not take longer than a few minutes. It will output what number its on
  5. Will Eventually connect to mongodb and start inserting data with a progress bar
  6. Once it says 'imported successfully' , type 'npm run count' to veryify amount of documents in db.