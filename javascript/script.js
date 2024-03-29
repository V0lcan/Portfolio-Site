// NIGHTMODE SWITCH
// Setting standard color values for the css variables
document.documentElement.style.setProperty('--light-color', '#FFF');
document.documentElement.style.setProperty('--dark-color', '#282828');
document.documentElement.style.setProperty('--header-bg-color', '#f3f3f3');
document.documentElement.style.setProperty('--header-bg-text-color', '#eceaea');

// Get a reference to the checkbox with the ID "nightswitch"
const nightSwitch = document.getElementById('nightswitch');

// Event listener to the checkbox that listens for changes in its state
nightSwitch.addEventListener('change', function() {

  // Is the checkbox checked?
  if (this.checked) {

    // If it is checked, set the values of the CSS variables to these values
    document.documentElement.style.setProperty('--light-color', '#FFF');
    document.documentElement.style.setProperty('--dark-color', '#282828');
    document.documentElement.style.setProperty('--header-bg-color', '#f3f3f3');
    document.documentElement.style.setProperty('--header-bg-text-color', '#eceaea');

  } else {

    // If it's not checked, set the values of the CSS variables to these values
    document.documentElement.style.setProperty('--light-color', '#282828');
    document.documentElement.style.setProperty('--dark-color', '#FFF');
    document.documentElement.style.setProperty('--header-bg-color', '#252525');
    document.documentElement.style.setProperty('--header-bg-text-color', '#242424');
    
  }
});
