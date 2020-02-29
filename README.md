# Projekt
## Environment & Tools / Utvecklingsmiljö & Verktyg
Windows 10, CLion, CMake and git version 2.24.0.windows.2

## Purpose / Syfte
Knyta ihop saker man lärt sig i tidigare laborationer och bygga på kunskapen med nytt.

## Procedures / Genomförande
Började med att skapa en textruta där jag la in texten genom select, sedan att man kunde välja mellan
olika texter. Skapade sedan inputboxen där man skulle skriva. Allt flöt på bra tills jag 
skulle skapa eventlistnern för när man skrev, tog mig timmar att hitta att jag hade skrivit
document.querySelectorAll istället för document.querySelector och sedan fungerade det. 
Allt flöt på bra och stötte inte på några större problem efter detta. 
Började med att använda Date för att räkna på tiden, men hittade senare setInterval och plussade på
varje sekund som gick istället och fick ihop det med paus och start på det sättet. 
När jag skulle markera bokstaven som skulle skrivas blev det lite klurigt också för jag förstod
inte exakt hur substring fungerade utan fick testa mig fram tills det blev rätt bokstav som
highlightades. Testade hela tiden med debugger om jag fick något fel och åtgärdade problem som uppstod.

## Discussion / Diskussion
Fastnade väldigt mycket i början man när jag kom förbi det första stora guppet gick det rätt bra. 
Det flöt på relativt snabbt och smidigt och är faktiskt väldigt nöjd med spelet/sidan.
Hade kunnat lägga in alla variabler (let) i sessionstorage, men eftersom att det bara finns
en sida så kändes detta smidigare då det blir mindre kod än att sitta och hämta ut saker och lägga
in dem i sessionstorage hela tiden. Hade det funnits möjlighet att hoppa mellan olika sidor hade 
jag såklart lagt in dem i sessionstorage så spelet inte försvann när man bytade sida. 