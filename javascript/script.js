document.documentElement.style.setProperty('--light-color', '#FFF');
document.documentElement.style.setProperty('--dark-color', '#282828');
document.documentElement.style.setProperty('--header-bg-color', '#f3f3f3');
document.documentElement.style.setProperty('--header-bg-text-color', '#f0f0f0');



// Get a reference to the checkbox with the ID "nightswitch"
const nightSwitch = document.getElementById('nightswitch');

// Add an event listener to the checkbox that listens for changes in its state
nightSwitch.addEventListener('change', function() {

  // Check if the checkbox is checked
  if (this.checked) {

    // If it is checked, set the values of the --primary-color and --secondary-color CSS variables to new values
    document.documentElement.style.setProperty('--light-color', '#FFF');
    document.documentElement.style.setProperty('--dark-color', '#282828');
    document.documentElement.style.setProperty('--header-bg-color', '#f3f3f3');
    document.documentElement.style.setProperty('--header-bg-text-color', '#f0f0f0');

  } else {

    // If it's not checked, set the values of the --primary-color and --secondary-color CSS variables back to the original values
    document.documentElement.style.setProperty('--light-color', '#282828');
    document.documentElement.style.setProperty('--dark-color', '#FFF');
    document.documentElement.style.setProperty('--header-bg-color', '#252525');
    document.documentElement.style.setProperty('--header-bg-text-color', '#242424');
    
  }
});
