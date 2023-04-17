<template>
  <div
    class="w-full h-full flex flex-row items-center justify-center overflow-x-hidden"
  >
    <div
      class="w-[55%] h-full bg-[url('../assets/bg.png')] bg-center bg-no-repeat bg-cover"
    ></div>

    <div class="w-full h-full">
      <div class="w-full h-[25%] flex">
        <div class="w-full h-full flex justify-end items-center px-6">
          <img src="../assets/logo_banner_2.jpg" />
        </div>
      </div>
      <div class="w-full px-52">
        <div class="mb-12 w-full text-center">
          <h1 class="text-4xl font-semibold">Create an Account</h1>
        </div>
        <div class="outline-2 w-full flex justify-center">
          <form class="w-[80%]">
            <div class="mb-6 space-y-2">
              <label class="block font-semibold" for="email">First Name</label>
              <input
                class="shadow appearance-none border rounded h-14 py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="fName"
                placeholder="Enter First Name"
              />
            </div>

            <div class="mb-6 space-y-2">
              <label class="block font-semibold" for="email">Last Name</label>
              <input
                class="shadow appearance-none border rounded h-14 py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="lName"
                type="password"
                placeholder="Enter Last Name"
              />
            </div>

            <div class="mb-6 space-y-2">
              <label class="block font-semibold" for="email">Email</label>
              <input
                class="shadow appearance-none border rounded h-14 py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                type="password"
                placeholder="Enter Email"
              />
            </div>

            <div class="mb-6 space-y-2">
              <label class="block font-semibold" for="email">Password</label>
              <input
                class="shadow appearance-none border rounded h-14 py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                type="password"
                placeholder="Enter Password"
              />
            </div>

            <div class="mb-6 space-y-2">
              <label class="block font-semibold" for="email"
                >Confirm Password</label
              >
              <input
                class="shadow appearance-none border rounded h-14 py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                type="password"
                placeholder="Re-enter Password"
              />
            </div>

            <div class="mb-2 space-y-2 mt-14">
              <button
                class="bg-primaryBtn mb-2 hover:bg-primaryHovBtn text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full h-14 transition-all ease-in-out"
              >
                Sign Up
              </button>

              <button
                class="bg-primaryBtn mb-2 hover:bg-primaryHovBtn text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full h-14 transition-all ease-in-out"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>
