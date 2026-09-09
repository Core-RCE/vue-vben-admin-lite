import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    name: 'Status',
    path: '/status',
    redirect: '/status/403',
    meta: {
      icon: 'lucide:circle-alert',
      order: 10,
      title: $t('page.status.title'),
    },
    children: [
      {
        name: 'StatusForbidden',
        path: '/status/403',
        component: () => import('#/views/_core/fallback/forbidden.vue'),
        meta: {
          icon: 'lucide:shield-ban',
          title: $t('page.status.forbidden'),
        },
      },
      {
        name: 'StatusNotFound',
        path: '/status/404',
        component: () => import('#/views/_core/fallback/not-found.vue'),
        meta: {
          icon: 'lucide:file-question',
          title: $t('page.status.notFound'),
        },
      },
      {
        name: 'StatusInternalError',
        path: '/status/500',
        component: () => import('#/views/_core/fallback/internal-error.vue'),
        meta: {
          icon: 'lucide:server-crash',
          title: $t('page.status.internalError'),
        },
      },
      {
        name: 'StatusOffline',
        path: '/status/offline',
        component: () => import('#/views/_core/fallback/offline.vue'),
        meta: {
          icon: 'lucide:wifi-off',
          title: $t('page.status.offline'),
        },
      },
      {
        name: 'StatusComingSoon',
        path: '/status/coming-soon',
        component: () => import('#/views/_core/fallback/coming-soon.vue'),
        meta: {
          icon: 'lucide:clock',
          title: $t('page.status.comingSoon'),
        },
      },
    ],
  },
];

export default routes;
