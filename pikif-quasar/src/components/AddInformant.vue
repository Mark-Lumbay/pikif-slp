<template>
  <div>
    <div class="flex w-full mb-6"></div>
    <div class="flex flex-row">
      <div class="w-full h-full">
        <form>
          <div class="flex flex-wrap -mx-3 mb-4 w-full justify-center mt-6">
            <p
              class="block uppercase tracking-wide text-gray-700 font-bold mb-2 text-lg"
            >
              Informant Personal Information
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
                v-model="informantPersonalInfo.informantInfo.firstName"
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
                v-model="informantPersonalInfo.informantInfo.middleName"
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
                v-model="informantPersonalInfo.informantInfo.lastName"
                :disabled="textField"
              />
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-4">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
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
                v-model="informantPersonalInfo.informantInfo.address"
                :disabled="textField"
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
                v-model="informantPersonalInfo.informantInfo.age"
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
                v-model="informantPersonalInfo.informantInfo.interviewDate"
                :disabled="textField"
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
                  v-model="occupation"
                  :disabled="textField"
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

            <div class="w-full md:w-1/6 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-birth-place"
              >
                Others:
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border focus:border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-birth-place"
                type="text"
                placeholder="Specify job"
                v-model="occupationOthers"
                :disabled="occupation != 'Others'"
              />
            </div>
          </div>

          <div class="flex flex-wrap w-full justify-center -mx-3 mb-4">
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
                v-model="informantPersonalInfo.informantInfo.birthPlace"
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
                v-model="informantPersonalInfo.informantInfo.birthDate"
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
                  v-model="informantPersonalInfo.informantInfo.status"
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
                  v-model="informantPersonalInfo.informantInfo.sex"
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
                  v-model="informantPersonalInfo.informantInfo.educAttn"
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
                v-model="informantPersonalInfo.informantInfo.religion"
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
                v-model="informantPersonalInfo.informantInfo.contactNum"
                :disabled="textField"
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
                  v-model="informantPersonalInfo.informantInfo.employment"
                  :disabled="textField"
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
                  v-model="informantPersonalInfo.informantInfo.employmentStat"
                  :disabled="textField"
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
                  v-model="informantPersonalInfo.informantInfo.income.type"
                  :disabled="textField"
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
                placeholder="Income Amount"
                v-model="informantPersonalInfo.informantInfo.income.amount"
                :disabled="textField"
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
                v-model="informantPersonalInfo.informantInfo.employerName"
                :disabled="textField"
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
                v-model="informantPersonalInfo.informantInfo.workAdd"
                :disabled="textField"
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
                  v-model="informantPersonalInfo.informantInfo.assistance"
                  :disabled="textField"
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
                  v-model="otherInc"
                  :disabled="textField"
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
                :disabled="otherInc != 'Others'"
                v-model="otherIncOthers"
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
                v-model="informantPersonalInfo.informantInfo.monthlyInc"
                :disabled="textField"
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

          <div class="flex flex-wrap justify-center -mx-3 mb-4">
            <div class="px-3 mb-6 md:mb-0">
              <q-checkbox
                v-for="(checkbox, key) in checkBoxes"
                :key="key"
                v-model="checkbox.checked"
                :disable="textField"
              >
                {{ checkbox.text }}
              </q-checkbox>
            </div>

            <div class="w-full md:w-1/5 mb-6 md:mb-0">
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-overall"
                type="text"
                placeholder="Specify Other Problems:"
                v-model="checkBoxesOthers"
                :disabled="!checkBoxes[7].checked"
              />
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
      <div class="flex w-full justify-end space-x-4" v-if="!readOnly">
        <button
          class="bg-primaryRed mb-2 w-[12vw] hover:bg-primaryRedHover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-14 transition-all ease-in-out"
          @click.prevent="backBtn"
        >
          Back
        </button>
        <button
          class="bg-btnGreen mb-2 w-[12vw] hover:bg-btnGreenHover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-14 transition-all ease-in-out"
          @click.prevent="submitInformantInfo"
        >
          Next
        </button>
      </div>

      <div class="flex w-full justify-end" v-if="readOnly && !editMode">
        <button
          class="bg-primaryBtn mb-2 w-[12vw] hover:bg-primaryHovBtn text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-14 transition-all ease-in-out"
          @click.prevent="setupEditMode"
        >
          Edit
        </button>
      </div>

      <div class="flex w-full justify-end space-x-4 mt-4" v-if="editMode">
        <button
          class="bg-primaryRed mb-2 w-[12vw] hover:bg-primaryRedHover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-14 transition-all ease-in-out"
          @click.prevent="setupCancelEdit"
        >
          Cancel
        </button>

        <button
          class="bg-btnGreen mb-2 w-[12vw] hover:bg-btnGreenHover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-14 transition-all ease-in-out"
          @click.prevent="submitInformantInfo"
        >
          Update
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, defineEmits, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { getOneStudent } from "../services/services";

