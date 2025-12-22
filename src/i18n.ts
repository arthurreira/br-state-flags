import type { BRStateUF, BRRegion, Locale } from './types';

export const stateNames: Record<Locale, Record<BRStateUF, string>> = {
  'en': {
    AC: 'Acre',
    AL: 'Alagoas',
    AP: 'Amapá',
    AM: 'Amazonas',
    BA: 'Bahia',
    CE: 'Ceará',
    DF: 'Federal District',
    ES: 'Espírito Santo',
    GO: 'Goiás',
    MA: 'Maranhão',
    MT: 'Mato Grosso',
    MS: 'Mato Grosso do Sul',
    MG: 'Minas Gerais',
    PA: 'Pará',
    PB: 'Paraíba',
    PR: 'Paraná',
    PE: 'Pernambuco',
    PI: 'Piauí',
    RJ: 'Rio de Janeiro',
    RN: 'Rio Grande do Norte',
    RS: 'Rio Grande do Sul',
    RO: 'Rondônia',
    RR: 'Roraima',
    SC: 'Santa Catarina',
    SP: 'São Paulo',
    SE: 'Sergipe',
    TO: 'Tocantins'
  },
  'pt-BR': {
    AC: 'Acre',
    AL: 'Alagoas',
    AP: 'Amapá',
    AM: 'Amazonas',
    BA: 'Bahia',
    CE: 'Ceará',
    DF: 'Distrito Federal',
    ES: 'Espírito Santo',
    GO: 'Goiás',
    MA: 'Maranhão',
    MT: 'Mato Grosso',
    MS: 'Mato Grosso do Sul',
    MG: 'Minas Gerais',
    PA: 'Pará',
    PB: 'Paraíba',
    PR: 'Paraná',
    PE: 'Pernambuco',
    PI: 'Piauí',
    RJ: 'Rio de Janeiro',
    RN: 'Rio Grande do Norte',
    RS: 'Rio Grande do Sul',
    RO: 'Rondônia',
    RR: 'Roraima',
    SC: 'Santa Catarina',
    SP: 'São Paulo',
    SE: 'Sergipe',
    TO: 'Tocantins'
  },
  'fi': {
    AC: 'Acre',
    AL: 'Alagoas',
    AP: 'Amapá',
    AM: 'Amazonas',
    BA: 'Bahia',
    CE: 'Ceará',
    DF: 'Liittovaltioalue',
    ES: 'Espírito Santo',
    GO: 'Goiás',
    MA: 'Maranhão',
    MT: 'Mato Grosso',
    MS: 'Etelä-Mato Grosso',
    MG: 'Minas Gerais',
    PA: 'Pará',
    PB: 'Paraíba',
    PR: 'Paraná',
    PE: 'Pernambuco',
    PI: 'Piauí',
    RJ: 'Rio de Janeiro',
    RN: 'Pohjois-Rio Grande',
    RS: 'Etelä-Rio Grande',
    RO: 'Rondônia',
    RR: 'Roraima',
    SC: 'Santa Catarina',
    SP: 'São Paulo',
    SE: 'Sergipe',
    TO: 'Tocantins'
  }
};

export const regionNames: Record<Locale, Record<BRRegion, string>> = {
  'en': {
    'North': 'North',
    'Northeast': 'Northeast',
    'Central-West': 'Central-West',
    'Southeast': 'Southeast',
    'South': 'South'
  },
  'pt-BR': {
    'North': 'Norte',
    'Northeast': 'Nordeste',
    'Central-West': 'Centro-Oeste',
    'Southeast': 'Sudeste',
    'South': 'Sul'
  },
  'fi': {
    'North': 'Pohjoinen',
    'Northeast': 'Koillinen',
    'Central-West': 'Keski-Länsi',
    'Southeast': 'Kaakkois',
    'South': 'Etelä'
  }
};

/**
 * Get state name in the specified locale
 */
export function getStateName(uf: BRStateUF, locale: Locale = 'en'): string {
  return stateNames[locale][uf];
}

/**
 * Get region name in the specified locale
 */
export function getRegionName(region: BRRegion, locale: Locale = 'en'): string {
  return regionNames[locale][region];
}

/**
 * Get all available locales
 */
export function getAvailableLocales(): Locale[] {
  return ['en', 'pt-BR', 'fi'];
}
