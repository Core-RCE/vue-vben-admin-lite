<script setup lang="ts">
import { ref } from 'vue';

import { Page, useVbenForm, VbenButton, z } from '@vben/common-ui';

const result = ref('');

const [ExamplesForm] = useVbenForm({
  commonConfig: { labelWidth: 90 },
  layout: 'vertical',
  showDefaultActions: false,
  wrapperClass: 'grid-cols-1 md:grid-cols-2',
  schema: [
    {
      component: 'VbenInput',
      fieldName: 'normal',
      label: '普通输入框',
      componentProps: { placeholder: '点击或按 Tab 查看聚焦边框' },
    },
    {
      component: 'VbenInputPassword',
      fieldName: 'password',
      label: '密码输入框',
      componentProps: { placeholder: '输入测试密码，可切换可见性' },
    },
    {
      component: 'VbenInput',
      fieldName: 'readonly',
      label: '只读状态',
      defaultValue: '只读内容，可以选中复制',
      componentProps: { readonly: true },
    },
    {
      component: 'VbenInput',
      fieldName: 'disabled',
      label: '禁用状态',
      defaultValue: '禁用内容',
      componentProps: { disabled: true },
    },
    {
      component: 'VbenInput',
      fieldName: 'small',
      label: '小尺寸',
      componentProps: { class: 'h-8 text-xs', placeholder: '高度 32px' },
    },
    {
      component: 'VbenInput',
      fieldName: 'large',
      label: '大尺寸',
      componentProps: { class: 'h-12 text-base', placeholder: '高度 48px' },
    },
  ],
});

const [ValidationForm, validationApi] = useVbenForm({
  layout: 'vertical',
  showDefaultActions: false,
  wrapperClass: 'grid-cols-1 md:grid-cols-2',
  schema: [
    {
      component: 'VbenInput',
      fieldName: 'username',
      label: '用户名',
      componentProps: { placeholder: '请输入用户名' },
      rules: z.string().min(1, '请输入用户名'),
    },
    {
      component: 'VbenInputPassword',
      fieldName: 'password',
      label: '密码',
      componentProps: { placeholder: '请输入至少 6 位测试密码' },
      rules: z.string().min(6, '密码至少需要 6 位'),
    },
  ],
});

async function validate() {
  const { valid } = await validationApi.validate();
  result.value = valid
    ? '校验通过，点击输入框检查正常聚焦效果'
    : '校验未通过，点击红色输入框检查边框是否保持单层';
}

async function reset() {
  await validationApi.resetForm();
  result.value = '';
}
</script>

<template>
  <Page
    title="输入框组"
    description="对比输入框的圆角、边框和交互状态，支持使用右上角主题开关检查明暗主题"
  >
    <div class="space-y-6">
      <section class="bg-card rounded-xl border p-6">
        <h2 class="mb-2 text-lg font-semibold">基础状态与尺寸</h2>
        <p class="text-muted-foreground mb-6 text-sm">
          点击输入框或按 Tab 切换焦点，观察四个圆角与边框厚度是否一致
        </p>
        <ExamplesForm />
      </section>
      <section class="bg-card rounded-xl border p-6">
        <h2 class="mb-2 text-lg font-semibold">表单校验</h2>
        <p class="text-muted-foreground mb-6 text-sm">
          先留空点击校验，再聚焦错误输入框；填写有效内容后再次校验，观察错误状态的恢复
        </p>
        <ValidationForm />
        <div class="flex flex-wrap gap-3">
          <VbenButton @click="validate">校验输入</VbenButton>
          <VbenButton variant="outline" @click="reset">重置</VbenButton>
        </div>
        <p class="text-muted-foreground mt-4 text-sm" role="status">
          {{ result || '仅用于样式预览，输入内容不会提交到服务器' }}
        </p>
      </section>
    </div>
  </Page>
</template>
