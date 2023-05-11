<template>
  <div class="flex w-full mb-6"></div>
  <div class="flex flex-row">
    <div class="w-full">
      <form>
        <div class="flex flex-wrap -mx-3 mb-4 w-full justify-center mt-6">
          <p
            class="block uppercase tracking-wide text-gray-700 font-bold mb-2 text-lg"
          >
            Personal Information
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
            />
            <!-- <p class="text-red-500 text-xs italic">
              Please fill out this field.
            </p> -->
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
            />
          </div>
          <div class="w-full md:w-1/6 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-occupation"
            >
              Occupation
            </label>
            <div class="relative">
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-occupation"
                v-model="clientPersonalInfo.clientInfo.category"
              >
                <option value="Laborer">Laborer</option>
                <option value="Vendor">Vendor</option>
                <option value="Driver">Driver</option>
                <option value="Waste Picker">Waste Picker</option>
                <option value="Housekeeper">Housekeeper</option>
                <option value="Street Sweeper">Street Sweeper</option>
                <option value="Carpenter">Carpenter</option>
                <option value="Repairmen">Repairmen</option>
                <option value="None">None</option>
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
            />
          </div>
        </div>

        <div class="flex flex-wrap w-full justify-center -mx-3 mb-4">
          <div class="w-full md:w-1/5 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-educ"
            >
              Educational Attainment
            </label>
            <div class="relative">
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-educ"
                v-model="clientPersonalInfo.clientInfo.educAttn"
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
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-4 w-full justify-center mt-8">
          <p
            class="block uppercase tracking-wide text-gray-700 font-bold mb-2 text-lg"
          >
            Economic Background
          </p>
        </div>

        <div class="flex flex-wrap -mx-3 mb-4 justify-center">
          <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-roof"
            >
              Employment Type
            </label>
            <div class="relative">
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-roof"
                v-model="roofMats"
              >
                <option value="Employed">Employed</option>
                <option value="Self-Employed">Self-Employed</option>
                <option value="Unemployed">Unemployed</option>
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

          <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0 border-r-2">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-wall"
            >
              Employment Status
            </label>
            <div class="relative">
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-wall"
                v-model="wallMats"
              >
                <option value="Permanent">Permanent</option>
                <option value="Casual">Casual</option>
                <option value="Temporary">Temporary</option>
                <option value="Contractual">Contractual</option>
                <option value="On Call">On Call</option>
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

          <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-housing"
            >
              Income Type:
            </label>
            <div class="relative">
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-housing"
                v-model="housingCond"
              >
                <option value="Fixed">Fixed</option>
                <option value="Irregular">Irregular</option>
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
          <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-housing-others"
            >
              Amount:
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-other"
              type="text"
              placeholder="Other options"
              :disabled="clientPersonalInfo.clientInfo.condition != 'Others'"
              v-model="housingOthers"
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-4">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-employer"
            >
              Employer
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border focus:border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-employer"
              type="text"
              placeholder="Employer/Agency Name"
              v-model="clientPersonalInfo.clientInfo.religion"
            />
          </div>

          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-address-job"
            >
              Address of Job
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-address-job"
              type="text"
              placeholder="Job Address"
              v-model="clientPersonalInfo.clientInfo.contactNum"
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-4 justify-center">
          <div class="w-full md:w-1/5 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-roof"
            >
              Government Assistance Received
            </label>
            <div class="relative">
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-roof"
                v-model="roofMats"
              >
                <option value="4P's">4P's</option>
                <option value="MCCT">MCCT</option>
                <option value="MDG">MDG</option>
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
              for="grid-occupation"
            >
              Secondary Income Source
            </label>
            <div class="relative">
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-occupation"
                v-model="clientPersonalInfo.clientInfo.category"
              >
                <option value="Laborer">Laborer</option>
                <option value="Vendor">Vendor</option>
                <option value="Driver">Driver</option>
                <option value="Waste Picker">Waste Picker</option>
                <option value="Housekeeper">Housekeeper</option>
                <option value="Street Sweeper">Street Sweeper</option>
                <option value="Carpenter">Carpenter</option>
                <option value="Repairmen">Repairmen</option>
                <option value="None">None</option>
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
              for="grid-roof-others"
            >
              Others:
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-roof-others"
              type="text"
              placeholder="Other options"
              :disabled="wallMats != 'Others'"
              v-model="wallOthers"
            />
          </div>

          <div class="w-full md:w-1/5 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-overall"
            >
              Overall Monthly Family Income
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-overall"
              type="text"
              placeholder="Job Address"
              v-model="clientPersonalInfo.clientInfo.contactNum"
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-4 w-full justify-center mt-8">
          <p
            class="block uppercase tracking-wide text-gray-700 font-bold mb-2 text-lg"
          >
            Problems Presented
          </p>
        </div>

        <div class="flex flex-wrap w-full justify-center -mx-3 mb-4">
          <div class="inline-flex px-3 mb-6 md:mb-0">
            <q-checkbox v-model="educAss">Educational Assistance</q-checkbox>
          </div>

          <div class="inline-flex px-3 mb-6 md:mb-0">
            <q-checkbox v-model="educAss">Capital Assistance</q-checkbox>
          </div>

          <div class="inline-flex px-3 mb-6 md:mb-0">
            <q-checkbox v-model="educAss">Food Assistance</q-checkbox>
          </div>

          <div class="inline-flex px-3 mb-6 md:mb-0">
            <q-checkbox v-model="educAss">Medical Assistance</q-checkbox>
          </div>
        </div>

        <div class="flex flex-wrap w-full justify-center -mx-3 mb-4">
          <div class="inline-flex px-3 mb-6 md:mb-0">
            <q-checkbox v-model="educAss">Temporary Shelter</q-checkbox>
          </div>

          <div class="inline-flex px-3 mb-6 md:mb-0">
            <q-checkbox v-model="educAss">Hospital Bills</q-checkbox>
          </div>

          <div class="inline-flex px-3 mb-6 md:mb-0">
            <q-checkbox v-model="educAss">Financial Aid</q-checkbox>
          </div>

          <div class="inline-flex px-3 mb-6 md:mb-0">
            <q-checkbox v-model="educAss">Others</q-checkbox>
          </div>
        </div>
      </form>
    </div>
    <div
      class="mb-5 w-full bg-red-500 p-2 text-white font-semibold rounded"
      @click.prevent="clearErr"
      v-if="lackingErr"
    >
      <h3 class="text-sm">Please fill all the fields</h3>
    </div>
    <div class="flex w-full justify-end">
      <button
        class="bg-btnGreen mb-2 w-[12vw] hover:bg-btnGreenHover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-14 transition-all ease-in-out"
        @click.prevent="submitPersonInfo"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import { ref, defineEmits, computed } from "vue";
