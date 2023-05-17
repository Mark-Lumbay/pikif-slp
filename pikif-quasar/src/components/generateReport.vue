<template>

<div>
  <q-dialog v-model="prompt" persistent>
      <q-card class="w-full">
        <div class="w-full h-14 bg-primaryHovBtn flex items-center px-4">
          <p class="block text-white text-xl font-semibold">
            Generate Report
          </p>
        </div>
        <div class="px-4">
          <q-card-section class="mt-4">

          </q-card-section>

          <q-card-section class="q-pt-none">

          </q-card-section>

          <q-card-section>

          </q-card-section>

          <q-card-section class="q-pt-none">

          </q-card-section>

          <q-card-actions
            align="right"
            class="text-primary space-x-3 px-4 mb-4"
          >
            <button
              flat
              label="Cancel"
              @click="closeModal"
              class="text-primaryRed h-12 hover:text-white hover:bg-primaryRed hover:border-transparent font-semibold py-2 px-6 border border-primaryRed rounded"
            >
              Cancel
            </button>
            <button
              flat
              label="Cancel"
              @click="closeModal"
              class="text-btnGreen h-12 hover:text-white hover:bg-btnGreenHover hover:border-transparent font-semibold py-2 px-6 border border-btnGreen rounded"
            >
              Confirm
            </button>
          </q-card-actions>
        </div>
      </q-card>
    </q-dialog>


</div>

</template>

<script>

const closeModal = () => emit("closeModal");

</script>
