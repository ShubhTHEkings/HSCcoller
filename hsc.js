document.addEventListener('DOMContentLoaded', () => {
    // Form submission handling
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = form.name.value.trim();
            const email = form.email.value.trim();
            const phone = form.phone.value.trim();
            const message = form.message.value.trim();
            if (!name || !email || !phone || !message) {
                alert('Please fill in all fields.');
                return;
            }
            const subject = encodeURIComponent('New Inquiry from HSC Coolers');
            const body = encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
            );
            window.location.href = `mailto:shubhamgangurde000@gmail.com?subject=${subject}&body=${body}`;
            showToast('Message sent successfully!');
            form.reset();
        });
    }

    // Ultra-realistic Animated Cooler Enhancement
    const animatedCoolers = document.querySelectorAll('.animated-cooler');

    // Fan blade animation and configuration
    const fanBlades = document.querySelectorAll('.fan-blade');
    const fanContainers = document.querySelectorAll('.cooler-fan');

    // Apply animations to all fan containers
    fanContainers.forEach((fan, index) => {
        // Generate a slightly random speed for more realism
        const speed = 2.5 + (Math.random() * 1.5) + (index * 0.2);
        // Apply continuous rotation animation
        fan.style.animation = `fan-rotate ${speed}s infinite linear, fan-wobble 7s ease-in-out infinite`;
    });

    // Make all animated coolers visible by default (overriding CSS display:none)
    animatedCoolers.forEach((cooler, index) => {
        cooler.style.display = 'block';

        // Add additional animation effects for specific cooler parts
        const fan = cooler.querySelector('.cooler-fan');
        const waterLevel = cooler.querySelector('.water-level');
        const airWaves = cooler.querySelectorAll('.air-wave');
        const mistParticles = cooler.querySelectorAll('.mist-particle');
        const waterBubbles = cooler.querySelectorAll('.water-bubble');
        const breezeParticles = cooler.querySelectorAll('.breeze-particle');
        const moistureDrops = cooler.querySelectorAll('.moisture-drop');
        const sliderKnob = cooler.querySelector('.slider-knob');

        // Create fan blades if they don't exist
        if (fan && !fan.querySelector('.fan-blade')) {
            // Create 6 fan blades for a realistic fan appearance
            for (let i = 0; i < 6; i++) {
                const blade = document.createElement('div');
                blade.className = 'fan-blade';
                // Position each blade with proper rotation
                blade.style.transform = `translate(0%, -50%) rotate(${i * 60}deg) translateZ(${i * 0.3}px)`;
                fan.appendChild(blade);
            }

            // Add fan center hub
            const fanCenter = document.createElement('div');
            fanCenter.className = 'fan-center';
            fan.appendChild(fanCenter);
        }

        // Slightly randomize fan speed for more realistic feel
        if (fan) {
            // Different speed for each cooler to make them look independently realistic
            const speed = 2.5 + (Math.random() * 1) + (index * 0.2);
            // combine continuous rotation with subtle wobble
            fan.style.animation = `fan-rotate ${speed}s infinite linear, fan-wobble 7s ease-in-out infinite`;
        }

        // Activate water bubbles with different delays and positions
        if (waterBubbles) {
            waterBubbles.forEach((bubble, i) => {
                bubble.style.opacity = '0.7';
                bubble.style.animationDelay = `${i * 1.7 + Math.random()}s`;
                // Randomize bubble positions for more realism
                bubble.style.left = `${10 + Math.random() * 80}%`;
            });
        }

        // Add floating effect to mist particles with different delays
        if (mistParticles) {
            mistParticles.forEach((particle, i) => {
                particle.style.opacity = '1';
                particle.style.animationDelay = `${i * 0.3}s`;
                // Slightly randomize size for more realism
                const size = 12 + Math.random() * 6;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
            });
        }

        // Activate air waves with different delays and variations
        if (airWaves) {
            airWaves.forEach((wave, i) => {
                wave.style.opacity = '1';
                wave.style.animationDelay = `${i * 0.7}s`;
                // Add slight randomness to wave height for more realism
                const height = 15 + Math.random() * 10;
                wave.style.height = `${height}px`;
            });
        }

        // Activate breeze particles
        if (breezeParticles) {
            breezeParticles.forEach((particle, i) => {
                particle.style.opacity = '0.3';
                particle.style.animationDelay = `${i * 2.5}s`;
                // Randomize vertical position
                particle.style.top = `${20 + Math.random() * 60}%`;
            });
        }

        // Make moisture droplets more realistic
        if (moistureDrops) {
            moistureDrops.forEach((drop, i) => {
                // Random position for each drop
                drop.style.top = `${10 + Math.random() * 70}%`;
                drop.style.left = `${5 + Math.random() * 90}%`;
                // Random rotation
                drop.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;

                // Create a drip animation for random drops
                if (Math.random() > 0.7) {
                    drop.style.animation = `drip ${5 + Math.random() * 10}s infinite`;
                }
            });
        }

        // Randomize control slider knob position
        if (sliderKnob) {
            const position = Math.random() * 20;
            sliderKnob.style.left = `${position}px`;
        }

        // Start water level animation with slight variations for each cooler
        if (waterLevel) {
            // Different animation timing for each cooler
            waterLevel.style.animation = `water-move ${4 + index * 0.5}s ease-in-out infinite alternate`;

            // Randomize the water height slightly for each cooler
            const waterHeight = 65 + Math.random() * 10;
            waterLevel.style.height = `${waterHeight}%`;
        }
    });

    // Add slight pulse effect to cooler bodies to simulate operation
    document.querySelectorAll('.cooler-body').forEach(body => {
        body.style.animation = 'breathe 8s ease-in-out infinite';
    });

    // Simulate slight vibration in the cooler when fan is running
    setInterval(() => {
        animatedCoolers.forEach(cooler => {
            // Generate random tiny movements
            const xOffset = Math.random() * 0.6 - 0.3;
            const yOffset = Math.random() * 0.6 - 0.3;

            const container = cooler.querySelector('.cooler-container');
            if (container) {
                // Apply subtle random vibration
                const currentTransform = window.getComputedStyle(container).transform;
                if (currentTransform === 'none' || !currentTransform.includes('rotateX')) {
                    container.style.transform = `rotateX(5deg) translateX(${xOffset}px) translateY(${yOffset}px)`;
                } else {
                    // Preserve the rotation but add vibration
                    container.style.transform = `${currentTransform} translateX(${xOffset}px) translateY(${yOffset}px)`;
                }
            }
        });
    }, 100);

    // Enhanced fan controls for the featured fan slide
    const enhancedSpeedSlider = document.getElementById('enhancedSpeedSlider');
    const enhancedBladeSizeSlider = document.getElementById('enhancedBladeSizeSlider');
    const enhancedSpeedValue = document.getElementById('enhancedSpeedValue');
    const enhancedBladeSizeValue = document.getElementById('enhancedBladeSizeValue');
    const enhancedCoolerFan = document.getElementById('enhancedCoolerFan');

    if (enhancedSpeedSlider && enhancedCoolerFan) {
        enhancedSpeedSlider.addEventListener('input', (e) => {
            const speed = e.target.value;
            enhancedCoolerFan.style.animation = `fan-rotate ${8 / speed}s infinite linear, fan-wobble 7s ease-in-out infinite`;

            // Update display text
            if (speed < 2) enhancedSpeedValue.textContent = "Low Speed";
            else if (speed < 4) enhancedSpeedValue.textContent = "Medium Speed";
            else if (speed < 6) enhancedSpeedValue.textContent = "High Speed";
            else enhancedSpeedValue.textContent = "Turbo Speed";
        });
    }

    if (enhancedBladeSizeSlider) {
        enhancedBladeSizeSlider.addEventListener('input', (e) => {
            const size = e.target.value;
            const blades = enhancedCoolerFan.querySelectorAll('.fan-blade');

            blades.forEach(blade => {
                blade.style.width = `${size}%`;
            });

            // Update display text
            if (size < 30) enhancedBladeSizeValue.textContent = "Compact Size";
            else if (size < 40) enhancedBladeSizeValue.textContent = "Normal Size";
            else if (size < 45) enhancedBladeSizeValue.textContent = "Large Size";
            else enhancedBladeSizeValue.textContent = "Maximum Size";
        });
    }
});

