const selectAllCheckbox = document.getElementById('select-all');
const rowCheckboxes = document.querySelectorAll('.row-checkbox');

selectAllCheckbox.addEventListener('change', function () {
  const isChecked = this.checked;
  rowCheckboxes.forEach(checkbox => {
    checkbox.checked = isChecked;
  });
});

// Update "Select All" checkbox state based on row checkboxes
rowCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function () {
    const allChecked = Array.from(rowCheckboxes).every(cb => cb.checked);
    selectAllCheckbox.checked = allChecked;
  });
});
// checkbox to select all

// order table action btn toggle
document.addEventListener("DOMContentLoaded", () => {
  const dropdownButtons = document.querySelectorAll(".dropdown-toggle");

  dropdownButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent dropdown from closing immediately
      const dropdownMenu = button.nextElementSibling;
      dropdownMenu.classList.toggle("active");
    });
  });

  const dropdownItems = document.querySelectorAll(".dropdown-item");
  dropdownItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      const status = item.dataset.status;
      const button = item.closest(".dropdown-container").querySelector(".action-btn");
      button.innerHTML = `${item.textContent} <i class="fa-solid fa-angle-down"></i>`;

      // Update dropdown menu state
      item.closest(".dropdown-menu").classList.remove("active");
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown-menu").forEach((menu) => {
      menu.classList.remove("active");
    });
  });
});

document.querySelector('.order-filter-btn').addEventListener('click', function () {
  const filterMenu = document.querySelector('.order-filter-menu');

  if (filterMenu.classList.contains('d-none')) {
    // Remove the class if it exists
    filterMenu.classList.add('d-block');
    filterMenu.classList.remove('d-none');
  } else {
    // Add the class if it does not exist
    filterMenu.classList.add('d-none');
    filterMenu.classList.remove('d-block');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const filterBtn = document.querySelector('.order-filter-btn');
  const filterMenu = document.querySelector('.order-filter-menu');

  // Show or hide the filter menu on button click
  filterBtn.addEventListener('click', function (event) {
    filterMenu.classList.toggle('d-block');
    event.stopPropagation(); // Prevent click event from propagating to document
  });

  // Close filter menu when clicking outside
  document.addEventListener('click', function (event) {
    if (
      !filterMenu.contains(event.target) && // Click is outside the filter menu
      !filterBtn.contains(event.target)    // Click is outside the filter button
    ) {
      filterMenu.classList.remove('d-block'); // Hide the filter menu
      filterMenu.classList.add('d-none'); // Hide the filter menu
    }
  });
});

document.querySelector('.data-filter-btn').addEventListener('click', function () {
  const filterMenu = document.querySelector('.data-filter-menu');

  if (filterMenu.classList.contains('d-none')) {
    // Remove the class if it exists
    filterMenu.classList.add('d-block');
    filterMenu.classList.remove('d-none');
  } else {
    // Add the class if it does not exist
    filterMenu.classList.add('d-none');
    filterMenu.classList.remove('d-block');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const filterBtn = document.querySelector('.data-filter-btn');
  const filterMenu = document.querySelector('.data-filter-menu');

  // Show or hide the filter menu on button click
  filterBtn.addEventListener('click', function (event) {
    filterMenu.classList.toggle('d-block');
    event.stopPropagation(); // Prevent click event from propagating to document
  });

  // Close filter menu when clicking outside
  document.addEventListener('click', function (event) {
    if (
      !filterMenu.contains(event.target) && // Click is outside the filter menu
      !filterBtn.contains(event.target)    // Click is outside the filter button
    ) {
      filterMenu.classList.remove('d-block'); // Hide the filter menu
      filterMenu.classList.add('d-none'); // Hide the filter menu
    }
  });
});


