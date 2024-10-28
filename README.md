# Labb 1 :Platform-as-a-Service (PaaS)

### Ursula Vallejo Janne/ Oktober 2024

### [Render WebAPP Trivia Ursula](https://trivia-fullstack.onrender.com/)

### [Render WebAPP API Trivia Ursula](https://trivia-fullstack.onrender.com/api)

## Content Delivery Networks:CDN (Content Delivery Network)-

### Vad är ett CDN?

Ett innehållsleveransnätverk (CDN, på engelska) är ett nätverk av geografiskt distribuerade servrar som hjälper till att snabbare överföra information på internet till användare. Istället för att alla måste gå till en enda server som kan vara långt borta, lagrar CDN
kopior av innehållet (som webbsidor, bilder och videor) på flera platser. Så när någon besöker en webbplats kan de få informationen från den närmaste servern, vilket minskar väntetiden.

### Fördelar med att använda ett CDN:

1. Snabbare webbplatsladdning: Eftersom informationen levereras från en närliggande server laddas sidorna snabbare. Detta innebär att besökare tillbringar mer tid på webbplatsen och är mindre benägna att lämna den på grund av långsamhet.

2. Minskade kostnader för bandbredd: Genom att minska mängden data som huvudservern behöver skicka hjälper CDNs webbplatsägare att spara pengar på hostingkostnader.

3. Ökad tillgänglighet: CDNs kan hantera mycket trafik och fortsätta fungera även om en av servrarna skulle gå ner. Det innebär att webbplatsen är mindre benägen att krascha.

4. Bättre säkerhet: CDNs kan skydda webbplatser mot vanliga attacker, som distribuerade överbelastningsattacker (DDoS), som försöker översvämma webbplatsen med trafik för att göra den otillgänglig.

### Nackdelar med ett CDN:

1. Ytterligare kostnad: Även om det kan spara pengar på lång sikt kan användningen av ett CDN kräva en initial investering, vilket kan vara ett hinder för mindre företag.

2. Konfiguration och hantering: Att implementera ett CDN kan kräva viss teknisk kunskap för att konfigurera det korrekt, vilket kan vara en utmaning för vissa.

Sammanfattningsvis är ett CDN ett värdefullt verktyg för att göra internetanvändning snabbare och säkrare. Även om det har några nackdelar överväger oftast fördelarna nackdelarna, särskilt för webbplatser som får mycket trafik.

Render används Cloudflare som CDN.

### [Cloudflare CDN](https://www.cloudflare.com/)

## Monitorering:

Verktyget jag använde var Pingdom, som gör det möjligt att övervaka trafiken till en specifik URL. Genom att analysera besökarnas beteende utifrån webbläsare, enhet och geografisk plats kan man förstå hur användare upplever webbplatsen. Pingdom skickar notifieringar till den som övervakar tjänsten vid misstänkt aktivitet, som flera samtidiga förfrågningar, vilket kan indikera försök till överbelastning eller hacking. Dessutom hjälper det till att samla statistik om användning, vilket gör det möjligt att identifiera de mest frekventa besökstiderna och optimera webbplatsens prestanda.

### [Pingdom](https://www.pingdom.com/)
