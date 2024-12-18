 
//  stock js
 document.addEventListener('DOMContentLoaded', function() {
  const quantityInput = document.getElementById('quantityStock');
  const incrementButton = document.getElementById('increment');
  const decrementButton = document.getElementById('decrement');

  // Increment function
  incrementButton.addEventListener('click', function() {
    let currentValue = parseInt(quantityInput.value, 10);
    quantityInput.value = currentValue + 1;
  });

  // Decrement function
  decrementButton.addEventListener('click', function() {
    let currentValue = parseInt(quantityInput.value, 10);
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
    }
  });
});


// slect category

document.addEventListener('DOMContentLoaded', function() {
  const dropdownIcons = document.querySelectorAll('.dropdown-icon');
  const dropdownMenus = document.querySelectorAll('.dropdown-menu');

  dropdownIcons.forEach((icon, index) => {
    icon.addEventListener('click', function(event) {
      event.stopPropagation(); // Prevent event from bubbling up
      dropdownMenus[index].classList.toggle('show');
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', function(event) {
    dropdownMenus.forEach(menu => {
      if (!event.target.closest('.custom-input')) {
        menu.classList.remove('show');
      }
    });
  });

  // Handle item selection from dropdown
  dropdownMenus.forEach(menu => {
    menu.addEventListener('click', function(event) {
      if (event.target.tagName === 'LI') {
        const inputId = menu.previousElementSibling.id;
        document.getElementById(inputId).value = event.target.textContent;
        menu.classList.remove('show');
      }
    });
  });
});

// toggle icon
document.addEventListener('DOMContentLoaded', function() {
  // Toggle Discount Section
  document.getElementById('discountToggle').addEventListener('click', function() {
    toggleSection('discountToggleSection');
  });

  // Toggle Expiry Date Section
  document.getElementById('DateToggle').addEventListener('click', function() {
    toggleSection('expiryDateToggleSection');
  });

  // Function to toggle sections
  function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const content = section.querySelector('.toggle-content');
    const icon = section.querySelector('.toggle-icon');

    content.classList.toggle('d-none');
    icon.classList.toggle('fa-toggle-on');

    // Handle dropdown toggle for discount options
    const dropdownIcon = section.querySelector('.dropdown-icon');
    const dropdownMenu = section.querySelector('.dropdown-menu');
    dropdownIcon.addEventListener('click', function() {
      dropdownMenu.classList.toggle('show');
    });
  }
});

