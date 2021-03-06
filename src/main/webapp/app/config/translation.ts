import { TranslatorContext, Storage } from 'react-jhipster';

import { setLocale } from 'app/shared/reducers/locale';

TranslatorContext.setDefaultLocale('en');
TranslatorContext.setRenderInnerTextForMissingKeys(false);

export const languages: any = {
  bn: { name: 'বাংলা' },
  en: { name: 'English' },
  de: { name: 'Deutsch' },
  hi: { name: 'हिंदी' },
  mr: { name: 'मराठी' },
  ta: { name: 'தமிழ்' },
  te: { name: 'తెలుగు' },
  // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
};

export const locales = Object.keys(languages).sort();

export const registerLocale = store => {
  store.dispatch(setLocale(Storage.session.get('locale', 'en')));
};
