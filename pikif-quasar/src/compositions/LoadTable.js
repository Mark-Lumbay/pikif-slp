import { ref } from "vue";

export default function useServerPagination() {
  const data = ref([]);
  const totalItems = ref(0);
  const currentPage = ref(1);
  const itemsPerPage = ref(10); // Number of items to display per page

  async function fetchData() {
    // Fetch data from the server using an API call or any other method
    // Update the `data`, `totalItems`, and other relevant variables
  }

  function onPageChange(page) {
    currentPage.value = page;
    fetchData();
  }

  return {
    data,
    totalItems,
    currentPage,
    itemsPerPage,
    onPageChange,
  };
}
