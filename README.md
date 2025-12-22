# 🇧🇷 Brazilian State Flags

Brazilian state flags as React SVG components with geographical data. Optimized, tree-shakeable, TypeScript ready, and internationally accessible.

[![npm version](https://img.shields.io/npm/v/br-state-flags.svg)](https://www.npmjs.com/package/br-state-flags)
[![License](https://img.shields.io/npm/l/br-state-flags.svg)](https://github.com/arthurreira/br-state-flags/blob/main/LICENSE)

## Installation

```bash
npm install br-state-flags
```

## Usage

### React / Vite

```tsx
import { SP, RJ, MG } from 'br-state-flags';

function App() {
  return (
    <div>
      <SP width={100} />
      <RJ width={100} />
      <MG width={100} />
    </div>
  );
}
```

### Next.js

Works with both App Router and Pages Router:

```tsx
import { SP, RJ } from 'br-state-flags';

export default function Page() {
  return (
    <div>
      <SP width={100} />
      <RJ width={100} />
    </div>
  );
}
```

## Available Components

All 27 Brazilian state flags are available:

`AC`, `AL`, `AP`, `AM`, `BA`, `CE`, `DF`, `ES`, `GO`, `MA`, `MT`, `MS`, `MG`, `PA`, `PB`, `PR`, `PE`, `PI`, `RJ`, `RN`, `RS`, `RO`, `RR`, `SC`, `SP`, `SE`, `TO`

## Props

Each component accepts all standard SVG props:

```tsx
<SP 
  width={200}
  height={150}
  style={{ border: '1px solid black' }}
  className="flag"
/>
```

## 🌐 Internationalization

The package supports English, Portuguese (Brazil), and Finnish translations:

```tsx
import { getStateName, getRegionName } from 'br-state-flags';

// English (default)
getStateName('SP'); // "São Paulo"
getStateName('DF'); // "Federal District"
getRegionName('Southeast'); // "Southeast"

// Portuguese
getStateName('SP', 'pt-BR'); // "São Paulo"
getStateName('DF', 'pt-BR'); // "Distrito Federal"
getRegionName('Southeast', 'pt-BR'); // "Sudeste"

// Finnish
getStateName('DF', 'fi'); // "Liittovaltioalue"
getRegionName('South', 'fi'); // "Etelä"
```

## 📊 Geographical Data

The package includes comprehensive data for each state:

```tsx
import { statesData, getStateData } from 'br-state-flags';

const spData = statesData.SP;
console.log(spData);
// {
//   uf: 'SP',
//   name: 'São Paulo',
//   capital: 'São Paulo',
//   region: 'Southeast',
//   coordinates: { latitude: -23.5505, longitude: -46.6333 },
//   population: 46649132,
//   area: 248219.485, // km²
//   timezone: 'America/Sao_Paulo',
//   utcOffset: -3,
//   iso: 'BR-SP'
// }

// Get localized data
const localizedData = getStateData('SP', 'pt-BR');
```

### Interactive Map Example

```tsx
import { SP, RJ, MG, statesData } from 'br-state-flags';

const states = ['SP', 'RJ', 'MG'] as const;

function BrazilMap() {
  return (
    <div style={{ position: 'relative', width: '800px', height: '600px' }}>
      {states.map(uf => {
        const FlagComponent = { SP, RJ, MG }[uf];
        const data = statesData[uf];
        
        return (
          <div
            key={uf}
            style={{
              position: 'absolute',
              left: `${(data.coordinates.longitude + 75) * 10}px`,
              top: `${(-data.coordinates.latitude + 5) * 10}px`,
            }}
            title={`${data.name} - ${data.capital}`}
          >
            <FlagComponent width={40} />
          </div>
        );
      })}
    </div>
  );
}
```

### Filter by Region

```tsx
import { getStatesByRegion } from 'br-state-flags';

const southStates = getStatesByRegion('South');
// Returns: [RS, SC, PR] with full data

const northeastStates = getStatesByRegion('Northeast');
// Returns: [MA, PI, CE, RN, PB, PE, AL, SE, BA]
```

## 🌍 International Use Cases

### For Nordic/European Users

Perfect for companies and developers working with Brazil:

**Business Applications:**
- 🏢 **Import/Export Dashboards** - Track shipments and suppliers by Brazilian state
- 📊 **Market Analysis Tools** - Visualize regional economic data
- 🚚 **Logistics Platforms** - Display delivery routes and regional coverage
- 💼 **B2B Platforms** - Show business locations with flags

**Example: Finnish Company Dashboard**

```tsx
import { SP, RJ, statesData, getStateName } from 'br-state-flags';

function SupplierDashboard() {
  const suppliers = [
    { state: 'SP', name: 'Manufacturer A', products: 145 },
    { state: 'RJ', name: 'Supplier B', products: 89 }
  ];

  return (
    <div>
      {suppliers.map(supplier => {
        const FlagComponent = { SP, RJ }[supplier.state];
        const stateData = statesData[supplier.state];
        
        return (
          <div key={supplier.state}>
            <FlagComponent width={32} />
            <div>
              <h3>{supplier.name}</h3>
              <p>{getStateName(supplier.state, 'fi')}</p>
              <p>Timezone: {stateData.timezone} (UTC {stateData.utcOffset})</p>
              <p>{supplier.products} tuotetta</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
```

**E-commerce Integration:**

```tsx
import { statesData } from 'br-state-flags';

// Calculate shipping estimates based on state timezone
function getDeliveryTime(stateUF: string) {
  const state = statesData[stateUF];
  const helsinkiOffset = 2; // UTC+2
  const timeDifference = helsinkiOffset - state.utcOffset;
  
  return {
    state: state.name,
    timezone: state.timezone,
    timeDifference: `${timeDifference} hours ahead of Helsinki`,
    bestCallTime: calculateBestCallTime(timeDifference)
  };
}
```

## 📚 API Reference

### Components
- All 27 state flag components (AC, AL, AP, etc.)

### Data Functions
- `statesData` - Complete data object for all states
- `getStateData(uf, locale?)` - Get data for a specific state
- `getStatesByRegion(region)` - Get all states in a region
- `getAllStateUFs()` - Get array of all state codes

### i18n Functions
- `getStateName(uf, locale)` - Get state name in specified language
- `getRegionName(region, locale)` - Get region name in specified language
- `getAvailableLocales()` - Get list of supported locales
- `stateNames` - Translation object for all state names
- `regionNames` - Translation object for all region names

### TypeScript Types

```tsx
import type { 
  BRStateUF,        // 'SP' | 'RJ' | 'MG' | ...
  BRStateData,      // Complete state data interface
  BRStateCoordinates, // Latitude/longitude interface
  BRRegion,         // 'North' | 'Northeast' | ...
  Locale            // 'en' | 'pt-BR' | 'fi'
} from 'br-state-flags';
```

## ✨ Features

- ✅ All 27 Brazilian state flags as React components
- ✅ Comprehensive geographical data (coordinates, population, area, timezone)
- ✅ Multilingual support (English, Portuguese, Finnish)
- ✅ TypeScript support with full type definitions
- ✅ Tree-shakeable (only imports what you use)
- ✅ Optimized SVGs
- ✅ Works with React, Next.js, Vite, and other modern bundlers
- ✅ SSR compatible
- ✅ No dependencies (React as peer dependency)

## 📦 Package Info

- **Size:** ~577 KB (minified)
- **Format:** ESM + CJS
- **React:** >=17

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit PRs on [GitHub](https://github.com/arthurreira/br-state-flags).

## 📄 License

MIT © arthurreira

## 🔗 Links

- [GitHub Repository](https://github.com/arthurreira/br-state-flags)
- [npm Package](https://www.npmjs.com/package/br-state-flags)
- [Report Issues](https://github.com/arthurreira/br-state-flags/issues)
