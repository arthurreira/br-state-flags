# Brazilian State Flags

# Try it Live
[Open in CodeSandbox](https://codesandbox.io/s/github/arthurreira/br-state-flags)

React SVG components for all 27 Brazilian state flags with geographical data and multilingual support.

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

All 27 Brazilian state flags are available as components:

AC, AL, AP, AM, BA, CE, DF, ES, GO, MA, MT, MS, MG, PA, PB, PR, PE, PI, RJ, RN, RS, RO, RR, SC, SP, SE, TO

## Props

Each component accepts standard SVG props:

```tsx
<SP 
  width={200}
  height={150}
  style={{ border: '1px solid black' }}
  className="flag"
/>
```

## Internationalization

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

## Geographical Data

The package includes data for each state including population, area, coordinates, and timezone:

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
//   area: 248219.485,
//   timezone: 'America/Sao_Paulo',
//   utcOffset: -3,
//   iso: 'BR-SP'
// }

const localizedData = getStateData('SP', 'pt-BR');
```

### Create Interactive Maps

Combine flags with coordinates:

```tsx
import { SP, RJ, MG, statesData } from 'br-state-flags';

function BrazilMap() {
  const states = ['SP', 'RJ', 'MG'] as const;
  
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
const northeastStates = getStatesByRegion('Northeast');
```

## Use Cases

### For International Users

Useful for companies and developers working with Brazil:

- Import/Export Dashboards: Track suppliers by Brazilian state
- Market Analysis Tools: Visualize regional data
- Logistics Platforms: Display delivery coverage by region
- E-commerce: Show business locations with flags

### Example: Shipping Timezone Calculator

```tsx
import { statesData } from 'br-state-flags';

function getDeliveryTime(stateUF: string) {
  const state = statesData[stateUF];
  return {
    state: state.name,
    timezone: state.timezone,
    offset: state.utcOffset
  };
}
```

## API Reference

### Components
All 27 state flag components

### Data Functions
- `statesData` - Data object for all states
- `getStateData(uf, locale?)` - Get data for a specific state
- `getStatesByRegion(region)` - Get all states in a region
- `getAllStateUFs()` - Get array of all state codes

### i18n Functions
- `getStateName(uf, locale)` - Get state name in specified language
- `getRegionName(region, locale)` - Get region name in specified language
- `getAvailableLocales()` - Get list of supported locales

### TypeScript Types

```tsx
import type { 
  BRStateUF,
  BRStateData,
  BRStateCoordinates,
  BRRegion,
  Locale
} from 'br-state-flags';
```

## Features

- 27 Brazilian state flags as React components
- Geographical data for all states
- Multilingual support (English, Portuguese, Finnish)
- TypeScript support
- Tree-shakeable
- Optimized SVGs
- Works with React, Next.js, Vite
- SSR compatible
- No runtime dependencies

## Package Info

- Size: ~577 KB
- Format: ESM + CJS
- React: >=17

## License

MIT

## Links

- [GitHub Repository](https://github.com/arthurreira/br-state-flags)
- [npm Package](https://www.npmjs.com/package/br-state-flags)
