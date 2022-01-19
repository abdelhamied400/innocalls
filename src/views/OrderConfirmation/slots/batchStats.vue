<template>
  <div v-if="!downloadLoading">
    <img
      v-if="props.record.status === 'finished'"
      class="w-24 cursor-pointer"
      src="@/assets/download.png"
      alt=""
      @click="() => download(props.record.id, props.record.filename)"
    />
  </div>
  <a-spin v-else />
</template>

<script setup>
import { defineProps, ref } from 'vue';
import { saveAs } from 'file-saver';
import { api } from '@/services/axios';

const props = defineProps({
  record: Object,
});

const downloadLoading = ref(false);

const download = async (id, filename) => {
  downloadLoading.value = true;
  const res = await api.get(`/ecommercewa/api/v1/cdr/report/batch/${id}`);
  const blob = new Blob([res.data], {
    type: res.headers['content-type'],
  });
  saveAs(blob, filename);
  downloadLoading.value = false;
};
</script>
