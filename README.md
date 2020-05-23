# reviews-SDC

My Trello Board For this Application:
  https://trello.com/b/YyDNqINY/review-sdc

1. npm install

2. npm run csv generates the same csv file and uses the same review generator function so only run it once to save time/hard drive space.

3. To Seed mongodb with at least 10 million Primary Entries :
    1. npm run csv
    2. Terminal should say 'Generating CSV...'.
    4. Wait, should not take longer than a few minutes. It will output how much is left.
    5. npm run mongo-seed
    6. Will eventually say 'connected to: mongodb://localhost/'
    6. Once it says 'imported successfully' , type 'npm run count' to veryify amount of documents in db.

4. To Seed With postgres with at least 10 million Primary Entries :
    1. npm run csv
    2. Terminal should say 'Generating CSV...'.
    3. Wait, should not take longer than a few minutes. It will output how much is left.
    4. When its done paste this into the terminal (temporary until i figure out a way to make this a npm script):
    psql -d sdc -U AlexB -c "\COPY reviews(rev_id,rating,title,review,recommendation,nickname,email,age,bodyType,locat,wearTo,likes,dislikes) FROM 'sdc.csv' delimiter ',' csv header ;"
    5. This script imports the csv file in about 3 minutes so sit tight.
    6. This will take a few minutes but will eventually ouput 'COPY' plus however many it inputed
    7. npm run psql
    8. Paste this into psql interface : CREATE INDEX idx_rev_Id ON reviews(rev_Id);
    9. This will index the database, it takes a few minutes. Its done when it says "CREATE INDEX"
    10. control + c to exist psql

5. The total amount inserted into the database varies as every product has a different amount of reviews. Like i just ran it and it created 25,001,202 total pieces of data.