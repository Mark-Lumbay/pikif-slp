<template>
  <div class="flex w-full mb-6"></div>
  <div class="flex flex-row">
    <div class="w-full">
      <form>
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
              v-model="clientInfo.firstName"
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
              v-model="clientInfo.middleName"
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
              v-model="clientInfo.lastName"
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
              v-model="clientInfo.address"
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
              type="text"
              placeholder="Age"
              v-model="clientInfo.age"
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
                v-model="clientInfo.category"
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
              v-model="clientInfo.birthPlace"
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
                v-model="clientInfo.status"
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
                v-model="clientInfo.sex"
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
              v-model="clientInfo.appliances"
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
                v-model="clientInfo.educAttn"
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
              v-model="clientInfo.religion"
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
              v-model="clientInfo.contactNum"
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
                v-model="clientInfo.condition"
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
              :disabled="clientInfo.condition != 'Others'"
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
                v-model="clientInfo.materials.roof"
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
              :disabled="clientInfo.materials.roof != 'Others'"
              v-model="roofOthers"
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
                v-model="clientInfo.materials.walls"
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
              :disabled="clientInfo.materials.walls != 'Others'"
              v-model="wallOthers"
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
                v-model="clientInfo.materials.floor"
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
              :disabled="clientInfo.materials.floor != 'Others'"
              v-model="floorOthers"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  setup() {
    const clientInfo = ref({
      active: "",
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
      condition: "Squater's Shanty",
      materials: {
        roof: "Nipa",
        walls: "Nipa",
        floor: "Soil",
      },
      appliances: "",
    });

    const housingOthers = ref("");
    const housingCond = ref("Squater's Shanty");

    const roofMats = ref("Nipa");
    const roofOthers = ref("");

    const wallMats = ref("Nipa");
    const wallOthers = ref("");

    const floorMats = ref("Soil");
    const floorOthers = ref("");

    return {
      housingOthers,
      housingCond,
      roofMats,
      roofOthers,
      wallMats,
      wallOthers,
      floorMats,
      floorOthers,
      clientInfo,
    };
  },
};
</script>