// Enhanced HSC Cooler Fan functionality
document.addEventListener('DOMContentLoaded', function () {
    // Initialize the enhanced fan display when DOM is loaded
    initEnhancedFan();

    // Update carousel dots for the new slide
    const carouselDots = document.querySelectorAll('.carousel-dot');
    const totalSlides = document.querySelectorAll('.carousel-slide').length;

    // Make sure we have the right number of dots
    if (carouselDots.length < totalSlides) {
        const dotsContainer = document.querySelector('.carousel-nav');
        for (let i = carouselDots.length; i < totalSlides; i++) {
            const newDot = document.createElement('div');
            newDot.className = 'carousel-dot';
            newDot.setAttribute('data-slide', i);
            newDot.addEventListener('click', function () {
                showSlide(i);
            });
            dotsContainer.appendChild(newDot);
        }
    }
});

// Initialize enhanced fan with interactive controls
function initEnhancedFan() {
    const enhancedFan = document.getElementById('enhancedCoolerFan');
    if (!enhancedFan) return;

    const speedSlider = document.getElementById('enhancedSpeedSlider');
    const bladeSizeSlider = document.getElementById('enhancedBladeSizeSlider');
    const speedValue = document.getElementById('enhancedSpeedValue');
    const bladeSizeValue = document.getElementById('enhancedBladeSizeValue');
    const fanBlades = enhancedFan.querySelectorAll('.fan-blade');

    // Set initial rotation animation
    enhancedFan.style.animation = 'fan-rotate 3s linear infinite';

    // Enhanced wobble effect with 3D perspective
    enhancedFan.style.transform = 'perspective(1000px) rotateX(5deg)';

    // Handle speed slider changes
    if (speedSlider) {
        speedSlider.addEventListener('input', function () {
            const speed = this.value;
            const duration = 10 / speed; // Convert slider value to animation duration

            // Update fan rotation speed
            enhancedFan.style.animation = `fan-rotate ${duration}s linear infinite`;

            // Update display text based on speed
            if (speed < 2) {
                speedValue.textContent = "Low Speed";
            } else if (speed < 5) {
                speedValue.textContent = "Medium Speed";
            } else if (speed < 7) {
                speedValue.textContent = "High Speed";
            } else {
                speedValue.textContent = "Turbo Speed";
            }

            // Adjust wobble intensity based on speed
            const wobbleIntensity = Math.min(speed / 8, 1) * 3;
            enhancedFan.style.animation = `fan-rotate ${duration}s linear infinite, fan-wobble ${7 - wobbleIntensity}s ease-in-out infinite`;
        });
    }

    // Handle blade size slider changes
    if (bladeSizeSlider) {
        bladeSizeSlider.addEventListener('input', function () {
            const size = this.value;

            // Update fan blade sizes
            fanBlades.forEach(blade => {
                blade.style.width = size + '%';
                // Keep proportion but adjust height slightly for realistic look
                blade.style.height = (size / 4) + '%';
            });

            // Update display text based on blade size
            if (size < 30) {
                bladeSizeValue.textContent = "Compact Size";
            } else if (size < 40) {
                bladeSizeValue.textContent = "Normal Size";
            } else if (size < 45) {
                bladeSizeValue.textContent = "Large Size";
            } else {
                bladeSizeValue.textContent = "Maximum Size";
            }
        });
    }
}

// Existing carousel functionality - we'll add to this
function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');

    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Remove active class from all dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });

    // Show the selected slide and activate the dot
    slides[index].classList.add('active');
    dots[index].classList.add('active');

    // If this is the enhanced fan slide, ensure the fan is initialized
    if (slides[index].querySelector('#enhancedCoolerFan')) {
        // Reset fan animation to ensure it starts properly when the slide becomes active
        const enhancedFan = document.getElementById('enhancedCoolerFan');
        const speedSlider = document.getElementById('enhancedSpeedSlider');
        if (enhancedFan && speedSlider) {
            const speed = speedSlider.value;
            const duration = 10 / speed;
            enhancedFan.style.animation = 'none';
            setTimeout(() => {
                enhancedFan.style.animation = `fan-rotate ${duration}s linear infinite, fan-wobble 7s ease-in-out infinite`;
            }, 10);
        }
    }
}

