<template>
  <div>
    <!-- <div class="flex w-full mb-6"></div> -->
    <div class="flex w-[65vw] flex-row">
      <div class="w-full">
        <form>
          <div class="flex flex-wrap -mx-3 mb-4 w-full justify-center mt-6">
            <p
              class="block uppercase tracking-wide text-gray-700 font-bold mb-2 text-lg"
            >
              Client Personal Information
            </p>
          </div>
          <div class="flex flex-wrap -mx-3 mb-4">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                First Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border focus:border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="First Name"
                v-model="clientPersonalInfo.clientInfo.firstName"
                :disabled="textField"
              />
              <!-- <p class="text-red-500 text-xs italic">
              Please fill out this field.
            </p> -->
            </div>
            <div class="w-full md:w-1/3 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-middle-name"
              >
                Middle Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-middle-name"
                type="text"
                placeholder="Middle Name"
                v-model="clientPersonalInfo.clientInfo.middleName"
                :disabled="textField"
              />
            </div>
            <div class="w-full md:w-1/3 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Last Name"
                v-model="clientPersonalInfo.clientInfo.lastName"
                :disabled="textField"
              />
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-4">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-address"
              >
                Address
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border focus:border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-address"
                type="text"
                placeholder="Address"
                v-model="clientPersonalInfo.clientInfo.address"
                :disabled="textField"
              />
            </div>
            <div class="w-full md:w-1/6 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-age"
              >
                Age
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border focus:border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-age"
                type="number"
                placeholder="Age"
                v-model="clientPersonalInfo.clientInfo.age"
                :disabled="textField"
              />
            </div>
            <div class="w-full md:w-1/6 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-int"
              >
                Interview Date
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-int"
                type="date"
                v-model="clientPersonalInfo.clientInfo.interviewDate"
                :disabled="textField"
              />
            </div>
            <div class="w-full md:w-1/6 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-category"
              >
                Category
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-category"
                  v-model="clientPersonalInfo.clientInfo.category"
                  :disabled="textField"
                >
                  <option value="Survivor">Survivor</option>
                  <option value="Needly Youth">Needly Youth</option>
                  <option value="Needly Adult">Needly Adult</option>
                  <option value="Needly Senior Citizen">
                    Needly Senior Citizen
                  </option>
                  <option value="CICL">CICL</option>
                  <option value="CEDC">CEDC</option>
                  <option value="C/PWD">C/PWD</option>
                  <option value="WEDC">WEDC</option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-4">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-birth-place"
              >
                Birth Place
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border focus:border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-birth-place"
                type="text"
                placeholder="Birth Place"
                v-model="clientPersonalInfo.clientInfo.birthPlace"
                :disabled="textField"
              />
            </div>
            <div class="w-full md:w-1/6 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-bday"
              >
                Birth Date
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-bday"
                type="date"
                v-model="clientPersonalInfo.clientInfo.birthDate"
                :disabled="textField"
              />
            </div>

            <div class="w-full md:w-1/6 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-status"
              >
                Civil Status
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-status"
                  v-model="clientPersonalInfo.clientInfo.status"
                  :disabled="textField"
                >
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Widowed">Widowed</option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div class="w-full md:w-1/6 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-sex"
              >
                Sex
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-sex"
                  v-model="clientPersonalInfo.clientInfo.sex"
                  :disabled="textField"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div class="w-full md:w-1/6 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-appliance"
              >
                Appliances
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border focus:border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-appliance"
                type="text"
                placeholder="Appliances"
                v-model="clientPersonalInfo.clientInfo.appliances"
                :disabled="textField"
              />
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-4">
            <div class="w-full md:w-1/5 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-educ"
              >
                Educational Level
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-educ"
                  v-model="clientPersonalInfo.clientInfo.educAttn"
                  :disabled="textField"
                >
                  <option value="Pre-school">Pre-school</option>
                  <option value="Elementary">Elementary</option>
                  <option value="High School">High School</option>
                  <option value="Senior High School">Senior High School</option>
                  <option value="College">College</option>
                  <option value="None">None</option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div class="w-full md:w-1/5 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-religion"
              >
                Religion
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border focus:border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-religion"
                type="text"
                placeholder="Religion"
                v-model="clientPersonalInfo.clientInfo.religion"
                :disabled="textField"
              />
            </div>

            <div class="w-full md:w-1/5 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-contact"
              >
                Contact Number
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-contact"
                type="text"
                placeholder="Contact Number"
                v-model="clientPersonalInfo.clientInfo.contactNum"
                :disabled="textField"
              />
            </div>

            <div class="w-full md:w-1/5 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-housing"
              >
                Housing Condition
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-housing"
                  v-model="clientPersonalInfo.clientInfo.condition"
                  :disabled="textField"
                >
                  <option value="Squater's Shanty">Squater's Shanty</option>
                  <option value="Dilapidated House">Dilapidated House</option>
                  <option value="Old House">Old house</option>
                  <option value="Homeless">Homeless</option>
                  <option value="New House">New House</option>
                  <option value="Others">Others</option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div class="w-full md:w-1/5 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-housing-others"
              >
                Others:
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-other"
                type="text"
                placeholder="Other options"
                :disabled="
                  !editMode ||
                  clientPersonalInfo.clientInfo.condition !== 'Others'
                "
                v-model="clientPersonalInfo.clientInfo.conditionOthers"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-4 w-full justify-center mt-6">
            <p
              class="block uppercase tracking-wide text-gray-700 font-bold mb-2 text-lg"
            >
              House Materials
            </p>
          </div>

          <div class="flex flex-wrap -mx-3 mb-4">
            <div class="w-full md:w-1/6 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-roof"
              >
                Roof Material
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-roof"
                  v-model="clientPersonalInfo.clientInfo.materials.roof"
                  :disabled="textField"
                >
                  <option value="Nipa">Nipa</option>
                  <option value="Bamboo">Bamboo</option>
                  <option value="G.I Sheets">G.I Sheets</option>
                  <option value="Others">Others</option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/6 px-3 mb-6 md:mb-0 border-r-2">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-roof-others"
              >
                Others:
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-roof-others"
                type="text"
                placeholder="Other options"
                :disabled="
                  !editMode ||
                  clientPersonalInfo.clientInfo.materials.roof !== 'Others'
                "
                v-model="clientPersonalInfo.clientInfo.materials.roofOthers"
              />
            </div>

            <div class="w-full md:w-1/6 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-wall"
              >
                Wall Material
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-wall"
                  v-model="clientPersonalInfo.clientInfo.materials.wall"
                  :disabled="textField"
                >
                  <option value="Nipa">Nipa</option>
                  <option value="Bamboo">Bamboo</option>
                  <option value="Wood">Wood</option>
                  <option value="Concrete">Concrete</option>
                  <option value="Others">Others</option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/6 px-3 mb-6 md:mb-0 border-r-2">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-roof-others"
              >
                Others:
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-roof-others"
                type="text"
                placeholder="Other options"
                :disabled="
                  !editMode ||
                  clientPersonalInfo.clientInfo.materials.wall !== 'Others'
                "
                v-model="clientPersonalInfo.clientInfo.materials.wallOthers"
              />
            </div>

            <div class="w-full md:w-1/6 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-wall"
              >
                Floor Material
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-wall"
                  v-model="clientPersonalInfo.clientInfo.materials.floor"
                  :disabled="textField"
                >
                  <option value="Soil">Soil</option>
                  <option value="Bamboo">Bamboo</option>
                  <option value="Wood">Wood</option>
                  <option value="Concrete">Concrete</option>
                  <option value="Others">Others</option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/6 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-roof-others"
              >
                Others:
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-roof-others"
                type="text"
                placeholder="Other options"
                :disabled="
                  !editMode ||
                  clientPersonalInfo.clientInfo.materials.floor !== 'Others'
                "
                v-model="clientPersonalInfo.clientInfo.materials.floorOthers"
              />
            </div>
          </div>
        </form>
      </div>
      <div
        class="mb-5 bg-red-500 p-2 text-white font-semibold rounded"
        @click.prevent="clearErr"
        v-if="lackingErr"
      >
        <h3 class="text-sm">Please fill all the fields</h3>
      </div>
      <div class="flex w-full justify-end" v-if="!readOnly">
        <button
          class="bg-btnGreen mb-2 w-[12vw] hover:bg-btnGreenHover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-14 transition-all ease-in-out"
          @click.prevent="submitPersonInfo"
        >
          Next
        </button>
      </div>

      <div class="flex w-full justify-end" v-if="readOnly && !editMode">
        <div class="w-[50%] flex justify-start space-x-4 mt-6">
          <button
            flat
            label="Cancel"
            class="text-primaryRed h-12 hover:text-white hover:bg-primaryRed hover:border-transparent font-semibold py-2 px-6 border border-primaryRed rounded"
            @click="exportToPDFBasic"
          >
            <q-icon name="las la-file-pdf" size="32px"></q-icon>
            Export as PDF
          </button>
          <button
            flat
            label="Cancel"
            class="text-btnGreen h-12 hover:text-white hover:bg-btnGreen hover:border-transparent font-semibold py-2 px-6 border border-btnGreen rounded"
            @click="exportToCSV"
          >
            <q-icon name="las la-file-csv" size="32px"></q-icon>
            Export as CSV
          </button>
        </div>

        <div class="w-[50%] flex justify-end">
          <button
            class="bg-primaryBtn mb-2 w-[12vw] hover:bg-primaryHovBtn text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-14 transition-all ease-in-out"
            @click.prevent="setupEditMode"
            :class="disableClass"
          >
            Edit
          </button>
        </div>
      </div>

      <div class="flex w-full justify-end space-x-4 mt-4" v-if="updateMode">
        <button
          class="bg-primaryRed mb-2 w-[12vw] hover:bg-primaryRedHover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-14 transition-all ease-in-out"
          @click.prevent="setupCancelEdit"
        >
          Cancel
        </button>

        <button
          class="bg-btnGreen mb-2 w-[12vw] hover:bg-btnGreenHover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-14 transition-all ease-in-out"
          @click.prevent="submitPersonInfo"
        >
          Update
        </button>
      </div>
    </div>
  </div>

  <AlertBox
    :show-alert="showAlert"
    @toggle-alert="toggleAlert"
    :message-obj="textDetails"
  ></AlertBox>
