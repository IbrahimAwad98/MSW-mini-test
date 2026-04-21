import { http, HttpResponse } from "msw"; // verktyg för att definiera fejkade svar
import { setupServer } from "msw/node"; //fejk server
import { getTemperature } from "./weather.js"; // funktionen vi vill testa

// Skapa den fejkade servern
const server = setupServer();

beforeAll(() => server.listen());   // starta servern innan alla tester
afterEach(() => server.resetHandlers()); // nollställ regler efter varje test
afterAll(() => server.close());     // stäng servern när alla tester är klara

test("returnerar temperaturen för Stockholm", async () => {
    // Lägg till en regel: om någon anropar denna URL, svara med detta
  server.use(
    http.get("https://weather-api.com/temp", () => {
      return HttpResponse.json({ temperature: 22 });
    })
  );

  // Kör funktionen — den tror att den pratar med riktigt API
  const temp = await getTemperature("Stockholm");

// Kontrollera att vi fick rätt svar
  expect(temp).toBe(22);
});