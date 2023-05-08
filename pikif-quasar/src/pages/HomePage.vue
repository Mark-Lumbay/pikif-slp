<template>
  <div class="flex w-full space-y-4">
    <div
      class="flex w-full h-[10vh] bg-white shadow-md sm:rounded-lg items-center px-6"
    >
      <div class="flex w-[50%]">
        <p class="font-semibold text-2xl">
          Welcome back, {{ props.userName }}!
        </p>
      </div>
      <div class="flex w-[50%] justify-end">
        <p class="text-xl">Monday, May 8, 2023</p>
      </div>

      <div class="flex"></div>
    </div>

    <div
      class="relative overflow-x-auto shadow-md sm:rounded-lg w-[55vw] h-[70vh] p-6 bg-white"
    >
      <div class="flex w-full h-[5vh] items-center mb-4">
        <div class="w-[50%] flex">
          <p class="font-semibold text-lg">Dashboard</p>
        </div>

        <div class="w-[50%] flex justify-end">
          <form>
            <div class="border-b-2">
              <input
                type="text"
                placeholder="Search student"
                class="w-80 h-10 p-3 rounded-l text-gray-700 focus:outline-none focus:shadow-outline"
              />

              <button
                class="w-12 h-10 rounded-r focus:outline-none focus:shadow-outline"
              >
                <q-icon
                  class="las la-search text-btnGreen"
                  size="32px"
                ></q-icon>
              </button>
            </div>
          </form>
        </div>
      </div>
      <table
        class="sm:rounded-lg w-full text-sm text-left text-gray-500 dark:text-gray-400"
      >
        <thead class="text-xs text-white uppercase bg-primaryRed">
          <tr>
            <th scope="col" class="px-6 py-3">Product name</th>
            <th scope="col" class="px-6 py-3">Color</th>
            <th scope="col" class="px-6 py-3">Category</th>
            <th scope="col" class="px-6 py-3">Price</th>
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b bg-gray-500">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4">Silver</td>
            <td class="px-6 py-4">Laptop</td>
            <td class="px-6 py-4">$2999</td>
            <td class="px-6 py-4">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >Edit</a
              >
            </td>
          </tr>
          <tr
            class="border-b bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Microsoft Surface Pro
            </th>
            <td class="px-6 py-4">White</td>
            <td class="px-6 py-4">Laptop PC</td>
            <td class="px-6 py-4">$1999</td>
            <td class="px-6 py-4">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >Edit</a
              >
            </td>
          </tr>
          <tr
            class="border-b bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Magic Mouse 2
            </th>
            <td class="px-6 py-4">Black</td>
            <td class="px-6 py-4">Accessories</td>
            <td class="px-6 py-4">$99</td>
            <td class="px-6 py-4">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >Edit</a
              >
            </td>
          </tr>
        </tbody>
      </table>
      <nav
        class="flex items-center justify-between pt-4 bg-gray-700"
        aria-label="Table navigation"
      >
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400"
          >Showing
          <span class="font-semibold text-gray-900 dark:text-white">1-10</span>
          of
          <span class="font-semibold text-gray-900 dark:text-white"
            >1000</span
          ></span
        >
        <ul class="inline-flex items-center -space-x-px">
          <li>
            <a
              href="#"
              class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span class="sr-only">Previous</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >1</a
            >
          </li>
          <li>
            <a
              href="#"
              class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >2</a
            >
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              class="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >3</a
            >
          </li>
          <li>
            <a
              href="#"
              class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >...</a
            >
          </li>
          <li>
            <a
              href="#"
              class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >100</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span class="sr-only">Next</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <div
      class="shadow-md sm:rounded-lg flex-1 h-[40vh] p-6 bg-white ml-4"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
    },
  },

  setup(props) {
    return {
      props,
    };
  },
};
</script>
