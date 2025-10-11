import {create} from 'zustand';

const initialLocaleState = {
  language: 'en',
};

export type LocaleStateType = {
  language: string;
  setLanguage: (language: string) => void;
};

export const useLocaleStore = create<LocaleStateType>((set, get) => ({
  ...initialLocaleState,
  setLanguage: (language: string) => {
    set({language});
  },
  fetchLanguage: async () => {
    try {
      const response = await fetch('https://api.example.com/language');
      const data = await response.json();
      set({language: data.language});
    } catch (error) {
      //TODO: Add logging
      //console.error('Error fetching language:', error);
    }
  },
}));
