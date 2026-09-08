import type { App } from 'vue';

import { createApp, defineComponent, h, nextTick } from 'vue';

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import PreferencesButton from '../preferences-button.vue';
import Preferences from '../preferences.vue';

const { open } = vi.hoisted(() => ({ open: vi.fn() }));

vi.mock('@vben/icons', () => ({ Settings: { render: () => null } }));
vi.mock('@vben/locales', () => ({
  $t: (key: string) => key,
  loadLocaleMessages: vi.fn(),
}));
vi.mock('@vben/preferences', () => ({
  preferences: {},
  updatePreferences: vi.fn(),
}));
vi.mock('@vben/utils', () => ({ capitalizeFirstLetter: vi.fn() }));
vi.mock('../preferences-drawer.vue', () => ({ default: {} }));
vi.mock('@vben-core/popup-ui', () => ({
  useVbenDrawer: () => [
    defineComponent({
      emits: ['clearPreferencesAndLogout'],
      setup(_, { emit }) {
        return () =>
          h('button', {
            'data-testid': 'clear',
            onClick: () => emit('clearPreferencesAndLogout'),
          });
      },
    }),
    { open },
  ],
}));
vi.mock('@vben-core/shadcn-ui', () => {
  const button = defineComponent({
    setup(_, { attrs, slots }) {
      return () => h('button', attrs, slots.default?.());
    },
  });
  return { VbenButton: button, VbenIconButton: button };
});

let app: App;
let container: HTMLDivElement;

beforeEach(() => {
  open.mockClear();
  container = document.createElement('div');
  document.body.append(container);
});

afterEach(() => {
  app.unmount();
  container.remove();
});

describe('preferences triggers', () => {
  it('opens the drawer from the header settings button', async () => {
    app = createApp(PreferencesButton);
    app.mount(container);
    container
      .querySelector<HTMLButtonElement>('[aria-label="preferences.title"]')
      ?.click();
    await nextTick();
    expect(open).toHaveBeenCalledExactlyOnceWith();
  });

  it('keeps the default floating settings trigger working', async () => {
    app = createApp(Preferences);
    app.mount(container);
    container
      .querySelector<HTMLButtonElement>('[title="preferences.title"]')
      ?.click();
    await nextTick();
    expect(open).toHaveBeenCalledExactlyOnceWith();
  });

  it('forwards the clear-preferences logout event', async () => {
    const logout = vi.fn();
    app = createApp(PreferencesButton, { onClearPreferencesAndLogout: logout });
    app.mount(container);
    container
      .querySelector<HTMLButtonElement>('[data-testid="clear"]')
      ?.click();
    await nextTick();
    expect(logout).toHaveBeenCalledExactlyOnceWith();
  });

  it('can hide the default floating trigger', () => {
    app = createApp(Preferences, { showButton: false });
    app.mount(container);
    expect(container.querySelector('[title="preferences.title"]')).toBeNull();
  });
});
