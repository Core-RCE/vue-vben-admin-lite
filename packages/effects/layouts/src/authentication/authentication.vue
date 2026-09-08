<script setup lang="ts">
import type { ToolbarType } from './types';

import { computed } from 'vue';

import { preferences, usePreferences } from '@vben/preferences';

import { Copyright } from '../basic/copyright';
import AuthenticationFormView from './form.vue';
import Toolbar from './toolbar.vue';

interface Props {
  appName?: string;
  logo?: string;
  logoDark?: string;
  toolbar?: boolean;
  copyright?: boolean;
  toolbarList?: ToolbarType[];
  clickLogo?: () => void;
}

const props = withDefaults(defineProps<Props>(), {
  appName: '',
  copyright: true,
  logo: '',
  logoDark: '',
  toolbar: true,
  toolbarList: () => ['color', 'language', 'theme'],
  clickLogo: () => {},
});

const { isDark } = usePreferences();

/**
 * @zh_CN 根据主题选择合适的 logo 图标
 */
const logoSrc = computed(() => {
  // 如果是暗色主题且提供了 logoDark，则使用暗色主题的 logo
  if (isDark.value && props.logoDark) {
    return props.logoDark;
  }
  // 否则使用默认的 logo
  return props.logo;
});
</script>

<template>
  <div
    :class="[isDark ? 'dark' : '']"
    class="flex min-h-full flex-1 overflow-x-hidden select-none"
  >
    <template v-if="toolbar">
      <slot name="toolbar">
        <Toolbar :toolbar-list="toolbarList" />
      </slot>
    </template>
    <slot name="logo">
      <!-- 头部 Logo 和应用名称 -->
      <div
        v-if="logoSrc || appName"
        class="absolute top-0 left-0 z-10 flex flex-1"
        @click="clickLogo"
      >
        <div
          class="mt-4 ml-4 flex flex-1 items-center text-foreground sm:top-6 sm:left-6 lg:text-foreground"
        >
          <img
            v-if="logoSrc"
            :key="logoSrc"
            :alt="appName"
            :src="logoSrc"
            class="mr-2"
            width="42"
          />
          <p v-if="appName" class="m-0 text-xl font-medium">
            {{ appName }}
          </p>
        </div>
      </div>
    </slot>

    <!-- 中心认证面板 -->
    <div class="relative flex-center w-full">
      <div class="login-background absolute top-0 left-0 size-full"></div>
      <AuthenticationFormView
        class="w-full rounded-3xl pb-20 shadow-float shadow-primary/5 md:w-2/3 md:bg-background lg:w-1/2 xl:w-[36%]"
        data-side="bottom"
      >
        <template v-if="copyright" #copyright>
          <slot name="copyright">
            <Copyright
              v-if="preferences.copyright.enable"
              v-bind="preferences.copyright"
            />
          </slot>
        </template>
      </AuthenticationFormView>
    </div>
  </div>
</template>

<style scoped>
.login-background {
  background: linear-gradient(
    154deg,
    #07070915 30%,
    hsl(var(--primary) / 30%) 48%,
    #07070915 64%
  );
  filter: blur(100px);
}

.dark {
  .login-background {
    background: linear-gradient(
      154deg,
      #07070915 30%,
      hsl(var(--primary) / 20%) 48%,
      #07070915 64%
    );
    filter: blur(100px);
  }
}
</style>