// Initialize carousel navigation
document.addEventListener('DOMContentLoaded', function () {
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    const dots = document.querySelectorAll('.carousel-dot');
    let currentSlide = 0;
    const totalSlides = document.querySelectorAll('.carousel-slide').length;

    if (prevBtn && nextBtn) {
        // Previous slide button
        prevBtn.addEventListener('click', function () {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlide(currentSlide);
        });

        // Next slide button
        nextBtn.addEventListener('click', function () {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        });
    }

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function () {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Auto-advance slides every 5 seconds
    setInterval(function () {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }, 5000);

    // Show first slide initially
    showSlide(0);
});

// Enhanced Ultra-Realistic Cooler Animations - 2025 Edition

document.addEventListener('DOMContentLoaded', function () {
    // Initialize all animated coolers on the page
    initializeAnimatedCoolers();

    // Initialize enhanced fan display with controls
    initializeEnhancedFan();

    // Initialize additional effects
    initializeWaterEffects();
    initializeDustParticles();
    initializeMistParticles();
    initializeAirWaves();
    initializeSoundWaves();
    initializeMoistureDrops();

    // Add interactive control button functionality
    setupControlButtons();

    // Add dynamic speed control based on scroll position
    window.addEventListener('scroll', adjustFanSpeedOnScroll);
});

// Initialize all animated coolers
function initializeAnimatedCoolers() {
    // Select all cooler fans
    const coolerFans = document.querySelectorAll('.cooler-fan');

    // Initialize each cooler fan with randomized wobble and speed variations
    coolerFans.forEach(fan => {
        // Skip the enhanced cooler fan which is handled separately
        if (fan.id === 'enhancedCoolerFan') return;

        // Apply rotation animation with slight speed variation for realism
        const randomSpeed = 6 + Math.random() * 2; // 6-8 seconds per rotation
        fan.style.animation = `fan-rotate ${randomSpeed}s infinite linear`;

        // Apply subtle wobble effect
        fan.parentElement.style.animation = 'fan-wobble 5s infinite ease-in-out';

        // Add physics-based momentum to blades
        const blades = fan.querySelectorAll('.fan-blade');
        blades.forEach(blade => {
            // Slightly random blade appearance for realism
            blade.style.filter = `brightness(${0.95 + Math.random() * 0.1})`;
        });
    });
}

// Initialize the enhanced fan with interactive controls
function initializeEnhancedFan() {
    const enhancedFan = document.getElementById('enhancedCoolerFan');
    if (!enhancedFan) return;

    const speedSlider = document.getElementById('enhancedSpeedSlider');
    const speedValue = document.getElementById('enhancedSpeedValue');
    const bladeSizeSlider = document.getElementById('enhancedBladeSizeSlider');
    const bladeSizeValue = document.getElementById('enhancedBladeSizeValue');

    if (speedSlider && speedValue) {
        // Set initial fan speed
        updateFanSpeed(speedSlider.value);

        // Update speed when slider changes
        speedSlider.addEventListener('input', function () {
            updateFanSpeed(this.value);
        });
    }

    if (bladeSizeSlider && bladeSizeValue) {
        // Set initial blade size
        updateBladeSize(bladeSizeSlider.value);

        // Update blade size when slider changes
        bladeSizeSlider.addEventListener('input', function () {
            updateBladeSize(this.value);
        });
    }

    // Initialize blades with proper angles
    const blades = enhancedFan.querySelectorAll('.fan-blade');
    blades.forEach((blade, index) => {
        const angle = (index * 60) % 360;
        blade.style.transform = `translate(0%, -50%) rotate(${angle}deg) translateZ(${index * 0.3}px)`;
    });
}

// Update the fan speed based on slider value
function updateFanSpeed(value) {
    const enhancedFan = document.getElementById('enhancedCoolerFan');
    const speedValue = document.getElementById('enhancedSpeedValue');

    if (!enhancedFan || !speedValue) return;

    // Convert slider value to animation duration (lower value = faster rotation)
    const duration = 10 - value; // Invert scale so higher value = faster fan

    // Apply the animation with new duration
    enhancedFan.style.animation = `fan-rotate ${duration}s infinite linear`;

    // Update display text
    if (value < 2.5) {
        speedValue.textContent = "Low Speed";
    } else if (value < 5.5) {
        speedValue.textContent = "Medium Speed";
    } else {
        speedValue.textContent = "High Speed";
    }

    // Update air wave and mist particle animation speed
    updateAirEffects(value);
}

// Update blade size based on slider value
function updateBladeSize(value) {
    const enhancedFan = document.getElementById('enhancedCoolerFan');
    const bladeSizeValue = document.getElementById('enhancedBladeSizeValue');

    if (!enhancedFan || !bladeSizeValue) return;

    // Update all blades with new size
    const blades = enhancedFan.querySelectorAll('.fan-blade');
    blades.forEach(blade => {
        blade.style.width = `${value}%`;
    });

    // Update display text
    if (value < 30) {
        bladeSizeValue.textContent = "Compact Size";
    } else if (value < 40) {
        bladeSizeValue.textContent = "Normal Size";
    } else {
        bladeSizeValue.textContent = "Large Size";
    }
}

// Initialize realistic water effects
function initializeWaterEffects() {
    const waterBubbles = document.querySelectorAll('.water-bubble');

    waterBubbles.forEach((bubble, index) => {
        // Calculate random position within the water tank
        const offsetX = 10 + Math.random() * 80; // 10-90%
        const offsetY = 20 + Math.random() * 60; // 20-80%

        // Set position
        bubble.style.position = 'absolute';
        bubble.style.left = `${offsetX}%`;
        bubble.style.bottom = `${offsetY}%`;

        // Set size and appearance
        bubble.style.width = `${5 + Math.random() * 8}px`;
        bubble.style.height = bubble.style.width;
        bubble.style.borderRadius = '50%';
        bubble.style.background = 'rgba(255, 255, 255, 0.4)';

        // Add animation with delay
        bubble.style.animation = `bubble-rise ${8 + index * 2}s ${index * 1.5}s infinite ease-in-out`;
    });

    // Add keyframes for bubble animation if they don't exist
    if (!document.getElementById('water-animation-keyframes')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'water-animation-keyframes';
        styleSheet.textContent = `
            @keyframes bubble-rise {
                0%, 100% {
                    transform: translateY(0) scale(0.8);
                    opacity: 0.3;
                }
                50% {
                    transform: translateY(-20px) scale(1);
                    opacity: 0.7;
                }
            }
            
            @keyframes water-surface-shimmer {
                0%, 100% {
                    opacity: 0.3;
                    transform: translateX(-5px);
                }
                50% {
                    opacity: 0.7;
                    transform: translateX(5px);
                }
            }
        `;
        document.head.appendChild(styleSheet);
    }
}

// Initialize dust particles with realistic movement
function initializeDustParticles() {
    const dustParticles = document.querySelectorAll('.dust-particle');

    dustParticles.forEach((particle, index) => {
        // Calculate initial position
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;

        // Set position and style
        particle.style.position = 'absolute';
        particle.style.left = `${startX}%`;
        particle.style.top = `${startY}%`;
        particle.style.opacity = '0';

        // Set random size for varied appearance
        const size = 1 + Math.random() * 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Add animation with delay for realistic dust distribution
        particle.style.animation = `dust-float ${10 + Math.random() * 5}s ${index * 2.5}s infinite`;
    });
}

// Initialize mist particles with realistic behavior
function initializeMistParticles() {
    const mistParticles = document.querySelectorAll('.mist-particle');

    mistParticles.forEach((particle, index) => {
        // Position particles near the front grill
        const startX = 20 + Math.random() * 60; // 20-80%
        const startY = 40 + Math.random() * 30; // 40-70%

        // Set position and style
        particle.style.position = 'absolute';
        particle.style.left = `${startX}%`;
        particle.style.top = `${startY}%`;
        particle.style.width = `${8 + Math.random() * 12}px`;
        particle.style.height = particle.style.width;

        // Add animation with delay
        particle.style.animation = `mist-float ${12 + Math.random() * 8}s ${index * 3}s infinite`;
    });
}

// Initialize air waves animation
function initializeAirWaves() {
    const airWaves = document.querySelectorAll('.air-wave');

    airWaves.forEach((wave, index) => {
        // Offset position slightly
        wave.style.position = 'absolute';
        wave.style.top = `${30 + (index * 20)}%`;
        wave.style.right = '0';

        // Add animation with sequential delay
        wave.style.animation = `air-emit 3s ${index * 0.8}s infinite ease-out`;
    });
}

// Initialize sound waves for mechanical hum visualization
function initializeSoundWaves() {
    const soundWaves = document.querySelectorAll('.sound-wave');

    soundWaves.forEach((wave, index) => {
        // Add animation with delay
        wave.style.animation = `sound-emit 3s ${index * 1.5}s infinite ease-out`;
    });
}

// Initialize moisture drops for condensation effect
function initializeMoistureDrops() {
    const moistureDrops = document.querySelectorAll('.moisture-drop');

    moistureDrops.forEach((drop, index) => {
        // Position drops on the cooler exterior randomly
        const side = Math.random() > 0.5 ? 'left' : 'right';
        const position = 10 + Math.random() * 80;

        // Set position and style
        drop.style.position = 'absolute';
        drop.style[side] = `${position}%`;
        drop.style.bottom = `${20 + Math.random() * 60}%`;
        drop.style.width = `${2 + Math.random() * 3}px`;
        drop.style.height = `${4 + Math.random() * 6}px`;
        drop.style.background = 'rgba(255, 255, 255, 0.7)';
        drop.style.borderRadius = '50% 50% 40% 40%';

        // Add subtle shadow to enhance 3D appearance
        drop.style.boxShadow = 'inset 0 0 2px rgba(255, 255, 255, 0.8)';

        // Add water droplet animation
        drop.style.animation = `water-drop ${15 + Math.random() * 20}s ${index * 5}s infinite`;
    });

    // Add water drop animation if not already present
    if (!document.getElementById('water-drop-keyframes')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'water-drop-keyframes';
        styleSheet.textContent = `
            @keyframes water-drop {
                0% {
                    opacity: 0;
                    transform: scale(0.5);
                }
                10% {
                    opacity: 0.8;
                    transform: scale(1);
                }
                70% {
                    opacity: 0.8;
                }
                90%, 100% {
                    transform: translateY(100px) scale(0.8);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(styleSheet);
    }
}

// Setup control buttons for interactive fan control
function setupControlButtons() {
    const controlButtons = document.querySelectorAll('.control-button');

    controlButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Get the speed from the button's data attribute
            const speed = this.getAttribute('data-speed');

            // Find the closest fan element
            const coolerContainer = this.closest('.cooler-container');
            if (!coolerContainer) return;

            const fan = coolerContainer.querySelector('.cooler-fan');
            if (!fan) return;

            // Apply the appropriate speed
            let duration = 10; // Default slow speed

            
            if (speed === '1') {
                duration = 10; // Slow
                activateButton(this);
            } else if (speed === '2') {
                duration = 6; // Medium
                activateButton(this);
            } else if (speed === '3') {
                duration = 3; // Fast
                activateButton(this);
            }

            // Apply the animation
            fan.style.animation = `fan-rotate ${duration}s infinite linear`;

            // Update the LED to make it look like it's working
            const led = coolerContainer.querySelector('.led-indicator');
            if (led) {
                led.style.animation = 'led-blink 2s infinite alternate';
            }

            // Trigger air waves with intensity based on speed
            triggerAirWaves(coolerContainer, parseInt(speed));
        });
    });
}

// Activate clicked button and deactivate siblings
function activateButton(clickedButton) {
    // Find siblings
    const parent = clickedButton.parentElement;
    const siblings = parent.querySelectorAll('.control-button');

    // Reset all buttons
    siblings.forEach(button => {
        button.classList.remove('active-button');
    });

    // Activate clicked button
    clickedButton.classList.add('active-button');

    // Add active button style if not present
    if (!document.getElementById('active-button-style')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'active-button-style';
        styleSheet.textContent = `
            .active-button {
                transform: scale(0.9) !important;
                box-shadow: 
                    0 1px 2px rgba(0,0,0,0.1),
                    inset 0 1px 1px rgba(255,255,255,0.6) !important;
                background: radial-gradient(circle at 30% 30%, #e0e0e0, #a0a0a0) !important;
            }
        `;
        document.head.appendChild(styleSheet);
    }
}

// Trigger air wave animations with intensity based on fan speed
function triggerAirWaves(container, speed) {
    const airWaves = container.querySelectorAll('.air-wave');

    airWaves.forEach((wave, index) => {
        // Adjust animation duration based on speed (faster fan = faster air waves)
        const duration = 4 - (speed * 0.5);
        wave.style.animation = `air-emit ${duration}s ${index * 0.5}s infinite ease-out`;

        // Higher speeds create more visible air waves
        if (speed === 1) {
            wave.style.opacity = '0.3';
        } else if (speed === 2) {
            wave.style.opacity = '0.5';
        } else {
            wave.style.opacity = '0.7';
        }
    });

    // Also adjust mist particles if present
    const mistParticles = container.querySelectorAll('.mist-particle');
    mistParticles.forEach((particle, index) => {
        // Higher speed = more mist
        if (speed === 1) {
            particle.style.opacity = '0.3';
        } else if (speed === 2) {
            particle.style.opacity = '0.6';
        } else {
            particle.style.opacity = '0.9';
        }
    });
}

// Update air effects based on current fan speed
function updateAirEffects(speedValue) {
    const speedInt = Math.floor(speedValue);
    const airWaves = document.querySelectorAll('.cool-air .air-wave');
    const mistParticles = document.querySelectorAll('.mist-particle');

    // Update air wave animation speed
    airWaves.forEach((wave, index) => {
        const duration = 5 - (speedValue * 0.4);
        wave.style.animation = `air-emit ${duration}s ${index * 0.5}s infinite ease-out`;

        // Adjust opacity based on speed
        wave.style.opacity = `${0.2 + (speedValue * 0.06)}`;
    });

    // Update mist particles
    mistParticles.forEach(particle => {
        // Faster speed = more visible mist
        particle.style.opacity = `${0.2 + (speedValue * 0.06)}`;
    });
}

// Dynamic fan speed adjustment based on scroll position for interactive effect
function adjustFanSpeedOnScroll() {
    const scrollPosition = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollPercentage = scrollPosition / maxScroll;

    // Only apply to fans that aren't the enhanced fan
    const coolerFans = document.querySelectorAll('.cooler-fan:not(#enhancedCoolerFan)');

    coolerFans.forEach(fan => {
        // Start slow when page loads, speed up as user scrolls down
        const baseDuration = 8; // Slowest speed
        const minDuration = 3; // Fastest speed
        const speedRange = baseDuration - minDuration;

        // Calculate duration based on scroll position
        const duration = baseDuration - (speedRange * scrollPercentage);

        // Apply the animation - fans speed up as you scroll down
        fan.style.animation = `fan-rotate ${duration}s infinite linear`;

        // Also adjust wobble based on speed
        if (fan.parentElement) {
            const wobbleIntensity = 0.5 + (scrollPercentage * 0.5);
            fan.parentElement.style.animation = `fan-wobble ${5 - scrollPercentage}s infinite ease-in-out ${wobbleIntensity}s`;
        }
    });
}

// Keep track of carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.carousel-dot');

// Function to show a specific slide
function showSlide(n) {
    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Remove active class from all dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });

    // Show the current slide
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Event listeners for carousel navigation
document.getElementById('nextSlide').addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

document.getElementById('prevSlide').addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

// Event listeners for carousel dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Initialize carousel
showSlide(0);

// Auto-advance the carousel every 5 seconds
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

// Product filtering and sorting functionality
const filterInput = document.getElementById('filterInput');
const sortSelect = document.getElementById('sortSelect');
const categoryFilter = document.getElementById('categoryFilter');
const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');
const productCards = document.querySelectorAll('.product-card');

// Update price display when range slider changes
priceRange.addEventListener('input', function () {
    priceValue.textContent = this.value;
    filterProducts();
});

// Filter products based on search input
filterInput.addEventListener('input', filterProducts);

// Sort products when sorting option changes
sortSelect.addEventListener('change', filterProducts);

// Filter by category
categoryFilter.addEventListener('change', filterProducts);

// Filter products based on all criteria
function filterProducts() {
    const searchTerm = filterInput.value.toLowerCase();
    const sortValue = sortSelect.value;
    const categoryValue = categoryFilter.value;
    const maxPrice = parseInt(priceRange.value);

    // Get all products
    const products = Array.from(productCards);

    // Filter products
    const filteredProducts = products.filter(product => {
        const title = product.querySelector('h3').textContent.toLowerCase();
        const category = product.getAttribute('data-category');
        const price = parseInt(product.getAttribute('data-price'));

        // Check if product meets all criteria
        const matchesSearch = title.includes(searchTerm);
        const matchesCategory = categoryValue === 'all' || category === categoryValue;
        const matchesPrice = price <= maxPrice;

        return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort filtered products
    if (sortValue === 'price-asc') {
        filteredProducts.sort((a, b) => {
            return parseInt(a.getAttribute('data-price')) - parseInt(b.getAttribute('data-price'));
        });
    } else if (sortValue === 'price-desc') {
        filteredProducts.sort((a, b) => {
            return parseInt(b.getAttribute('data-price')) - parseInt(a.getAttribute('data-price'));
        });
    }

    // Hide all products
    products.forEach(product => {
        product.style.display = 'none';
    });

    // Show filtered products
    filteredProducts.forEach(product => {
        product.style.display = 'flex';
    });

    // Update UI to show number of results
    updateFilterResults(filteredProducts.length);
}

// Update filter results count
function updateFilterResults(count) {
    const resultsElement = document.querySelector('.filter-results');
    if (!resultsElement) {
        const container = document.querySelector('.product-filter-container');
        const newResultsElement = document.createElement('div');
        newResultsElement.className = 'filter-results';
        newResultsElement.textContent = `${count} products found`;
        container.appendChild(newResultsElement);
    } else {
        resultsElement.textContent = `${count} products found`;
    }
}

// Deal countdown timer functionality
function updateCountdown() {
    // Set a specific end date rather than relative days
    // Using fixed date ensures consistent experience for all users
    const endDate = new Date();

    // Set the end date to the end of the current week (Sunday at 11:59:59 PM)
    const dayOfWeek = endDate.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const daysUntilEndOfWeek = 7 - dayOfWeek;
    endDate.setDate(endDate.getDate() + daysUntilEndOfWeek);
    endDate.setHours(23, 59, 59, 999);

    // Get current date
    const now = new Date();

    // Calculate time remaining
    const diff = endDate - now;


    // Check if countdown has expired
    if (diff <= 0) {
        // If expired, reset countdown to next week
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';

        // Optionally update the deal with "Expired" or create a new deal
        resetDealCountdown();
        return;
    }

    // Convert to days, hours, minutes, seconds
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Update countdown display
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Reset deal countdown and refresh with a new weekly deal
function resetDealCountdown() {
    // Create new end date for next week
    const newEndDate = new Date();
    newEndDate.setDate(newEndDate.getDate() + 7);

    // Could potentially update deal details here
    // For example, change product, price, etc.
    console.log("Deal refreshed with new end date: " + newEndDate.toDateString());

    // For now, we'll just restart the countdown
    setTimeout(updateCountdown, 1000);
}

// Update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initialize countdown immediately on page load
document.addEventListener('DOMContentLoaded', function () {
    updateCountdown();

    // Add event listeners for quantity controls
    const decreaseBtn = document.getElementById('decrease');
    const increaseBtn = document.getElementById('increase');
    const quantityInput = document.getElementById('quantity');

    if (decreaseBtn && increaseBtn && quantityInput) {
        decreaseBtn.addEventListener('click', function () {
            if (quantityInput.value > 1) {
                quantityInput.value = parseInt(quantityInput.value) - 1;
            }
        });

        increaseBtn.addEventListener('click', function () {
            if (quantityInput.value < 5) {
                quantityInput.value = parseInt(quantityInput.value) + 1;
            }
        });
    }
});

// Deal price update based on size selection
function updateDealPrice(size) {
    const priceElement = document.getElementById('dealPrice');
    const originalPriceElement = document.getElementById('dealOriginalPrice');
    const savingElement = document.querySelector('.saving-badge');

    if (!priceElement || !originalPriceElement || !savingElement) return;

    let price, originalPrice, saving;

    switch (size) {
        case '2ft':
            price = 3500;
            originalPrice = 5000;
            break;
        case '2.5ft':
            price = 4500;
            originalPrice = 6000;
            break;
        case '3ft':
            price = 5500;
            originalPrice = 7000;
            break;
        default:
            price = 3500;
            originalPrice = 5000;
    }

    saving = originalPrice - price;

    priceElement.textContent = `₹${price.toLocaleString()}`;
    originalPriceElement.textContent = `₹${originalPrice.toLocaleString()}`;
    savingElement.textContent = `Save ₹${saving.toLocaleString()}`;
}

// Mobile-friendly navigation and menu handling
document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.querySelector('.nav-menu');
    const menuBackdrop = document.getElementById('menuBackdrop');

    if (menuToggle && navMenu && menuBackdrop) {
        menuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('open');
            menuBackdrop.classList.toggle('show');
            document.body.classList.toggle('no-scroll');
        });

        menuBackdrop.addEventListener('click', function () {
            navMenu.classList.remove('open');
            menuBackdrop.classList.remove('show');
            document.body.classList.remove('no-scroll');
        });

        // Close menu when clicking a menu item on mobile
        const menuItems = navMenu.querySelectorAll('a');
        menuItems.forEach(item => {
            item.addEventListener('click', function () {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('open');
                    menuBackdrop.classList.remove('show');
                    document.body.classList.remove('no-scroll');
                }
            });
        });
    }

    // Mobile bottom navigation active state
    const mobileNavLinks = document.querySelectorAll('.mobile-bottom-nav a');
    if (mobileNavLinks) {
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function () {
                mobileNavLinks.forEach(item => item.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    // Back to top button
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Sticky header with reduced size on scroll
    const header = document.getElementById('main-header');
    if (header) {
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Handle touch events better for product cards
    const productCards = document.querySelectorAll('.product-card');
    if (productCards.length > 0) {
        productCards.forEach(card => {
            const imageContainer = card.querySelector('.product-image-container');

            // Use touchend for mobile devices instead of hover
            if (imageContainer && 'ontouchstart' in window) {
                imageContainer.addEventListener('touchend', function (e) {
                    e.preventDefault();
                    const overlay = this.querySelector('.image-zoom-overlay');
                    if (overlay) {
                        // Toggle visibility on touch
                        if (overlay.style.opacity === '1') {
                            overlay.style.opacity = '0';
                        } else {
                            overlay.style.opacity = '1';
                        }
                    }
                });
            }

            // Quick view button
            const quickViewBtn = card.querySelector('.quick-view');
            if (quickViewBtn) {
                quickViewBtn.addEventListener('click', function () {
                    showQuickView(card);
                });
            }

            // Buy now button
            const buyNowBtn = card.querySelector('.buy-now');
            if (buyNowBtn) {
                buyNowBtn.addEventListener('click', function () {
                    addToCart(card);
                    showToast('Item added to cart successfully!');
                });
            }

            // Wishlist button
            const wishlistBtn = card.querySelector('.wishlist-btn');
            if (wishlistBtn) {
                wishlistBtn.addEventListener('click', function () {
                    this.classList.toggle('active');
                    this.querySelector('i').classList.toggle('fas');
                    this.querySelector('i').classList.toggle('far');

                    if (this.classList.contains('active')) {
                        showToast('Item added to wishlist!');
                    } else {
                        showToast('Item removed from wishlist!');
                    }
                });
            }
        });
    }

    // Size selector improvements for touch
    const sizeOptions = document.querySelectorAll('.size-option');
    if (sizeOptions.length > 0) {
        sizeOptions.forEach(option => {
            const input = option.querySelector('input[type="radio"]');
            const span = option.querySelector('span');

            if (span && input) {
                span.addEventListener('click', function () {
                    input.checked = true;
                    // Trigger the change event manually to update prices
                    const event = new Event('change');
                    input.dispatchEvent(event);
                });
            }
        });
    }

    // Toast notification
    window.showToast = function (message) {
        const toast = document.getElementById('addToCartToast');
        if (toast) {
            toast.textContent = message;
            toast.style.display = 'flex';

            setTimeout(() => {
                toast.style.display = 'none';
            }, 3000);
        }
    };

    // Quick view modal functionality
    function showQuickView(productCard) {
        const modal = document.getElementById('quickViewModal');
        const modalContent = document.getElementById('modalBody');
        const close = document.querySelector('.modal .close');

        if (modal && modalContent) {
            // Get product info
            const productImage = productCard.querySelector('.product-image').src;
            const productTitle = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.price').textContent;
            const productFeatures = productCard.querySelector('.specs-list').innerHTML;

            // Create modal content
            modalContent.innerHTML = `
                <div class="modal-image">
                    <img src="${productImage}" alt="${productTitle}">
                </div>
                <div class="modal-info">
                    <h3>${productTitle}</h3>
                    <div class="modal-price">${productPrice}</div>
                    <ul class="modal-features">
                        ${productFeatures}
                    </ul>
                    <button class="buy-now-modal" onclick="addToCart(null, '${productTitle}')">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            `;

            // Show modal
            modal.style.display = 'block';
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);

            // Close modal when clicking X
            if (close) {
                close.addEventListener('click', function () {
                    closeModal();
                });
            }

            // Close modal when clicking outside
            window.addEventListener('click', function (e) {
                if (e.target === modal) {
                    closeModal();
                }
            });
        }
    }

    function closeModal() {
        const modal = document.getElementById('quickViewModal');
        if (modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }
    }

    // Cart functionality
    window.addToCart = function (productCard, productTitle = null) {
        // Simple cart implementation
        let cartCount = parseInt(localStorage.getItem('cartCount') || '0');
        cartCount++;
        localStorage.setItem('cartCount', cartCount);

        // Update cart count in UI
        const cartBadge = document.querySelector('.cart-badge');
        if (cartBadge) {
            cartBadge.textContent = cartCount;
        }

        // For a real implementation, you'd add the product to the cart with more details
    };

    // Initialize cart count
    const cartBadge = document.querySelector('.cart-badge');
    if (cartBadge) {
        const cartCount = localStorage.getItem('cartCount') || '0';
        cartBadge.textContent = cartCount;
    }

    // Filter functionality for product catalog
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const categoryFilter = document.getElementById('categoryFilter');
    const sortSelect = document.getElementById('sortSelect');
    const activeFilters = document.getElementById('activeFilters');

    if (priceRange && priceValue) {
        priceRange.addEventListener('input', function () {
            priceValue.textContent = this.value;
            filterProducts();
        });
    }

    if (categoryFilter) {
        categoryFilter.addEventListener('change', function () {
            filterProducts();
            updateActiveFilters();
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', function () {
            filterProducts();
            updateActiveFilters();
        });
    }

    function filterProducts() {
        const maxPrice = priceRange ? parseFloat(priceRange.value) : 6000;
        const category = categoryFilter ? categoryFilter.value : 'all';
        const sortOption = sortSelect ? sortSelect.value : '';

        const products = document.querySelectorAll('.product-card');

        // Filter products
        products.forEach(product => {
            const productPrice = parseFloat(product.getAttribute('data-price'));
            const productCategory = product.getAttribute('data-category');

            let showProduct = true;

            // Filter by price
            if (productPrice > maxPrice) {
                showProduct = false;
            }

            // Filter by category
            if (category !== 'all' && productCategory !== category) {
                showProduct = false;
            }

            product.style.display = showProduct ? 'block' : 'none';
        });

        // Sort products
        if (sortOption) {
            const productGrid = document.querySelector('.product-grid');
            if (productGrid) {
                const visibleProducts = Array.from(products).filter(p => p.style.display !== 'none');

                if (sortOption === 'price-asc') {
                    visibleProducts.sort((a, b) =>
                        parseFloat(a.getAttribute('data-price')) - parseFloat(b.getAttribute('data-price'))
                    );
                } else if (sortOption === 'price-desc') {
                    visibleProducts.sort((a, b) =>
                        parseFloat(b.getAttribute('data-price')) - parseFloat(a.getAttribute('data-price'))
                    );
                }

                // Reorder elements
                visibleProducts.forEach(product => {
                    productGrid.appendChild(product);
                });
            }
        }
    }

    function updateActiveFilters() {
        if (!activeFilters) return;

        activeFilters.innerHTML = '';

        const category = categoryFilter ? categoryFilter.value : 'all';
        const sortOption = sortSelect ? sortSelect.value : '';

        if (category !== 'all') {
            const filterTag = document.createElement('div');
            filterTag.classList.add('filter-tag');
            filterTag.innerHTML = `Category: ${category} <span class="remove-filter" data-filter="category">&times;</span>`;
            activeFilters.appendChild(filterTag);
        }

        if (sortOption) {
            let sortText = '';
            if (sortOption === 'price-asc') sortText = 'Price: Low to High';
            if (sortOption === 'price-desc') sortText = 'Price: High to Low';
            if (sortOption === 'newest') sortText = 'Newest First';

            const filterTag = document.createElement('div');
            filterTag.classList.add('filter-tag');
            filterTag.innerHTML = `Sort: ${sortText} <span class="remove-filter" data-filter="sort">&times;</span>`;
            activeFilters.appendChild(filterTag);
        }

        // Add event listeners to remove filters
        const removeButtons = activeFilters.querySelectorAll('.remove-filter');
        removeButtons.forEach(button => {
            button.addEventListener('click', function () {
                const filterType = this.getAttribute('data-filter');

                if (filterType === 'category' && categoryFilter) {
                    categoryFilter.value = 'all';
                } else if (filterType === 'sort' && sortSelect) {
                    sortSelect.value = '';
                }

                filterProducts();
                updateActiveFilters();
            });
        });
    }

    // Pagination (if you have a lot of products)
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');
    const pageInfo = document.getElementById('pageInfo');

    // Add pagination functionality here if needed
    // For now, we'll just disable the buttons since all products fit on one page
});

// Deal price update based on size selection
function updateDealPrice(size) {
    const priceElement = document.getElementById('dealPrice');
    const originalPriceElement = document.getElementById('dealOriginalPrice');
    const savingElement = document.querySelector('.saving-badge');

    if (!priceElement || !originalPriceElement || !savingElement) return;

    let price, originalPrice, saving;

    switch (size) {
        case '2ft':
            price = 3500;
            originalPrice = 5000;
            break;
        case '2.5ft':
            price = 4500;
            originalPrice = 6000;
            break;
        case '3ft':
            price = 5500;
            originalPrice = 7000;
            break;
        default:
            price = 3500;
            originalPrice = 5000;
    }

    saving = originalPrice - price;

    priceElement.textContent = `₹${price.toLocaleString()}`;
    originalPriceElement.textContent = `₹${originalPrice.toLocaleString()}`;
    savingElement.textContent = `Save ₹${saving.toLocaleString()}`;
}

// Deal image change function
function changeDealImage(imageSrc, thumbnailElement) {
    const mainImage = document.getElementById('dealMainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');

    if (!mainImage || !thumbnails) return;

    // Change main image
    mainImage.src = imageSrc;

    // Update active thumbnail
    thumbnails.forEach(thumb => {
        thumb.classList.remove('active');
    });

    if (thumbnailElement) {
        thumbnailElement.classList.add('active');
    }
}

// Carousel functionality
document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    const total = slides.length;

    if (slides.length === 0 || dots.length === 0) return;

    // Next slide button
    const nextBtn = document.getElementById('nextSlide');
    if (nextBtn) {
        nextBtn.addEventListener('click', function () {
            currentSlide = (currentSlide + 1) % total;
            updateSlide();
        });
    }

    // Previous slide button
    const prevBtn = document.getElementById('prevSlide');
    if (prevBtn) {
        prevBtn.addEventListener('click', function () {
            currentSlide = (currentSlide - 1 + total) % total;
            updateSlide();
        });
    }

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function () {
            currentSlide = index;
            updateSlide();
        });
    });

    // Auto advance slides
    setInterval(function () {
        currentSlide = (currentSlide + 1) % total;
        updateSlide();
    }, 7000);

    function updateSlide() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === currentSlide) {
                slide.classList.add('active');
            }
        });

        dots.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === currentSlide) {
                dot.classList.add('active');
            }
        });
    }

    // Touch swipe support for carousel
    let touchStartX = 0;
    let touchEndX = 0;

    const carousel = document.querySelector('.hero-carousel');
    if (carousel) {
        carousel.addEventListener('touchstart', function (e) {
            touchStartX = e.changedTouches[0].screenX;
        }, false);

        carousel.addEventListener('touchend', function (e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, false);

        function handleSwipe() {
            if (touchEndX < touchStartX - 50) {
                // Swipe left - next slide
                currentSlide = (currentSlide + 1) % total;
                updateSlide();
            } else if (touchEndX > touchStartX + 50) {
                // Swipe right - previous slide
                currentSlide = (currentSlide - 1 + total) % total;
                updateSlide();
            }
        }
    }

    // Countdown timer functionality
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    if (daysElement && hoursElement && minutesElement && secondsElement) {
        // Set the deal end date (1 week from now)
        const now = new Date();
        const dealEndDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7);

        function updateCountdown() {
            const now = new Date();
            const distance = dealEndDate - now;

            // If deal ended, show zeros
            if (distance < 0) {
                daysElement.textContent = '00';
                hoursElement.textContent = '00';
                minutesElement.textContent = '00';
                secondsElement.textContent = '00';
                return;
            }

            // Calculate time units
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display with leading zeros
            daysElement.textContent = days < 10 ? '0' + days : days;
            hoursElement.textContent = hours < 10 ? '0' + hours : hours;
            minutesElement.textContent = minutes < 10 ? '0' + minutes : minutes;
            secondsElement.textContent = seconds < 10 ? '0' + seconds : seconds;
        }

        // Update countdown every second
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
});

// Add a CSS class to help with transitions when scrolling to section
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();

                const headerOffset = 80; // Adjust based on your header height
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Highlight the section briefly
                targetElement.classList.add('section-highlight');
                setTimeout(() => {
                    targetElement.classList.remove('section-highlight');
                }, 1500);
            }
        });
    });
});

// Function to handle Read More button clicks and show features in modal
document.addEventListener('DOMContentLoaded', function () {
    // Get all read more buttons
    const readMoreButtons = document.querySelectorAll('.readmore-btn');
    const modal = document.getElementById('quickViewModal');
    const modalBody = document.getElementById('modalBody');
    const closeBtn = document.querySelector('.close');

    // Add click event listener to each read more button
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();

            // Get product card data
            const productCard = this.closest('.product-info');
            const productName = productCard.querySelector('h3').textContent;
            const productImage = this.closest('.product-card').querySelector('.product-image').src;

            // Get features from the specs list
            const specsList = productCard.querySelector('.specs-list');
            const features = Array.from(specsList.querySelectorAll('li')).map(li => li.innerHTML);

            // Get additional features from tooltip if exists
            const tooltipText = productCard.querySelector('.feature-tooltip .tooltip-text')?.textContent || '';

            // Create modal content
            let modalContent = `
                <div class="modal-product-details">
                    <div class="modal-product-image">
                        <img src="${productImage}" alt="${productName}">
                    </div>
                    <div class="modal-product-info">
                        <h3>${productName} - Features</h3>
                        <div class="modal-features">
                            <h4>Product Specifications:</h4>
                            <ul class="modal-specs-list">
                                ${features.map(feature => `<li>${feature}</li>`).join('')}
                            </ul>
                            
                            <div class="modal-additional-features">
                                <h4>Special Features:</h4>
                                <p>${tooltipText}</p>
                                
                                <div class="detailed-features">
                                    <h4>Additional Information:</h4>
                                    <ul>
                                        <li><strong>Energy Efficiency:</strong> Low power consumption design helps save on electricity bills</li>
                                        <li><strong>Water Consumption:</strong> Optimized water distribution system for efficient cooling</li>
                                        <li><strong>Maintenance:</strong> Easy-to-clean components and accessible design</li>
                                        <li><strong>Warranty:</strong> 6-month warranty on manufacturing defects</li>
                                        <li><strong>Support:</strong> Dedicated customer service through WhatsApp and phone</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <button class="buy-now modal-buy-btn"><i class="fas fa-shopping-cart"></i> Buy Now</button>
                    </div>
                </div>
            `;

            // Set modal content and show modal
            modalBody.innerHTML = modalContent;
            modal.style.display = 'block';

            // Add click event to the buy now button in modal
            const modalBuyBtn = modalBody.querySelector('.modal-buy-btn');
            if (modalBuyBtn) {
                modalBuyBtn.addEventListener('click', function () {
                    // Add your buy now functionality here
                    modal.style.display = 'none';
                    // Show toast notification
                    const toast = document.getElementById('addToCartToast');
                    if (toast) {
                        toast.style.display = 'block';
                        setTimeout(() => {
                            toast.style.display = 'none';
                        }, 3000);
                    }
                });
            }
        });
    });

    // Close modal when clicking the close button
    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            modal.style.display = 'none';
        });
    }

    // Close modal when clicking outside the modal content
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Create a reusable product card function
function createProductCard(product) {
    // Create the product card element
    const productCard = document.createElement('div');
    productCard.className = `product-card ${product.enhanced ? 'product-card-enhanced' : ''}`;
    productCard.setAttribute('data-category', product.category);
    productCard.setAttribute('data-price', product.price);

    // Add badge if available
    if (product.badge) {
        const badge = document.createElement('span');
        badge.className = `product-badge badge-${product.badge.type}`;
        badge.textContent = product.badge.text;
        productCard.appendChild(badge);
    }

    // Create image container
    const imageContainer = document.createElement('div');
    imageContainer.className = 'product-image-container';

    // Create and add the product image
    const productImage = document.createElement('img');
    productImage.src = product.imageSrc;
    productImage.alt = product.name;
    productImage.className = 'product-image';
    imageContainer.appendChild(productImage);

    // Add zoom overlay
    const zoomOverlay = document.createElement('div');
    zoomOverlay.className = 'image-zoom-overlay';
    zoomOverlay.innerHTML = '<i class="fas fa-search-plus"></i>';
    imageContainer.appendChild(zoomOverlay);

    productCard.appendChild(imageContainer);

    // Create product info section
    const productInfo = document.createElement('div');
    productInfo.className = 'product-info';

    // Add product name
    const productName = document.createElement('h3');
    productName.textContent = product.name;
    productInfo.appendChild(productName);

    // Add rating
    if (product.rating) {
        const rating = document.createElement('div');
        rating.className = 'rating';

        // Generate stars based on rating
        let starsHTML = '';
        const fullStars = Math.floor(product.rating);
        const hasHalfStar = product.rating % 1 >= 0.5;

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                starsHTML += '<i class="fas fa-star"></i>';
            } else if (i === fullStars && hasHalfStar) {
                starsHTML += '<i class="fas fa-star-half-alt"></i>';
            } else {
                starsHTML += '<i class="far fa-star"></i>';
            }
        }

        rating.innerHTML = starsHTML + `<span>(${product.reviews})</span>`;
        productInfo.appendChild(rating);
    }

    // Add specs list
    const specsList = document.createElement('ul');
    specsList.className = 'specs-list';

    product.specs.forEach(spec => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<i class="fas fa-check-circle"></i> ${spec}`;
        specsList.appendChild(listItem);
    });

    productInfo.appendChild(specsList);

    // Add size options
    if (product.sizes && product.sizes.length > 0) {
        const sizeOptions = document.createElement('div');
        sizeOptions.className = 'size-options';

        const sizeHeader = document.createElement('h4');
        sizeHeader.textContent = 'Select Size:';
        sizeOptions.appendChild(sizeHeader);

        const sizeSelector = document.createElement('div');
        sizeSelector.className = 'size-selector';

        product.sizes.forEach((size, index) => {
            const sizeOption = document.createElement('label');
            sizeOption.className = 'size-option';

            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `size-${product.id}`;
            input.value = size.value;
            if (index === 0) {
                input.checked = true;
            }

            // Add onchange event for price update
            input.setAttribute('onchange', `updateProductPrice(this, ${size.price}, ${size.originalPrice}, '${product.id}')`);

            const sizeSpan = document.createElement('span');
            sizeSpan.textContent = size.label;

            sizeOption.appendChild(input);
            sizeOption.appendChild(sizeSpan);
            sizeSelector.appendChild(sizeOption);
        });

        sizeOptions.appendChild(sizeSelector);
        productInfo.appendChild(sizeOptions);
    }

    // Add price
    const priceContainer = document.createElement('div');
    priceContainer.className = 'price-container';

    const priceP = document.createElement('p');
    priceP.className = 'price';

    if (product.originalPrice) {
        const originalPrice = document.createElement('span');
        originalPrice.className = 'original-price';
        originalPrice.id = `original-${product.id}`;
        originalPrice.textContent = `₹${product.originalPrice.toLocaleString()}`;
        priceP.appendChild(originalPrice);
    }

    const currentPrice = document.createElement('span');
    currentPrice.id = `price-${product.id}`;
    currentPrice.textContent = `₹${product.price.toLocaleString()}`;
    priceP.appendChild(currentPrice);

    priceContainer.appendChild(priceP);

    // Add price note if there are sizes
    if (product.sizes && product.sizes.length > 0) {
        const priceNote = document.createElement('div');
        priceNote.className = 'size-price-note';
        priceNote.textContent = '*Price varies by size';
        priceContainer.appendChild(priceNote);
    }

    productInfo.appendChild(priceContainer);

    // Add feature tooltip if provided
    if (product.featureTooltip) {
        const featureTooltip = document.createElement('div');
        featureTooltip.className = 'feature-tooltip';
        featureTooltip.innerHTML = `<i class="${product.featureTooltip.icon}"></i> ${product.featureTooltip.title}`;

        const tooltipText = document.createElement('span');
        tooltipText.className = 'tooltip-text';
        tooltipText.textContent = product.featureTooltip.description;

        featureTooltip.appendChild(tooltipText);
        productInfo.appendChild(featureTooltip);
    }

    // Add buttons
    const productButtons = document.createElement('div');
    productButtons.className = 'product-buttons';

    // Buy now button
    const buyNowBtn = document.createElement('button');
    buyNowBtn.className = 'buy-now';
    buyNowBtn.innerHTML = '<i class="fas fa-shopping-cart"></i> Buy Now';
    buyNowBtn.addEventListener('click', function () {
        // Add to cart functionality
        showToast('Item added to cart successfully!');
    });

    // Read more button
    const readMoreBtn = document.createElement('button');
    readMoreBtn.className = 'readmore-btn';
    readMoreBtn.innerHTML = '<i class="fas fa-info-circle"></i> Read More';

    productButtons.appendChild(buyNowBtn);
    productButtons.appendChild(readMoreBtn);

    productInfo.appendChild(productButtons);
    productCard.appendChild(productInfo);

    // Add wishlist button if needed
    if (product.hasWishlist !== false) {
        const wishlistBtn = document.createElement('button');
        wishlistBtn.className = 'wishlist-btn';
        wishlistBtn.innerHTML = '<i class="far fa-heart"></i>';
        wishlistBtn.addEventListener('click', function () {
            this.classList.toggle('active');
            const icon = this.querySelector('i');

            if (this.classList.contains('active')) {
                icon.className = 'fas fa-heart';
                showToast('Item added to wishlist!');
            } else {
                icon.className = 'far fa-heart';
                showToast('Item removed from wishlist!');
            }
        });

        productCard.appendChild(wishlistBtn);
    }

    return productCard;
}

// Helper function to show toast notifications
function showToast(message) {
    const toast = document.getElementById('addToCartToast');
    if (!toast) return;

    toast.textContent = message;
    toast.style.display = 'flex';

    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}

// Example usage:
document.addEventListener('DOMContentLoaded', function () {
    // Only run this if we're on a page that needs dynamic product cards
    const dynamicProductContainer = document.getElementById('dynamicProducts');
    if (dynamicProductContainer) {
        const exampleProduct = {
            id: 'premium1',
            name: 'Premium Exclusive Desert Cooler',
            imageSrc: 'WhatsApp Image 2025-04-24 at 19.04.03_7e4a0147.jpg',
            category: 'Steel',
            price: 5200,
            originalPrice: 6500,
            rating: 4.5,
            reviews: 50,
            specs: [
                'High performance motor',
                'Sleek steel body',
                'Large 50L water tank',
                'Energy efficient design'
            ],
            sizes: [
                { label: '2 ft', value: '2ft', price: 5200, originalPrice: 6500 },
                { label: '2.5 ft', value: '2.5ft', price: 5800, originalPrice: 7200 },
                { label: '3 ft', value: '3ft', price: 6500, originalPrice: 8000 }
            ],
            featureTooltip: {
                title: 'Premium Quality',
                description: 'Our top-tier cooler with exceptional performance and design',
                icon: 'fas fa-certificate'
            },
            badge: {
                type: 'featured',
                text: 'Featured'
            },
            enhanced: true
        };

        // Create and append the product card
        const productCard = createProductCard(exampleProduct);
        dynamicProductContainer.appendChild(productCard);
    }
});

// Function to update product price based on size selection
function updateProductPrice(inputElement, price, originalPrice, productId) {
    const priceElement = document.getElementById(`price-${productId}`);
    const originalPriceElement = document.getElementById(`original-${productId}`);

    if (priceElement) {
        priceElement.textContent = `₹${price.toLocaleString()}`;
    }

    if (originalPriceElement) {
        originalPriceElement.textContent = `₹${originalPrice.toLocaleString()}`;
    }
}

// Rest of your existing code