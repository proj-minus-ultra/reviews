# reviews-SDC

My Trello Board For this Application:
  https://trello.com/b/YyDNqINY/review-sdc

1. npm install

2. npm run csv . This should not take longer than 10 minutes.

3. To Seed mongodb with at least 10 million Primary Entries :
    1. Wait..
    2. Terminal should say 'Generating CSV...'.
    4. Wait, should not take longer than a few minutes. It will output how much is left.
    5. npm run mongo-seed
    6. Will eventually say 'connected to: mongodb://localhost/'
    6. Once it says 'imported successfully' , type 'npm run count' to veryify amount of documents in db.
    7. npm run mongo-index . Takes a few minutes


4. To Seed With PostgreSQL with at least 10 million Primary Entries :
    1. Wait..
    2. Terminal should say 'Generating CSV...'.
    3. When terminal outputs Successfully Generated CSV ! Time to Insert into Database, type: npm run psql-seed
    4. This script imports the csv file in no more than 10 minutes so sit tight.
    5. Will eventually ouput 'COPY' plus however many it inputed
    6. npm run psql
    7. Paste this into psql interface : CREATE INDEX idx_rev_Id ON reviews(rev_Id) (TO DO: FIgure out how to make script);
    8. This will index the database, it takes a few minutes. Its done when it says "CREATE INDEX"
    9. control + c to exist psql

5. The total amount inserted into the database varies as every product has a different amount of reviews. My most recent seed created 25,001,202 total pieces of data. Which is a total of 25 million different reviews for 10 million psuedo products.