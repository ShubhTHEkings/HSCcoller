// Product Features Toggle Functionality

document.addEventListener('DOMContentLoaded', function () {
    // Initialize Read More functionality for all product cards
    initReadMoreFeatures();
});

function initReadMoreFeatures() {
    // Get all read more buttons
    const readMoreButtons = document.querySelectorAll('.readmore-btn');

    // Add click event listener to each button
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();

            // Get the parent product card
            const productCard = this.closest('.product-card');

            // Find or create the features section
            let featuresSection = productCard.querySelector('.features');

            // If features section doesn't exist, create it
            if (!featuresSection) {
                featuresSection = createFeaturesSection(productCard);
            }

            // Toggle the visibility of the features section
            featuresSection.classList.toggle('show');

            // Change button text based on state
            if (featuresSection.classList.contains('show')) {
                this.innerHTML = '<i class="fas fa-minus-circle"></i> Show Less';
            } else {
                this.innerHTML = '<i class="fas fa-info-circle"></i> Read More';
            }
        });
    });
}

function createFeaturesSection(productCard) {
    // Get product information
    const productName = productCard.querySelector('h3').textContent;

    // Get features from the specs list
    const specsList = productCard.querySelector('.specs-list');
    const features = Array.from(specsList.querySelectorAll('li')).map(li => li.textContent);

    // Create features section
    const featuresSection = document.createElement('div');
    featuresSection.className = 'features';

    // For Premium Exclusive Desert Cooler, add the energy efficient design feature
    if (productName === "Premium Exclusive Desert Cooler") {
        featuresSection.innerHTML = `
            <h2>${productName} - Features</h2>
            <ul class="specs-list">
                <li><i class="fas fa-check-circle"></i> High performance motor</li>
                <li><i class="fas fa-check-circle"></i> Sleek steel body</li>
                <li><i class="fas fa-check-circle"></i> Large 50L water tank</li>
                <li><i class="fas fa-check-circle"></i> Energy efficient design</li>
            </ul>
        `;
    } else {
        // For all other products, just show their existing features
        featuresSection.innerHTML = `
            <h2>${productName} - Features</h2>
            <ul class="specs-list">
                ${features.map(feature => `<li><i class="fas fa-check-circle"></i> ${feature.replace(/^[\u2713✓•●\s-]*/, "").trim()}</li>`).join('')}
            </ul>
        `;
    }

    // Append the features section to the product card
    productCard.querySelector('.product-info').appendChild(featuresSection);

    return featuresSection;
}