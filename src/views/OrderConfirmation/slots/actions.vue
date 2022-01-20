<template>
  <div class="order-confirmation-actions">
    <div class="flex justify-center gap-4 text-gray-400" v-if="record.status === 'failure'">
      <EditFilled
        class="text-xl cursor-pointer hover:text-primary transition-colors"
        @click="onEdit"
      />
      <DeleteFilled
        class="text-xl cursor-pointer hover:text-state-error transition-colors"
        @click="onDelete"
      />
    </div>
    <div class="flex justify-center gap-4 text-gray-400" v-if="record.status === 'in-process'">
      <PauseOutlined
        class="text-2xl cursor-pointer hover:text-primary transition-colors"
        @click="onEdit"
      />
    </div>
  </div>
</template>

<script setup>
import {
  EditFilled,
  DeleteFilled,
  PauseOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons-vue';
import { Modal } from 'ant-design-vue';
import { createVNode, defineProps } from 'vue';
import { useStore } from 'vuex';

const { dispatch } = useStore();

const props = defineProps({
  record: Object,
});

const onEdit = () => {
  const { id } = props.record;
  console.log('edit', id);
};
const onDelete = () => {
  const { id } = props.record;

  Modal.confirm({
    title: () => 'Delete Order Confirmation',
    icon: () => createVNode(ExclamationCircleOutlined),
    content: () => <p class="">are you sure you want to delete this order</p>,
    onOk() {
      dispatch('removeOrderConfirmation', id);
      dispatch('fetchOrderConfirmationList');
    },
  });
};
</script>