export default {
  emits: ["informantInfoSubmit", "goBack", "informantInfoUpdate"],
  props: {
    withProp: {
      type: Object,
      required: false,
    },
  },

  setup(props, { emit }) {
    const store = useStore();
    const route = useRoute();
    const probs = [];

    onMounted(async () => {
      if (props.withProp) {
        let data = await store.dispatch("getClientInfo", route.params.id);

        if (!data) {
          const data = await getOneStudent(route.params.id);
          informantPersonalInfo.value.id = route.params.id;
          informantPersonalInfo.value.informantInfo = data.informantInfo;
          setupViewOnly();
        } else {
          informantPersonalInfo.value.id = route.params.id;
          informantPersonalInfo.value.informantInfo = data.informantInfo;
          setupViewOnly();
        }

        // 1. Get probs from object and store in array
        for (const key in informantPersonalInfo.value.informantInfo.probs) {
          probs.push(informantPersonalInfo.value.informantInfo.probs[key]);
        }

        // 2. Find probs in the checkboxes array
        probs.forEach((findText) => {
          const entry = checkBoxes.value.find((item) => item.text === findText);
          if (entry) {
            // 3. Update the checked value accordingly
            entry.checked = true;
          }
        });

        // Changing informantInfo.props banck to being computed property
        informantPersonalInfo.value.informantInfo.probs = computed(() => {
          const othersCheckbox = checkBoxes.value.find(
            (checkbox) => checkbox.text === "Others"
          );
          if (othersCheckbox && othersCheckbox.checked) {
            return [
              ...checkBoxes.value,
              { text: checkBoxesOthers.value, checked: true },
            ]
              .filter(
                (checkbox) => checkbox.checked && checkbox.text !== "Others"
              )
              .map((checkbox) => checkbox.text);
          }

          return checkBoxes.value
            .filter(
              (checkbox) => checkbox.checked && checkbox.text !== "Others"
            )
            .map((checkbox) => checkbox.text);
        });
      }
    });

    const lackingErr = ref(false);
    const readOnly = ref(false);
    const textField = ref(false);
    const editMode = ref(false);
    const updateMode = ref(false);

    const occupation = ref("Laborer");
    const occupationOthers = ref("");

    const otherInc = ref("Laborer");
    const otherIncOthers = ref("");

    const housingCond = ref("Squater's Shanty");
    const housingOthers = ref("");

    const roofMats = ref("Nipa");
    const roofOthers = ref("");

    const wallMats = ref("Nipa");
    const wallOthers = ref("");

    const floorMats = ref("Soil");
    const floorOthers = ref("");

    const educAss = ref(false);

    const checkBoxes = ref([
      { text: "Educational Assistance", checked: false },
      { text: "Capital Assistance", checked: false },
      { text: "Food Assistance", checked: false },
      { text: "Medical Assistance", checked: false },
      { text: "Temporary Shelter", checked: false },
      { text: "Hospital Bills", checked: false },
      { text: "Financial Aid", checked: false },
      { text: "Others", checked: false },
    ]);
    const checkBoxesOthers = ref("");

    const informantPersonalInfo = ref({
      informantInfo: {
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
        occupation: computed(() => {
          return occupation.value == "Others"
            ? occupationOthers.value
            : occupation.value;
        }),
        income: {
          type: "Fixed",
          amount: "",
        },
        employment: "Employed",
        employmentStat: "Permanent",
        employerName: "",
        workAdd: "",
        educAttn: "Pre-school",
        assistance: "4P's",
        otherInc: "Laborer",
        monthlyInc: "",
        probs: computed(() => {
          const othersCheckbox = checkBoxes.value.find(
            (checkbox) => checkbox.text === "Others"
          );
          if (othersCheckbox && othersCheckbox.checked) {
            return [
              ...checkBoxes.value,
              { text: checkBoxesOthers.value, checked: true },
            ]
              .filter(
                (checkbox) => checkbox.checked && checkbox.text !== "Others"
              )
              .map((checkbox) => checkbox.text);
          }

          return checkBoxes.value
            .filter(
              (checkbox) => checkbox.checked && checkbox.text !== "Others"
            )
            .map((checkbox) => checkbox.text);
        }),
      },
    });

    // Functions
    const clearErr = () => {
      lackingErr.value = false;
    };

    const setupViewOnly = () => {
      textField.value = true;
      readOnly.value = true;
      updateMode.value = false;
      editMode.value = false;
    };

    const setupEditMode = () => {
      textField.value = false;
      editMode.value = true;
      updateMode.value = true;
    };

    const setupCancelEdit = () => {
      textField.value = true;
      editMode.value = false;
      updateMode.value = false;
    };

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

    const validate = () => {
      for (const field in informantPersonalInfo.value.informantInfo) {
        if (field == "age" || field == "monthlyInc" || field == "amount") {
          if (informantPersonalInfo.value.informantInfo[field] <= 0) {
            return false;
          } else {
            continue;
          }
        } else {
          if (
            informantPersonalInfo.value.informantInfo[field] === "" ||
            typeof informantPersonalInfo.value.informantInfo[field] === "number"
          ) {
            return false;
          }
        }
      }
      return true;
    };

    const submitInformantInfo = () => {
      if (validate()) {
        const plainObj = toRawObject(informantPersonalInfo.value.informantInfo);
        if (updateMode.value == false) {
          emit("informantInfoSubmit", plainObj);
        } else {
          setupViewOnly();
          console.log(typeof checkBoxes.value);
          emit("informantInfoUpdate", plainObj);
        }
      } else {
        lackingErr.value = true;
      }
    };

    const backBtn = () => {
      emit("goBack");
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
      informantPersonalInfo,
      submitInformantInfo,
      occupation,
      occupationOthers,
      otherInc,
      otherIncOthers,
      checkBoxes,
      backBtn,
      checkBoxesOthers,
      readOnly,
      textField,
      editMode,
      updateMode,
      setupEditMode,
      setupCancelEdit,
    };
  },
};
</script>