export default {
  emits: ["clientInfoSubmit"],

  setup(_, { emit }) {
    const lackingErr = ref(false);

    const housingCond = ref("Squater's Shanty");
    const housingOthers = ref("");

    const roofMats = ref("Nipa");
    const roofOthers = ref("");

    const wallMats = ref("Nipa");
    const wallOthers = ref("");

    const floorMats = ref("Soil");
    const floorOthers = ref("");

    const educAss = ref(true);

    const clientPersonalInfo = ref({
      clientInfo: {
        active: true,
        interviewDate: "",
        firstName: "",
        middleName: "",
        lastName: "",
        status: "Single",
        age: 0,
        sex: "Female",
        address: "",
        birthDate: "",
        birthPlace: "",
        religion: "",
        contactNum: "",
        educAttn: "Pre-school",
        category: "Survivor",
        condition: computed(() => {
          return housingCond.value === "Others"
            ? housingOthers.value
            : housingCond.value;
        }),
        materials: {
          roof: computed(() => {
            return roofMats.value == "Others"
              ? roofOthers.value
              : roofMats.value;
          }),
          walls: computed(() => {
            return wallMats.value == "Others"
              ? wallOthers.value
              : wallMats.value;
          }),
          floor: computed(() => {
            return floorMats.value == "Others"
              ? floorOthers.value
              : floorMats.value;
          }),
        },
        appliances: "",
      },
    });

    // Functions
    const clearErr = () => {
      lackingErr.value = false;
    };

    const validate = () => {
      for (const field in clientPersonalInfo.value) {
        if (field == "age") {
          if (clientPersonalInfo.value[field] <= 0) {
            return false;
          } else {
            continue;
          }
        } else {
          if (
            clientPersonalInfo.value[field] === "" ||
            typeof clientPersonalInfo.value[field] === "number"
          ) {
            return false;
          }
        }
      }
      return true;
    };

    const submitPersonInfo = () => {
      if (validate()) {
        emit("clientInfoSubmit", clientPersonalInfo.value);
      } else {
        lackingErr.value = true;
      }
    };

    return {
      educAss,
      lackingErr,
      clearErr,
      housingOthers,
      housingCond,
      roofMats,
      roofOthers,
      wallMats,
      wallOthers,
      floorMats,
      floorOthers,
      clientPersonalInfo,
      submitPersonInfo,
    };
  },
};
</script>
