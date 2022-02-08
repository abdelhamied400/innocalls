<template>
  <div
    class="create-order-confirmation w-full max-w-8xl mx-auto flex flex-col gap-4"
  >
    <div class="card">
      <div class="py-4 px-8">
        <h1 class="text-4xl py-4 capitalize font-bold text-center">
          create order confirmation
        </h1>

        <div class="form mt-4">
          <a-form
            ref="formRef"
            :model="formData"
            :rules="formRules"
            layout="vertical"
          >
            <div class="grid grid-cols-2 gap-4">
              <a-form-item label="Caller Id" name="callerId">
                <a-select
                  size="large"
                  v-model:value="formData.callerId"
                  placeholder="please select caller Id"
                >
                  <a-select-option
                    v-for="{ id, did } in callerIds?.data.dids"
                    :key="id"
                    :value="id"
                    >{{ did }}</a-select-option
                  >
                </a-select>
              </a-form-item>

              <a-form-item label="Concurrent Calls" name="concurrentCalls">
                <div class="flex gap-4">
                  <div class="slider flex-1">
                    <a-slider
                      size="large"
                      class="flex-1"
                      v-model:value="formData.concurrentCalls"
                      :min="0"
                      :max="10"
                    />
                  </div>
                  <a-input-number
                    readonly
                    :value="formData.concurrentCalls"
                    :min="0"
                    :max="10"
                  />
                </div>
              </a-form-item>

              <a-form-item label="Start Date" name="startDate">
                <a-date-picker
                  size="large"
                  v-model:value="formData.startDate"
                  :disabled-date="disabledDate"
                  :disabled-time="disabledDateTime"
                  :show-time="{
                    format: 'HH:mm',
                  }"
                  type="date"
                  placeholder="Pick Start Date"
                  style="width: 100%"
                  format="YYYY-MM-DD HH:mm"
                />
              </a-form-item>

              <a-form-item label="Trials number" name="trialsNum">
                <div class="flex gap-4">
                  <div class="slider flex-1">
                    <a-slider
                      size="large"
                      class="flex-1"
                      v-model:value="formData.trialsNum"
                      :min="0"
                      :max="10"
                      @change="onTrialsNumChange"
                    />
                  </div>
                  <a-input-number
                    readonly
                    :value="formData.trialsNum"
                    :min="0"
                    :max="10"
                  />
                </div>
              </a-form-item>

              <hr class="col-span-2 my-4" v-if="formData.trialsNum" />
              <h1
                class="col-span-2 text-2xl font-bold"
                v-if="formData.trialsNum"
              >
                Trials
              </h1>
              <a-form-item
                v-for="(trial, idx) in formData.trials"
                :key="idx"
                :label="`Trial #${idx + 1}`"
              >
                <a-date-picker
                  size="large"
                  :value="trial"
                  :disabled-date="disabledDate"
                  :disabled-time="disabledDateTime"
                  :show-time="{
                    format: 'HH:mm',
                  }"
                  type="date"
                  placeholder="Pick Start Date"
                  style="width: 100%"
                  format="YYYY-MM-DD HH:mm"
                  @change="(val) => onTrialDateChange(idx, val)"
                />
              </a-form-item>

              <hr class="col-span-2 my-4" />

              <!-- API_BLOCKED: call flow types select -->
              <a-form-item label="Call Flow" name="callFlowType">
                <a-select
                  size="large"
                  v-model:value="formData.callFlowType"
                  placeholder="Please Select Call Flow Type"
                >
                  <a-select-option
                    v-for="{ id, did } in callFlows?.data"
                    :key="id"
                    :value="id"
                    >{{ did }}</a-select-option
                  >
                </a-select>
              </a-form-item>

              <!-- API_BLOCKED: batch types select -->
              <div class="flex gap-4 items-end">
                <a-form-item class="flex-1" label="Batch Type" name="batchType">
                  <a-select
                    size="large"
                    v-model:value="formData.batchType"
                    placeholder="Please Select Batch Type"
                  >
                    <a-select-option
                      v-for="{ id, did } in types?.data"
                      :key="id"
                      :value="id"
                      >{{ did }}</a-select-option
                    >
                  </a-select>
                </a-form-item>
                <a-button
                  ghost
                  class="border-1 hover:border-state-success border-state-success text-state-success hover:text-state-success flex items-center"
                  size="large"
                  @click="onSubmit"
                  ><CloudDownloadOutlined /> <span>Download</span></a-button
                >
              </div>

              <div class="flex col-span-2 justify-center my-8">
                <a-upload-dragger
                  v-model:value="file"
                  name="file"
                  :multiple="false"
                  :action="null"
                  @change="() => null"
                  :beforeUpload="() => null"
                >
                  <div class="py-8 px-24">
                    <p class="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <h2 class="text-xl font-bold">
                      Click or drag file to this area to upload
                    </h2>
                    <p class="ant-upload-hint max-w-xl">
                      Support for a single or bulk upload. Strictly prohibit
                      from uploading company data or other band files
                    </p>
                  </div>
                </a-upload-dragger>
              </div>

              <div class="col-span-2 flex justify-center gap-8">
                <a-button
                  type="primary"
                  class="px-16"
                  size="large"
                  @click="onSubmit"
                  >Save</a-button
                >
                <a-button danger ghost class="px-16" size="large"
                  >Back</a-button
                >
              </div>
            </div>
          </a-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref, toRaw } from 'vue';
import { CloudDownloadOutlined, InboxOutlined } from '@ant-design/icons-vue';
import { useStore } from 'vuex';
import moment from 'moment';
import rules from '@/utils/rules';

// init
const store = useStore();

// fetch
store.dispatch('fetchCallFlows');
const callFlows = computed(() => store.getters.callFlows);
store.dispatch('fetchTypes');
const types = computed(() => store.getters.types);
store.dispatch('fetchCallerIds');
const callerIds = computed(() => store.getters.callerIds);

// state
const formRef = ref();
const formData = reactive({
  callerId: null,
  concurrentCalls: 0,
  startDate: null,
  trialsNum: 0,
  trials: [],
  callFlowType: null,
  batchType: null,
  file: null,
});

const formRules = {
  callerId: [rules.required('caller id is requiredMM')],
  startDate: [rules.required('Start Date is requiredMM')],
};

const range = (start, end) => {
  const result = [];

  for (let i = start; i < end; i += 1) {
    result.push(i);
  }

  return result;
};

const disabledDate = (current) => current < moment().startOf('day');

const disabledDateTime = () => ({
  disabledHours: () =>
    moment().date() === moment(formData.startDate).date()
      ? range(0, moment().hour())
      : [],
  disabledMinutes: () =>
    moment().date() === moment(formData.startDate).date() &&
    moment().hour() === moment(formData.startDate).hour()
      ? range(0, moment(formData.startDate).minute())
      : [],
});

// methods
const onTrialsNumChange = async (val) => {
  formData.trials.length = val;
};
const onTrialDateChange = async (idx, val) => {
  formData.trials[idx] = val;
};
const onSubmit = async () => {
  try {
    const res = await formRef.value.validate();
    console.log('values', toRaw(formData), toRaw(res));
  } catch (error) {
    console.log('error', toRaw(formData), error);
  }
};

console.log(callFlows, types, callerIds);
</script>
