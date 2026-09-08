import { mount } from '@vue/test-utils';

import { beforeEach, describe, expect, it, vi } from 'vitest';

import Fallback from '../fallback.vue';

const { push } = vi.hoisted(() => ({ push: vi.fn() }));

vi.mock('vue-router', () => ({ useRouter: () => ({ push }) }));
vi.mock('@vben/locales', () => ({ $t: (key: string) => key }));
vi.mock('@vben/icons', () => ({
  ArrowLeft: { template: '<span />' },
  RotateCw: { template: '<span />' },
}));
vi.mock('@vben-core/shadcn-ui', () => ({
  VbenButton: { template: '<button><slot /></button>' },
}));

describe('fallback status actions', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it.each(['403', '404'] as const)(
    '%s still returns to the configured home',
    async (status) => {
      const wrapper = mount(Fallback, {
        props: { homePath: '/analytics', image: '/test.svg', status },
      });

      expect(wrapper.get('button').text()).toBe('common.backToHome');
      await wrapper.get('button').trigger('click');
      expect(push).toHaveBeenCalledWith('/analytics');
    },
  );

  it.each(['500', 'offline'] as const)('%s still offers refresh', (status) => {
    const wrapper = mount(Fallback, {
      props: { image: '/test.svg', status },
    });

    expect(wrapper.get('button').text()).toBe('common.refresh');
  });

  it('does not add an action to coming soon', () => {
    const wrapper = mount(Fallback, {
      props: { image: '/test.svg', status: 'coming-soon' },
    });

    expect(wrapper.find('button').exists()).toBe(false);
  });

  it('preserves custom title, description and action overrides for 403', () => {
    const wrapper = mount(Fallback, {
      props: {
        description: 'Custom description',
        image: '/test.svg',
        status: '403',
        title: 'Custom title',
      },
      slots: { action: '<a href="/help">Help</a>' },
    });

    expect(wrapper.text()).toContain('Custom title');
    expect(wrapper.text()).toContain('Custom description');
    expect(wrapper.get('a').text()).toBe('Help');
    expect(wrapper.find('button').exists()).toBe(false);
  });
});
