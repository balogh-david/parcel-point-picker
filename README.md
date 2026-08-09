# Csomagautomata-választó

Térképes csomagautomata- és átvételipont-választó React komponens. A felhasználó
városra vagy címre kereshet, a térképen böngészhet a pontok között, és kiválaszthatja
a neki megfelelőt.

## Telepítés

```bash
npm install
```

## Környezeti változók

Másold le a `.env.example` fájlt `.env.local` néven, és töltsd ki:

```env
VITE_PICKUP_NOMINATIM_URL=https://nominatim.openstreetmap.org/search
VITE_PICKUP_API_ENDPOINT=<api-edpoint>
VITE_PICKUP_SESSION_ID=<session-id>
```

## Futtatás

```bash
npm run dev      
```

## Build

```bash
npm run build    
npm run preview  
```

## Használt technológiák

- **React 19 + TypeScript**
- **Leaflet + react-leaflet**: A térképes funkcionalitás megvalósítására használtam. Korábban már dolgoztam a
  Leaflet-tel, így rendelkeztem a használatához szükséges tapasztalattal.
- **react-leaflet-cluster**: A térképen található, egymáshoz közeli markerek csoportosítására használom a teljesítmény
  javítása és az áttekinthetőbb megjelenítés érdekében.
- **leaflet.markercluster**: A marker clustering mögött álló Leaflet plugin, amely a közeli markerek csoportosításának
  logikáját biztosítja. A react-leaflet-cluster erre épül, ezért annak működéséhez szükséges dependency. Emellett a
  markerek megjelenítéséhez szükséges stílusokat is biztosítja.
- **Zustand**: A kliensoldali state kezelésére használtam. Egyszerű API-val és alacsony boilerplate-mennyiséggel
  rendelkezik, miközben az alkalmazás állapotának jól átlátható és könnyen karbantartható kezelését teszi lehetővé. A
  projektben azért is esett rá a választásom, mert korábban már használtam, így gyorsan és magabiztosan tudtam vele
  dolgozni.
- **shadcn/ui**: Az alkalmazás UI komponenseinek kialakítására használtam. Jó minőségű, újrahasznosítható komponenseket
  biztosít.
- **Tailwind CSS**: A komponensek formázására használtam. Lehetővé teszi, hogy a stílusokat közvetlenül a
  komponensekben, utility classok segítségével definiáljam, így a projektben kevesebb külön CSS fájlra és egyedi
  stílusra van szükség.
- **Nominatim (OpenStreetMap)**: A név- és cím alapú helykeresés megvalósítására használtam. Az API által visszaadott
  koordináták segítségével egyszerűen megvalósítható, hogy a térkép a keresett helyre fókuszáljon.
- **use-debounce**: A keresőmező és a térképesemények esetén szükséges debounce megvalósítására használtam. Mivel egy
  könnyű, bevált megoldást biztosít, nem volt szükség saját debounce implementáció készítésére és karbantartására.
- **graphql-request**: A GraphQL API-val való kommunikációra használtam. Mivel az alkalmazásnak csak egy egyszerű
  GraphQL lekérdezésre van szüksége, egy teljes értékű GraphQL kliens, például az Apollo Client, a projekt igényeihez
  képest indokolatlan komplexitást jelentett volna.
- **@tanstack/react-query**: A szerver state kezelésére használtam. Segítségével egyszerűen kezelhetők az API-ból érkező
  adatok, miközben beépített cache-elést, request deduplikációt, retry mechanizmust biztosít. Ez csökkenti az adatok
  kezeléséhez szükséges egyedi kód mennyiségét, és átláthatóbbá teszi az adatlekérési
  logikát.
- **p-limit**: A párhuzamosan futó API-kérések számának korlátozására használom. Kontrollálható vele a párhuzamos
  requestek
  száma, és elkerülhető a túl sok egyidejű kérés indítása.