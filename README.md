# Country Scout24 App

---

![Demo video](./src/assets/demo/counrtyscout.gif 'demo')

## Project Structure


- **src/components/** – Organized using Atomic Design:
  - **atoms/** – Basic UI elements like `CountryCapital`, `CountryFlag`.
  - **molecules/** – Composed components like `CountryItem`, `SearchBar`.
  - **organisms/** – Larger sections like `CountryList`.
- **src/theme/** – `Theme` definitions.
- **src/shared/** – Application shared `hooks`, `constants`, `types`, validation and option data.
- **src/translations/** – `Localization` files for different languages.
- **src/stores/** – Local stores (eg. `useLocaleStore`).
- **src/specs/** – `Jest` test setup and mocks.
- **src/appstack/** – Application `navigation` setup.
- **src/assets/** – `Images`, `svg`.
- **src/domain/** – `Entities`, value objects.
- **src/services/** – APIs, Database, `Repositories`.
- **e2e/** – End to end tests.



---
## Prerequites

### Detox setup for E2E tests

```bash
npm install detox-cli --global
brew tap wix/brew
brew install applesimutils
```

---

## Getting Started

### Install dependencies


```bash
npm install or yarn install
cd ios && npm pod install or cd ios && yarn pod install
```

### Check lints and prettier

```bash
npm lint:fix or yarn lint:fix
```

### Run on iOS

```bash
npm ios or yarn ios
```

### Run on Android

```bash
npm android or yarn android
```

---

### Run Unit tests

```bash
npm test or yarn test
```

### Run End to End tests
```bash
npm e2e:ios:build or yarn e2e:ios:build
npm e2e:ios:test or yarn e2e:ios:test // similar command for android as well
```

-**Note:** Please make sure to check 'device' in  .detox.js, if you do not same simulators, please change.


## Features

### Clean Architecture
It separates your app into layers that depend on each other in one direction only — from outer to inner.
It typically looks like this:

```
- UI Layer ← React Native components, screens
- Presentation Layer ← ViewModels, Hooks, State, Controllers
- Domain Layer ← Entities, Use Cases (pure JS logic)
- Data Layer (Infra) ← APIs, Database, Repositories
```
          

### Atomic Design

- **Atoms:** Reusable basic components (buttons, inputs, labels).
- **Molecules:** Composed components using atoms (select fields, checkbox groups).
- **Organisms:** Full sections using molecules and atoms (forms, survey sections).

### Emotion Theming

- Centralized theme object in `theme/theme.ts` with colors, spacing, font sizes, and radii.
- All components use theme values to ensure consistent styling.

**Example usage in styled components:**

```ts
const Capital = styled.Text`
  font-size: ${({theme}) => theme.fontSizes.base};
  color: ${({theme}) => theme.colors.textSecondary};
`;
```

### Localization

- Uses [`react-intl`](https://formatjs.io/docs/react-intl) for translations.
- Translation messages are stored in `translations/`.

**Example usage in components:**

```ts
const intl = useIntl();
<label>{intl.formatMessage({ id: 'form.propertyType.label' })}</label>
```

### Theme Provider Wrapper

- `AppWrapper` in `theme/ThemeProviderWrapper.tsx` wraps the entire app.
- Provides theme and locale context to all components.

---

## Learn More
- [React Native Documentation](https://emotion.sh/docs/introduction) - learn about react-native
- [Detox Documentation](https://wix.github.io/Detox/docs/introduction/getting-started) – learn about Detox features a
- [React Intl Documentation](https://formatjs.io/docs/react-intl/) – learn about localization and formatting.
- [Emotion Documentation](https://emotion.sh/docs/introduction) – styling with Emotion.

---
