# reviews-SDC

My Trello Board For this Application:
  https://trello.com/b/YyDNqINY/review-sdc

1. npm install

2. npm run schema

3. npm run csv . This should not take longer than 10 minutes.

4. To Seed With PostgreSQL with at least 10 million Primary Entries :
    1. Terminal will output how many more it has left to generate
    2. When terminal outputs Successfully Generated CSV ! Time to Insert into Database, type: npm run psql-seed
    3. This script imports the csv file in no more than 10 minutes so sit tight.
    4. Will eventually ouput 'COPY' plus however many it inputed
    5. npm run psql
    6. Paste this into psql shell : CREATE INDEX idx_rev_Id ON reviews(rev_Id) (TO DO: FIgure out how to make script);
    7. This will index the database, it takes a few minutes. Its done when it says "CREATE INDEX"
    8. control + c to exist psql


5. The total amount inserted into the database varies as every product has a different amount of reviews. My most recent seed created 25,001,202 total pieces of data. Which is a total of 25 million different reviews for 10 million psuedo products.