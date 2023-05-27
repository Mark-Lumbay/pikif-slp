<template>
  <div>
    <div class="flex flex-row w-[65vw] h-[70vh] overflow-y-auto">
      <div class="w-full">
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
                  v-model="informantPersonalInfo.informantInfo.occupation"
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
                v-model="informantPersonalInfo.informantInfo.occupationOthers"
                :disabled="
                  !editMode ||
                  informantPersonalInfo.informantInfo.occupation !== 'Others'
                "
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
                  v-model="informantPersonalInfo.informantInfo.otherInc"
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
                :disabled="
                  !editMode ||
                  informantPersonalInfo.informantInfo.otherInc !== 'Others'
                "
                v-model="informantPersonalInfo.informantInfo.otherIncOthers"
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
                placeholder="Income Amount"
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
                v-model="informantPersonalInfo.informantInfo.probsOthers"
                :disabled="!checkBoxes[7].checked || !editMode"
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
          @click.prevent="submitInformantInfo"
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
  emits: ["informantInfoSubmit", "goBack", "informantInfoUpdate"],
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
    const probs = [];
    const authLevel = ref("");
    const exportObj = ref([]);
    const fullName = ref("");
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
          informantPersonalInfo.value.id = route.params.id;
          informantPersonalInfo.value.informantInfo = data.informantInfo;
          originalObj.value.informantInfo = data.informantInfo;

          fullName.value = `${data.clientInfo.firstName} ${data.clientInfo.middleName} ${data.clientInfo.lastName}`;
          setupViewOnly();
        } else {
          informantPersonalInfo.value.id = route.params.id;
          informantPersonalInfo.value.informantInfo = data.informantInfo;
          originalObj.value.informantInfo = data.informantInfo;

          fullName.value = `${data.clientInfo.firstName} ${data.clientInfo.middleName} ${data.clientInfo.lastName}`;
          setupViewOnly();
        }

        exportObj.value.clientName = fullName.value;
        exportObj.value.informantName = `${informantPersonalInfo.value.informantInfo.firstName} ${informantPersonalInfo.value.informantInfo.middleName} ${informantPersonalInfo.value.informantInfo.lastName}`;
        exportObj.value.age = informantPersonalInfo.value.informantInfo.age;
        exportObj.value.sex = informantPersonalInfo.value.informantInfo.sex;
        exportObj.value.educAttn =
          informantPersonalInfo.value.informantInfo.educAttn;
        exportObj.value.occupation = `${
          informantPersonalInfo.value.informantInfo.occupation === "Others"
            ? informantPersonalInfo.value.informantInfo.occupationOthers
            : informantPersonalInfo.value.informantInfo.occupation
        }`;
        exportObj.value.income = `${informantPersonalInfo.value.informantInfo.income.type}: ${informantPersonalInfo.value.informantInfo.income.amount} `;
        exportObj.value.probs = Object.values(
          informantPersonalInfo.value.informantInfo.probs
        ).join(", ");
        exportObj.value.assistance =
          informantPersonalInfo.value.informantInfo.assistance;

        console.log(exportObj.value);

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
          } else {
            checkBoxes.value.find((checkbox) => {
              if (checkbox.text === "Others") {
                checkbox.checked = true;
              }
            });
            informantPersonalInfo.value.informantInfo.probsOthers = findText;
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

    const originalObj = ref({
      informantInfo: {},
    });

    const lackingErr = ref(false);
    const readOnly = ref(false);
    const textField = ref(false);
    const editMode = ref(true);
    const updateMode = ref(false);
    const showAlert = ref(false);

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
    const addMode = ref(true);

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
    const othersFields = ["occupation", "otherInc"];

    const informantPersonalInfo = ref({
      informantInfo: {
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
        occupation: "Laborer",
        occupationOthers: "",
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
        otherIncOthers: "",
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
        probsOthers: "",
      },
    });

    const disableClass = computed(() => {
      return authLevel.value === "Partial-Update" ? "disabled" : "";
    });

    // Functions
    const exportToPDFBasic = () => {
      const doc = new jsPDF("landscape");
      // const data = filteredArr.value;

      const headers = [
        "Client Name",
        "Informant Name",
        "Age",
        "Sex",
        "Educational Level",
        "Occupation",
        "Income",
        "Problems Presented",
        "Assistance Gained",
      ];

      const data = [
        [
          exportObj.value.clientName,
          exportObj.value.informantName,
          exportObj.value.age,
          exportObj.value.sex,
          exportObj.value.educAttn,
          exportObj.value.occupation,
          exportObj.value.income,
          exportObj.value.probs,
          exportObj.value.assistance,
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
        "Client Name",
        "Informant Name",
        "Age",
        "Sex",
        "Educational Level",
        "Occupation",
        "Income",
        "Problems Presented",
        "Assistance Gained",
      ];

      const data = [
        [
          exportObj.value.clientName,
          exportObj.value.informantName,
          exportObj.value.age,
          exportObj.value.sex,
          exportObj.value.educAttn,
          exportObj.value.occupation,
          exportObj.value.income,
          `"${exportObj.value.probs}"`,
          exportObj.value.assistance,
        ],
      ];

      const csvContent = `${headers.join(",")}\n${data
        .map((row) => row.join(","))
        .join("\n")}`;

      exportFile("Export.csv", csvContent, "text/csv");
    };

    const toggleAlert = () => {
      showAlert.value = !showAlert.value;
    };

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
        } else if (
          field !== "occupationOthers" &&
          field !== "otherIncOthers" &&
          field !== "probsOthers"
        ) {
          if (
            informantPersonalInfo.value.informantInfo[field] === "" ||
            typeof informantPersonalInfo.value.informantInfo[field] === "number"
          ) {
            console.log(field);
            return false;
          }
        }
      }
      return true;
    };

    const submitInformantInfo = () => {
      for (const field of othersFields) {
        const property = `${field}Others`;
        if (informantPersonalInfo.value.informantInfo[field] !== "Others") {
          informantPersonalInfo.value.informantInfo[property] = "";
        } else {
          if (
            informantPersonalInfo.value.informantInfo[property].trim() === ""
          ) {
            lackingErr.value = true;
            return;
          }
        }
      }

      const othersCheckbox = checkBoxes.value.find(
        (checkbox) => checkbox.text === "Others"
      );

      if (othersCheckbox && !othersCheckbox.checked) {
        informantPersonalInfo.value.informantInfo.probsOthers = "";
      } else {
        if (
          informantPersonalInfo.value.informantInfo.probsOthers.trim() === ""
        ) {
          lackingErr.value = true;
          return;
        }
      }

      // if (informantPersonalInfo.value.informantInfo.occupation !== "Others") {
      //   informantPersonalInfo.value.informantInfo.occupationOthers = "";
      // }

      // if (informantPersonalInfo.value.informantInfo.otherInc !== "Others") {
      //   informantPersonalInfo.value.informantInfo.otherIncOthers = "";
      // }

      // const othersCheckbox = checkBoxes.value.find(
      //   (checkbox) => checkbox.text === "Others"
      // );

      // if (othersCheckbox && !othersCheckbox.checked) {
      //   informantPersonalInfo.value.informantInfo.probsOthers = "";
      // }

      if (validate()) {
        const plainObj = toRawObject(informantPersonalInfo.value.informantInfo);
        if (
          originalObj.value.informantInfo !==
          informantPersonalInfo.value.informantInfo
        ) {
          emit(
            `${
              updateMode.value === false
                ? "informantInfoSubmit"
                : "informantInfoUpdate"
            }`,
            plainObj
          );
        }
        if (updateMode.value === true) setupViewOnly();
      } else {
        lackingErr.value = true;
      }
    };

    const backBtn = () => {
      emit("goBack");
    };

    return {
      educAss,
      exportToPDFBasic,
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
      toggleAlert,
      showAlert,
      AlertBox,
      disableClass,
      textDetails,
      exportToCSV,
      addMode,
    };
  },
};
</script>