</template>

<script>
import { ref, defineEmits, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { getOneStudent } from "../services/services";
import store from "../store";
import AlertBox from "src/components/AlertBox.vue";
// import { jsPDF } from "jspdf";
// import autoTable from "jspdf-autotable";

import jsPDF from "jspdf";
import { applyPlugin } from "jspdf-autotable";
applyPlugin(jsPDF);
import { exportFile } from "quasar";

export default {
  emits: ["clientInfoSubmit", "clientInfoUpdate"],
  props: {
    withProp: {
      type: Object,
      required: false,
    },
  },
  components: {
    AlertBox,
  },
  setup(props, { emit }) {
    const storeFunc = useStore();
    const route = useRoute();
    const authLevel = ref("");
    const exportObj = ref([]);
    const textDetails = ref({
      type: 0,
      header: "Notice",
      bodyText:
        "You lack the access previliges to perform this action. If you think that this is a mistake, please contact an administrator",
    });

    onMounted(async () => {
      authLevel.value = store.getters.getAuthLevel;

      if (props.withProp) {
        let data = await storeFunc.dispatch("getClientInfo", route.params.id);

        if (!data) {
          const data = await getOneStudent(route.params.id);
          clientPersonalInfo.value.id = route.params.id;
          clientPersonalInfo.value.clientInfo = data.clientInfo;
          originalObj.clientInfo = data.clientInfo;

          setupViewOnly();
        } else {
          clientPersonalInfo.value.id = route.params.id;
          clientPersonalInfo.value.clientInfo = data.clientInfo;
          originalObj.clientInfo = data.clientInfo;
          setupViewOnly();
        }

        originalObj = toRawObject(originalObj);

        exportObj.value.fullName = `${clientPersonalInfo.value.clientInfo.firstName} ${clientPersonalInfo.value.clientInfo.middleName} ${clientPersonalInfo.value.clientInfo.lastName}`;
        exportObj.value.age = clientPersonalInfo.value.clientInfo.age;
        exportObj.value.sex = clientPersonalInfo.value.clientInfo.sex;
        exportObj.value.category = clientPersonalInfo.value.clientInfo.category;
        exportObj.value.educAttn = clientPersonalInfo.value.clientInfo.educAttn;
        exportObj.value.status = `${
          clientPersonalInfo.value.clientInfo.educAttn === true
            ? "Active"
            : "Inactive"
        }`;
        exportObj.value.condition = `${
          clientPersonalInfo.value.clientInfo.condition === "Others"
            ? clientPersonalInfo.value.clientInfo.conditionOthers
            : clientPersonalInfo.value.clientInfo.condition
        }`;
        (exportObj.value.roof = `${
          clientPersonalInfo.value.clientInfo.materials.roof === "Others"
            ? clientPersonalInfo.value.clientInfo.materials.roofOthers
            : clientPersonalInfo.value.clientInfo.materials.roof
        }`),
          (exportObj.value.wall = `${
            clientPersonalInfo.value.clientInfo.materials.wall === "Others"
              ? clientPersonalInfo.value.clientInfo.materials.wallOthers
              : clientPersonalInfo.value.clientInfo.materials.wall
          }`);
        exportObj.value.floor = `${
          clientPersonalInfo.value.clientInfo.materials.floor === "Others"
            ? clientPersonalInfo.value.clientInfo.materials.floorOthers
            : clientPersonalInfo.value.clientInfo.materials.floor
        }`;
      }
    });

    const lackingErr = ref(false);
    const readOnly = ref(false);
    const textField = ref(false);
    const editMode = ref(true);
    const updateMode = ref(false);
    const addMode = ref(true);
    const showAlert = ref(false);

    let originalObj = {
      clientInfo: {},
    };
    const clientPersonalInfo = ref({
      clientInfo: {
        active: true,
        interviewDate: "",
        firstName: "",
        middleName: "",
        lastName: "",
        status: "Single",
        age: "",
        sex: "Female",
        address: "",
        birthDate: "",
        birthPlace: "",
        religion: "",
        contactNum: "",
        educAttn: "Pre-school",
        category: "Survivor",
        condition: "Squater's Shanty",
        conditionOthers: "",
        materials: {
          roof: "Nipa",
          roofOthers: "",
          wall: "Nipa",
          wallOthers: "",
          floor: "Soil",
          floorOthers: "",
        },
        appliances: "",
      },
    });

    const othersFields = ["condition", "materials"];
    const nestedOb = ["roof", "wall", "floor"];

    const disableClass = computed(() => {
      return authLevel.value === "Partial-Update" ? "disabled" : "";
    });

    // Functions
    function toRawObject(reactiveObj) {
      let rawObj = {};
      for (let key in reactiveObj) {
        let value = reactiveObj[key];
        if (value?.value !== undefined) {
          // If it's a ref or computed ref, use the value directly
          rawObj[key] = value.value;
        } else if (typeof value === "object" && value !== null) {
          // If it's a nested object, call toRawObject recursively
          rawObj[key] = toRawObject(value);
        } else {
          // Otherwise, just copy the value
          rawObj[key] = value;
        }
      }
      return rawObj;
    }

    const exportToPDFBasic = () => {
      const doc = new jsPDF("landscape");
      // const data = filteredArr.value;

      const headers = [
        "Full Name",
        "Age",
        "Sex",
        "Category",
        "Educational Level",
        "Status",
        "Housing Condition",
        "Roof Material",
        "Wall Material",
        "Floor Material",
      ];

      const data = [
        [
          exportObj.value.fullName,
          exportObj.value.age,
          exportObj.value.sex,
          exportObj.value.category,
          exportObj.value.educAttn,
          exportObj.value.status,
          exportObj.value.condition,
          exportObj.value.roof,
          exportObj.value.wall,
          exportObj.value.floor,
        ],
      ];

      doc.autoTable({
        head: [headers],
        body: data,
      });
      doc.save("Export.pdf");
    };

    const exportToCSV = () => {
      const headers = [
        "Full Name",
        "Age",
        "Sex",
        "Category",
        "Educational Level",
        "Status",
        "Housing Condition",
        "Roof Material",
        "Wall Material",
        "Floor Material",
      ];

      const data = [
        [
          exportObj.value.fullName,
          exportObj.value.age,
          exportObj.value.sex,
          exportObj.value.category,
          exportObj.value.educAttn,
          exportObj.value.status,
          exportObj.value.condition,
          exportObj.value.roof,
          exportObj.value.wall,
          exportObj.value.floor,
        ],
      ];

      // Convert data to CSV format
      const csvContent = `${headers.join(",")}\n${data
        .map((row) => row.join(","))
        .join("\n")}`;

      // Export as CSV file
      exportFile("Export.csv", csvContent, "text/csv");
    };

    const clearErr = () => {
      lackingErr.value = false;
    };

    const toggleAlert = () => {
      showAlert.value = !showAlert.value;
    };

    const setupViewOnly = () => {
      textField.value = true;
      readOnly.value = true;
      updateMode.value = false;
      editMode.value = false;
      addMode.value = false;
    };

    const setupEditMode = () => {

      if (authLevel.value !== "Admin" && authLevel.value !== "Full-Update") {
        toggleAlert();
      } else {
        textField.value = false;
        editMode.value = true;
        updateMode.value = true;
      }
    };

    const setupCancelEdit = () => {
      textField.value = true;
      editMode.value = false;
      updateMode.value = false;
      addMode.value = true;
    };

    const validate = () => {
      for (const field in clientPersonalInfo.value.clientInfo) {
        if (field == "age") {
          if (clientPersonalInfo.value.clientInfo[field] <= 0) {
            return false;
          } else {
            continue;
          }
        } else if (
          field !== "materials" &&
          field !== "conditions" &&
          field !== "conditionOthers"
        ) {
          if (
            clientPersonalInfo.value.clientInfo[field] === "" ||
            typeof clientPersonalInfo.value.clientInfo[field] === "number"
          ) {
            return false;
          }
        }
      }
      return true;
    };

    const submitPersonInfo = () => {
      for (const field of othersFields) {
        if (field !== "materials") {
          if (clientPersonalInfo.value.clientInfo.condition !== "Others") {
            clientPersonalInfo.value.clientInfo.conditionOthers = "";
          } else {
            if (
              clientPersonalInfo.value.clientInfo.conditionOthers.trim() === ""
            ) {
              lackingErr.value = true;
              return;
            }
          }
        } else {
          for (const subField of nestedOb) {
            const property = `${subField}Others`;
            if (
              clientPersonalInfo.value.clientInfo.materials[subField] !==
              "Others"
            ) {
              clientPersonalInfo.value.clientInfo.materials[property] == "";
            } else {
              if (
                clientPersonalInfo.value.clientInfo.materials[
                  property
                ].trim() === ""
              ) {
                lackingErr.value = true;
                return;
              }
            }
          }
        }
      }

      if (validate()) {
        if (updateMode.value === false) {
          emit("clientInfoSubmit", clientPersonalInfo.value.clientInfo);
        } else {
          const origObj = JSON.stringify(originalObj.clientInfo);
          const newObj = JSON.stringify(clientPersonalInfo.value.clientInfo);

          if (origObj !== newObj) {
            emit("clientInfoUpdate", clientPersonalInfo.value.clientInfo);
            setupViewOnly();
          } else {
            setupViewOnly();
          }
        }
      } else {
        lackingErr.value = true;
      }
    };

    return {
      exportToPDFBasic,
      exportToCSV,
      lackingErr,
      clearErr,
      clientPersonalInfo,
      submitPersonInfo,
      textField,
      editMode,
      readOnly,
      updateMode,
      setupEditMode,
      setupCancelEdit,
      showAlert,
      toggleAlert,
      disableClass,
      AlertBox,
      textDetails,
      addMode,
    };
  },
};
</script>
