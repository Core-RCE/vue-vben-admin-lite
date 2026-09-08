export interface UserInfo {
  id: number;
  password: string;
  realName: string;
  roles: string[];
  username: string;
  homePath?: string;
}

export interface TimezoneOption {
  offset: number;
  timezone: string;
}

export const MOCK_USERS: UserInfo[] = [
  {
    id: 0,
    password: '123456',
    realName: 'Vben',
    roles: ['super'],
    username: 'vben',
  },
  {
    id: 1,
    password: '123456',
    realName: 'Admin',
    roles: ['admin'],
    username: 'admin',
    homePath: '/analytics',
  },
  {
    id: 2,
    password: '123456',
    realName: 'Jack',
    roles: ['user'],
    username: 'jack',
    homePath: '/analytics',
  },
];

export const MOCK_CODES = [
  // super
  {
    codes: ['AC_100100', 'AC_100110', 'AC_100120', 'AC_100010'],
    username: 'vben',
  },
  {
    // admin
    codes: ['AC_100010', 'AC_100020', 'AC_100030'],
    username: 'admin',
  },
  {
    // user
    codes: ['AC_1000001', 'AC_1000002'],
    username: 'jack',
  },
];

const appMenus = [
  {
    name: 'Analytics',
    path: '/analytics',
    component: '/dashboard/analytics/index',
    meta: {
      affixTab: true,
      icon: 'lucide:area-chart',
      order: -1,
      title: 'page.dashboard.analytics',
    },
  },
  {
    name: 'Status',
    path: '/status',
    redirect: '/status/403',
    meta: {
      icon: 'lucide:circle-alert',
      order: 10,
      title: 'page.status.title',
    },
    children: [
      {
        name: 'StatusForbidden',
        path: '/status/403',
        component: '/_core/fallback/forbidden',
        meta: {
          icon: 'lucide:shield-ban',
          title: 'page.status.forbidden',
        },
      },
      {
        name: 'StatusNotFound',
        path: '/status/404',
        component: '/_core/fallback/not-found',
        meta: {
          icon: 'lucide:file-question',
          title: 'page.status.notFound',
        },
      },
      {
        name: 'StatusInternalError',
        path: '/status/500',
        component: '/_core/fallback/internal-error',
        meta: {
          icon: 'lucide:server-crash',
          title: 'page.status.internalError',
        },
      },
      {
        name: 'StatusOffline',
        path: '/status/offline',
        component: '/_core/fallback/offline',
        meta: {
          icon: 'lucide:wifi-off',
          title: 'page.status.offline',
        },
      },
      {
        name: 'StatusComingSoon',
        path: '/status/coming-soon',
        component: '/_core/fallback/coming-soon',
        meta: {
          icon: 'lucide:clock',
          title: 'page.status.comingSoon',
        },
      },
    ],
  },
];

export const MOCK_MENUS = [
  {
    menus: [...appMenus],
    username: 'vben',
  },
  {
    menus: [...appMenus],
    username: 'admin',
  },
  {
    menus: [...appMenus],
    username: 'jack',
  },
];

export const MOCK_MENU_LIST = [
  {
    id: 1,
    name: 'Analytics',
    status: 1,
    type: 'menu',
    icon: 'mdi:dashboard',
    path: '/analytics',
    component: '/dashboard/analytics/index',
    meta: {
      icon: 'lucide:area-chart',
      title: 'page.dashboard.analytics',
      affixTab: true,
      order: 0,
    },
  },
  {
    id: 2,
    status: 1,
    type: 'catalog',
    name: 'Status',
    path: '/status',
    redirect: '/status/403',
    meta: {
      icon: 'lucide:circle-alert',
      order: 10,
      title: 'page.status.title',
    },
    children: [
      {
        id: 202,
        pid: 2,
        status: 1,
        type: 'menu',
        name: 'StatusForbidden',
        path: '/status/403',
        component: '/_core/fallback/forbidden',
        meta: {
          icon: 'lucide:shield-ban',
          title: 'page.status.forbidden',
        },
      },
      {
        id: 203,
        pid: 2,
        status: 1,
        type: 'menu',
        name: 'StatusNotFound',
        path: '/status/404',
        component: '/_core/fallback/not-found',
        meta: {
          icon: 'lucide:file-question',
          title: 'page.status.notFound',
        },
      },
      {
        id: 204,
        pid: 2,
        status: 1,
        type: 'menu',
        name: 'StatusInternalError',
        path: '/status/500',
        component: '/_core/fallback/internal-error',
        meta: {
          icon: 'lucide:server-crash',
          title: 'page.status.internalError',
        },
      },
      {
        id: 205,
        pid: 2,
        status: 1,
        type: 'menu',
        name: 'StatusOffline',
        path: '/status/offline',
        component: '/_core/fallback/offline',
        meta: {
          icon: 'lucide:wifi-off',
          title: 'page.status.offline',
        },
      },
      {
        id: 206,
        pid: 2,
        status: 1,
        type: 'menu',
        name: 'StatusComingSoon',
        path: '/status/coming-soon',
        component: '/_core/fallback/coming-soon',
        meta: {
          icon: 'lucide:clock',
          title: 'page.status.comingSoon',
        },
      },
    ],
  },
];

export function getMenuIds(menus: any[]) {
  const ids: number[] = [];
  menus.forEach((item) => {
    ids.push(item.id);
    if (item.children && item.children.length > 0) {
      ids.push(...getMenuIds(item.children));
    }
  });
  return ids;
}

/**
 * 时区选项
 */
export const TIME_ZONE_OPTIONS: TimezoneOption[] = [
  {
    offset: -5,
    timezone: 'America/New_York',
  },
  {
    offset: 0,
    timezone: 'Europe/London',
  },
  {
    offset: 8,
    timezone: 'Asia/Shanghai',
  },
  {
    offset: 9,
    timezone: 'Asia/Tokyo',
  },
  {
    offset: 9,
    timezone: 'Asia/Seoul',
  },
];
