# REST-webbtjänst för att lagra spel - Laboration 2.2
Dessa filer ligger som grund för att skapa ett API med CRUD-funktionalitet i syfte att lagra spel. För att genomföra detta har Hapi.js använts som backend-ramverk, och MongoDB har använts som databas.

## Installation
Paket som installerats som NPM:
- mongoose
- dotenv
- hapi
  
Skapa en lokal databas i MongoDB Compass som servern ska kopplas till, denna kan läggas i en .env-fil. Med hjälp av filerna skapas en samling data vid namn "games". Tabellen nedan visar upplägget på data:

| _id | name | year(valfri) | played |
| --- | ---- | ------------ | ------ |
| 6b06e5311f1ee51006da2089 | The Witcher 3: Wild Hunt | 2015 | true |

## Användning
Nedan visas olika ändpunkter i API:et och hur man kan nå dessa:

| Metod | Ändpunkt | Beskrivning |
| ----- | -------- | ----------- |
| GET | /games | Hämtar alla lagrade spel |
| GET | /games/{id} | Hämtar spelet med angivet id |
| POST | /games | Lagrar ett nytt spel |
| PUT | /games/{id} | Uppdaterar ett befintligt spel baserat på id |
| DELETE | /games/{id} | Raderar ett spel baserat på id |

Objekten skickas och returneras i JSON-format med nedan struktur:
```
{
 "_id": "6b06e5311f1ee51006da2089",
 "name": "The Witcher 3: Wild Hunt",
 "year": 2015,
 "played": true
}
```

## Länk till videodemonstration
https://youtu.be/rwVZLEeI4F8
