# reviews-SDC

My Trello Board For this Application:
  https://trello.com/b/YyDNqINY/review-sdc

1. npm install

2. To Seed mongodb with at least 10 million Primary Entries :
    1. npm run csv
    2. Terminal should say 'Generating CSV...'.
    4. Wait, should not take longer than a few minutes. It will output how much is left.
    5. npm run mongo-seed
    6. Will eventually say 'connected to: mongodb://localhost/'
    6. Once it says 'imported successfully' , type 'npm run count' to veryify amount of documents in db.

3. To Seed With postgres:
  1. npm run schema
  2. npm run csv. It will output how many more it has to generate.
  3. When its done paste this into the terminal (temporary until i figure out a way to make this a npm script):
    psql -d sdc -U AlexB -c "COPY reviews(rev_id,rating,title,review,recommendation,nickname,email,age,bodyType,locat,wearTo,likes,dislikes) FROM '/Users/AlexB/Desktop/reviews_component/sdc.csv' delimiter ',' csv header ;"
  4. This will take a few minutes but will eventually ouput 'COPY' plus however many it inputed