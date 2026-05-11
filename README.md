# MSW Mini Test

Ett enkelt JavaScript-projekt som visar hur du använder [MSW (Mock Service Worker)](https://mswjs.io/) för att testa API-förfrågningar i en Node.js-miljö.

## Funktionalitet

Projektet innehåller en funktion `getTemperature(city)` som hämtar aktuell temperatur för en stad via en HTTP-förfrågan (mockad i testmiljön). Testning görs med hjälp av [Vitest](https://vitest.dev/).

## Filstruktur

- `src/weather.js`: Exporterar funktionen `getTemperature(city)`
- `src/weather.test.js`: Innehåller tester för att säkerställa rätt temperatur, där MSW mockar API-responsen
- `package.json`: Konfiguration och beroenden (msw, vitest)
- `vitest.config.js`: Konfigurerar testmiljön

## Kom igång

1. Installera beroenden:
   ```sh
   npm install
   ```
2. Kör tester:
   ```sh
   npm test
   ```

## Om projektet

Detta repository innehåller ett minimalt testprojekt som använder MSW (Mock Service Worker) med JavaScript. Det visar hur du sätter upp och använder MSW för att mocka API-förfrågningar i en utvecklings- eller testmiljö.
