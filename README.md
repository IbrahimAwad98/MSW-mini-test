# MSW Mini Test

Ett enkelt JavaScript-projekt som demonstrerar hur man kan använda [MSW (Mock Service Worker)](https://mswjs.io/) för att testa API-anrop i Node.js-miljö.

## Funktionalitet
Projektet innehåller en funktion `getTemperature(city)` som hämtar aktuell temperatur för en stad genom ett HTTP-anrop (fejkat i testmiljö). Testning sker med [Vitest](https://vitest.dev/) och MSW som mockar (fejkar) svaret från API:t.

## Filstruktur
- `src/weather.js`: Exporterar funktionen `getTemperature(city)`
- `src/weather.test.js`: Innehåller tester för att säkerställa att rätt temperatur returneras, med MSW som mockar API-responsen
- `package.json`: Konfiguration och beroenden (msw, vitest)
- `vitest.config.js`: Konfiguration för testmiljön

## Komma igång
1. Installera beroenden:
   ```sh
   npm install
   ```
2. Kör tester:
   ```sh
   npm test
   ```

## Om projektet
Syftet är att visa hur MSW används för att testa kod som hämtar data från externa API:er utan att behöva anropa riktiga tjänster.
