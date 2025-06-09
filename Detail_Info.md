# Labb 1: Platform-as-a-Service (PaaS)

### Ursula Vallejo Janne / October 2024

Deployment links (example):
The project was deployed and presented using these two links as examples:

### Render WebAPP Trivia Ursula: https://trivia-fullstack.onrender.com/

### Render WebAPP API Trivia Ursula: https://trivia-fullstack.onrender.com/api

These links were fully functional during the project presentation. However, since the deployment was done using a free Render account, the services are no longer active.

## Content Delivery Networks: CDN (Content Delivery Network)

### What is a CDN?

A Content Delivery Network (CDN) is a network of geographically distributed servers that help deliver internet content to users faster. Instead of having everyone access a single server that might be far away, a CDN stores copies of the content (such as web pages, images, and videos) in multiple locations. This way, when someone visits a website, the information is delivered from the nearest server, reducing latency.

### Benefits of using a CDN:

1. **Faster website loading:** Since the information is delivered from a nearby server, pages load faster. This leads to visitors spending more time on the website and being less likely to leave due to slow loading.

2. **Reduced bandwidth costs:** By reducing the amount of data that the main server needs to send, CDNs help website owners save on hosting costs.

3. **Increased availability:** CDNs can handle large amounts of traffic and continue to operate even if one of the servers goes down. This makes the website less likely to crash.

4. **Improved security:** CDNs can protect websites from common attacks, such as Distributed Denial-of-Service (DDoS) attacks, which try to flood the website with traffic to make it unavailable.

### Disadvantages of a CDN:

1. **Additional cost:** Although it can save money in the long run, using a CDN may require an initial investment, which can be a barrier for smaller businesses.

2. **Configuration and management:** Implementing a CDN may require some technical knowledge to set it up properly, which can be challenging for some users.

In summary, a CDN is a valuable tool for making the internet faster and more secure. Although it has some downsides, the benefits generally outweigh the disadvantages, especially for websites that receive a lot of traffic.

Render uses Cloudflare as a CDN.

### [Cloudflare CDN](https://www.cloudflare.com/)

## Monitoring:

The tool I used was **Pingdom**, which allows you to monitor traffic to a specific URL. By analyzing visitor behavior based on browser, device, and geographic location, you can better understand how users experience the website. Pingdom sends notifications to the service monitor in case of suspicious activity, such as multiple simultaneous requests, which may indicate attempts to overload or hack the site. Additionally, it helps gather usage statistics, allowing you to identify the most frequent visit times and optimize website performance.

### [Pingdom](https://www.pingdom.com/)

---

### What should include the project?

Skapa och publicera en enklare fullstack-applikation via en PaaS-lösning som Render.

Applikationen ska ha ett frontend, ett backend och en databas.
Applikationen ska fungera som en sammanhängande helhet. Frontend-delen ska kommunicera med backend-delen som i sin tur ska kommunicera med databasen.
Applikationens frontend ska kunna presentera (via GET och SELECT) uppgifter från databasen. Frontend-delen ska hämta JSON från backend-delen. Rendera uppgifterna i HTML-element (använd inte alert eller liknande).
Inkludera en README.md-fil som innehåller webbadressen till ditt publicerade projekt. README-filen ska även (kortfattat) beskriva vad Content Delivery Networks och monitorering är, vad dessa tjänster har för fördelar samt ge exempel på tjänster som kan användas för detta. Se kursens första två moduler och sök upp information på webben på egen hand.
För VG måste även följande krav uppfyllas:

Applikationens frontend ska kunna ändra (via POST/PUT/DELETE och INSERT/UPDATE/DELETE) uppgifter i databasen. Frontend-delen ska skicka JSON till backend-delen. Ändringen ska gå att se på webbsidan.
All kod ska vara enhetligt formaterad.
