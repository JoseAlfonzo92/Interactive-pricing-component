// Get necessary elements from the DOM
const slider = document.getElementById('slider');
const pageviewsDisplay = document.getElementById('pageviews');
const priceNumberDisplay = document.getElementById('price-number');
const priceDisplay = document.getElementById('price');
const toggle = document.getElementById('billing-toggle');

// Pageview ranges and corresponding prices
const pricingData = [
  { pageviews: '10K', price: 8 },
  { pageviews: '50K', price: 12 },
  { pageviews: '100K', price: 16 },
  { pageviews: '500K', price: 24 },
  { pageviews: '1M', price: 36 }
];

// Update price and pageviews display based on slider and toggle
function updatePricing() {
  // slider value ranges from 1 to 5
  const value = slider.value - 1; 
  let price = pricingData[value].price;
  const pageviews = pricingData[value].pageviews;

  // Apply 25% discount if yearly billing is selected
  if (toggle.checked) {
    price = (price * 0.75).toFixed(2);
  } else {
    // Ensure two decimal places even when toggle is off
    price = price.toFixed(2); 
  }

  // Update price and pageviews display
  priceNumberDisplay.innerText = price; // Update only the number
  priceDisplay.innerHTML = `<span id="price-number">$${price}</span> ${toggle.checked ? '/year' : '/month'}`;
  pageviewsDisplay.innerText = `${pageviews} Pageviews`;
}

// Event listeners for updating pricing on input change
slider.addEventListener('input', updatePricing);
toggle.addEventListener('change', updatePricing);

// Initialize with default values
updatePricing();

// Get the range input element for the slider bar background effect
const rangeInput = document.querySelector('#slider-bar input[type="range"]');

// Update the background gradient of the slider bar
function updateBackground() {
  const value = (rangeInput.value - rangeInput.min) / (rangeInput.max - rangeInput.min) * 100;
  rangeInput.style.background = `linear-gradient(to right, var(--Strong-Cyan-) 0%, var(--Strong-Cyan-) ${value}%, var(--Soft-Cyan-) ${value}%, var(--Soft-Cyan-) 100%)`;
}

// Update the background on input and on initial load
rangeInput.addEventListener('input', updateBackground);
window.addEventListener('load', updateBackground);
