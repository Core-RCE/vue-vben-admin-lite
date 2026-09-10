import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    name: 'InputGroup',
    path: '/input-group',
    component: () => import('#/views/input-group/index.vue'),
    meta: {
      icon: 'lucide:text-cursor-input',
      order: 5,
      title: $t('page.inputGroup'),
    },
  },
];

export default routes;
