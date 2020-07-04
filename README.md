# reviews-SDC

<h1>My Trello Board For this Application:</h1> <br />
  https://trello.com/b/YyDNqINY/review-sdc <br />

<h1>My Journal For this:</h1>
  https://docs.google.com/document/d/1Kd_1wOL9ta_JExj_6RepGAGFlwKFvAzxEGeZm9H_24E/edit?usp=sharing <br />

<h2>In this project I horizonatally scaled the backend of someone else's code base. </h2>
<p> Before I scaled, the website could handle a 300 average RPS, 200ms average latency, and a 10% error rate. After I scaled I increased it to  a 8500 RPS, 0% error rate, and a 137ms average latency. I achieved this through a NGINX round robin load balancer, NGINIX caching, 3 AWS EC2 proxy servers, Docker, and some server side rendering. It could handle 10,000+ RPS but the latency would increase to 1 to 1.5 seconds and my goal was to keep the average latency under 200ms. I also indexed the SQL database to keep queries under 10ms. The google speed insight before the scaling was a 33/100. After the horizontal scaling the website received a 99/100. </p>

  Total Servers:<br />
    1 Nginx <br />
    3 proxies <br />


<h2> Final Google Speed Test:</h2> <br />

  ![alt text](./finalGoogleSpeedInsight.jpeg)

<br />
<br />
<br />


<h2>Final Stress Test:</h2> <br />
  Low: 8100 RPS <br />
  High: 9400 RPS <br />
  Average Latency 137 ms <br />
  
  ![Final Stress Test](./stressTest.png)
