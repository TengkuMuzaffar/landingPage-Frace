// Initialize Alpine.js components
document.addEventListener('alpine:init', () => {
  Alpine.data('navigation', () => ({
    open: false,
    toggle() {
      this.open = !this.open;
    }
  }));
  
  Alpine.data('testimonials', () => ({
    current: 0,
    testimonials: [
      {
        id: 1,
        name: 'John Smith',
        role: 'Restaurant Owner',
        image: '/images/testimonials/person1.jpg',
        rating: 5,
        text: 'This food tracing system has revolutionized how we source ingredients. Our customers appreciate the transparency.'
      },
      {
        id: 2,
        name: 'Sarah Johnson',
        role: 'Food Safety Inspector',
        image: '/images/testimonials/person2.jpg',
        rating: 5,
        text: 'As a food safety professional, I can attest to the effectiveness of this system. It makes my job easier and food safer.'
      },
      {
        id: 3,
        name: 'Michael Chen',
        role: 'Organic Farmer',
        image: '/images/testimonials/person3.jpg',
        rating: 4,
        text: 'Being able to show customers exactly how our produce is grown and handled has increased trust and sales.'
      }
    ],
    next() {
      this.current = (this.current + 1) % this.testimonials.length;
    },
    prev() {
      this.current = (this.current - 1 + this.testimonials.length) % this.testimonials.length;
    }
  }));
  
  // Collaborator logos data
  Alpine.data('collaboratorLogos', () => ({
    // Original logos array
    originalLogos: [
      {
        id: 1,
        name: 'UTHM',
        image: '/images/collaborators/uthm.png'
      },
      {
        id: 2,
        name: 'White Space Reources',
        image: '/images/collaborators/white_space_resource.png'
      },
      {
        id: 3,
        name: 'PAYNET Malaysia',
        image: '/images/collaborators/paynet.png'
      },
      {
        id: 4,
        name: 'JandsCo',
        image: '/images/collaborators/jandsco.png'
      },
      {
        id: 5,
        name: 'MAIJ',
        image: '/images/collaborators/maij.png'
      },
      {
        id: 6,
        name: 'RunCloud',
        image: '/images/collaborators/runcloud.png'
      },
      {
        id: 7,
        name: 'Vaterinar Malaysia',
        image: '/images/collaborators/vaterina.png'
      },
      {
        id: 8,
        name: 'JAKIM',
        image: '/images/collaborators/jakim.png'
      },
      {
        id: 9,
        name: 'ISWAJ UTHM',
        image: '/images/collaborators/iswaj_uthm.png'
      }
    ],
    // Computed property that duplicates the logos for seamless scrolling
    get logos() {
      // Create enough duplicates to ensure seamless looping
      return [...this.originalLogos, ...this.originalLogos, 
              ...this.originalLogos, ...this.originalLogos];
    },
    
    // Mobile logos remains the same
    get mobileLogos() { return this.originalLogos },
    
    init() {
      // Add CSS animation directly to the carousel element
      const carousel = document.querySelector('.logo-carousel');
      if (carousel) {
        carousel.style.animation = 'scroll 40s linear infinite';
      }
      
      // Remove the animationiteration listener since we're using CSS animation
    }
  }));
  
  // Team members data
    Alpine.data('teamMembers', () => ({
      current: 0,
      visibleItems: 4, // Increased to show 8 items at once
      flippedCards: [], // Track which cards are flipped
      team: [
        {
          id: 1,
          name: 'Afiq Fahmi',
          role: 'Developer Team',
          image: '/images/team/afiq.png',
          shortBio: 'Leads our vision for transparent food tracing systems worldwide.',
          linkedin: 'https://www.linkedin.com/in/afiqfahmi-jamil/',
          twitter: 'https://twitter.com/',
          email: 'paul@foodtracingsystem.com',
          tasks: [
            'System architecture design',
            'Blockchain integration',
            'Technical leadership'
          ]
        },
        {
          id: 2,
          name: 'Naqibah Azman',
          role: 'Community Builder',
          image: '/images/team/naqiba.png',
          shortBio: 'Oversees the development of our blockchain-based tracing technology.',
          linkedin: 'https://www.linkedin.com/in/naqibah-azman-848970109/',
          twitter: 'https://twitter.com/',
          email: 'lily@foodtracingsystem.com',
          tasks: [
            'Community engagement',
            'User feedback implementation',
            'Partnership development'
          ]
        },
        // Example for one team member - make sure all have similar structure
        {
          id: 3,
          name: 'Mohd Noor',
          role: 'Developer Team',
          image: '/images/team/noor.png',
          shortBio: 'Creates intuitive interfaces that make food tracing accessible to everyone.',
          linkedin: 'https://linkedin.com/',
          twitter: 'https://twitter.com/',
          email: 'amelia@foodtracingsystem.com',
          tasks: [
            'Frontend development',
            'UI/UX design',
            'User experience testing'
          ]
        },
        {
          id: 4,
          name: 'Muhd Asyraf',
          role: 'Community Builder',
          image: '/images/team/asyraf.png',
          shortBio: 'Builds the backend systems that power our food tracing platform.',
          linkedin: 'https://linkedin.com/',
          twitter: 'https://twitter.com/',
          email: 'marco@foodtracingsystem.com',
          tasks: [
            'Backend system development',
            'Database optimization',
            'API integration'
          ]
        },
        {
          id: 5,
          name: 'Nurul Mahirah',
          role: 'Developer Team',
          image: '/images/team/hyra.png',
          shortBio: 'Ensures our solutions meet the real needs of users across the food supply chain.',
          linkedin: 'https://www.linkedin.com/in/tengkumuzaffar/',
          twitter: 'https://twitter.com/',
          email: 'lakshmi@foodtracingsystem.com',
          tasks: [
            'User research and testing',
            'Feature prioritization',
            'Documentation management'
          ]
        },
        {
          id: 6,
          name: 'Tengku Muzaffar',
          role: 'Developer Team',
          image: '/images/team/muz.png',
          shortBio: 'Ensures our solutions meet the real needs of users across the food supply chain.',
          linkedin: 'https://www.linkedin.com/in/nurul-mahirah-6b8160290/',
          twitter: 'https://twitter.com/',
          email: 'lakshmi@foodtracingsystem.com',
          tasks: [
            'Mobile application development',
            'Cross-platform compatibility',
            'Performance optimization'
          ]
        }
      ],
      
      // Function to handle card flipping
      flipCard(id) {
        if (this.flippedCards.includes(id)) {
          this.flippedCards = this.flippedCards.filter(cardId => cardId !== id);
        } else {
          this.flippedCards.push(id);
        }
      },
      
      init() {
        // Initialize flippedCards array
        this.flippedCards = [];
        
        // Set animation delays with a slight delay to ensure DOM is ready
        setTimeout(() => {
          document.querySelectorAll('#team .team-card').forEach((card, index) => {
            card.style.setProperty('--card-index', index);
          });
          
          // Add debug logging
          console.log('Team cards initialized:', document.querySelectorAll('#team .team-card').length);
        }, 100);
        
        // Add click event listener to document to close flipped cards when clicking outside
        document.addEventListener('click', (e) => {
          if (!e.target.closest('.team-card-container')) {
            this.flippedCards = [];
          }
        });
      },
      next() {
        const maxSteps = Math.ceil(this.team.length / this.visibleItems) - 1;
        if (this.current < maxSteps) {
          this.current++;
        }
      },
      prev() {
        if (this.current > 0) {
          this.current--;
        }
      },
      showNavigation() {
        return this.team.length > this.visibleItems;
      }
    }));

    // Add this inside the alpine:init block
    Alpine.data('galleryData', () => ({
        currentFilter: 'all',
        modalOpen: false,
        selectedItem: {},
        selectedIndex: 0,
        
        // Gallery items - updated with chronological meetings
        gallery: [
          {
            id: 1,
            title: 'Official Visit to JAKIM',
            category: 'meetings',
            date: 'February 7, 2025',
            thumbnail: '/images/gallery/lawatan_jakim.jpg',
            fullImage: '/images/gallery/lawatan_jakim.jpg',
            description: 'An official visit to JAKIM headquarters to discuss halal certification integration with our food tracing system. The meeting focused on establishing protocols for digital verification of halal compliance throughout the supply chain.',
            partners: ['JAKIM', 'MAIJ'],
            achievements: [
              'Established framework for digital halal certification',
              'Agreed on API integration for real-time verification',
              'Developed roadmap for nationwide implementation'
            ]
          },
          {
            id: 2,
            title: 'Official Visit to MARS Global Sdn. Bhd.',
            category: 'meetings',
            date: 'February 5, 2025',
            thumbnail: '/images/gallery/mars_global.jpg',
            fullImage: '/images/gallery/mars_global.jpg',
            description: 'Strategic partnership meeting with MARS Global to explore implementation of our food tracing technology in their international supply chain. The discussion centered on adapting our system to meet global standards and multi-regional requirements.',
            partners: ['MARS Global Sdn. Bhd.', 'RunCloud'],
            achievements: [
              'Identified key integration points for global supply chain',
              'Developed customization plan for international markets',
              'Established timeline for pilot program implementation'
            ]
          },
          {
            id: 3,
            title: 'UTHM Strategic Planning Workshop Johor 2025',
            category: 'meetings',
            date: 'January 28, 2025',
            thumbnail: '/images/gallery/bengkel_strategi.jpg',
            fullImage: '/images/gallery/bengkel_strategi.jpg',
            description: 'Participated in UTHM\'s strategic planning workshop for Johor 2025, focusing on technological innovation in food security and traceability. Our team presented the latest developments in our system and collaborated on future research initiatives.',
            partners: ['UTHM', 'ISWAJ UTHM'],
            achievements: [
              'Secured academic research partnership for system enhancement',
              'Developed educational framework for student involvement',
              'Established joint innovation lab for continued development'
            ]
          },
          {
            id: 4,
            title: 'Official Visit to Veterinary Services Malaysia',
            category: 'meetings',
            date: 'December 5, 2024',
            thumbnail: '/images/gallery/lawatan_vaterina.jpg',
            fullImage: '/images/gallery/lawatan_vaterina.jpg',
            description: 'Collaborative meeting with Veterinary Services Malaysia to integrate animal health and welfare tracking into our food tracing system. The discussion focused on livestock monitoring, disease prevention, and ensuring compliance with international standards.',
            partners: ['Veterinary Services Malaysia', 'JandsCo'],
            achievements: [
              'Developed livestock tracking module specifications',
              'Established protocols for health certification integration',
              'Created framework for disease outbreak early warning system'
            ]
          }
        ],
        
        // Computed property for filtered gallery items
        get filteredGallery() {
          if (this.currentFilter === 'all') {
            return this.gallery;
          }
          return this.gallery.filter(item => item.category === this.currentFilter);
        },
        
        // Set the current filter
        setFilter(filter) {
          this.currentFilter = filter;
        },
        
        // Open the modal with the selected item
        openModal(item) {
          this.selectedItem = item;
          this.selectedIndex = this.gallery.findIndex(i => i.id === item.id);
          this.modalOpen = true;
          // Prevent body scrolling when modal is open
          document.body.style.overflow = 'hidden';
        },
        
        // Close the modal
        closeModal() {
          this.modalOpen = false;
          // Restore body scrolling
          document.body.style.overflow = '';
        },
        
        // Navigate to the next image
        nextImage() {
          this.selectedIndex = (this.selectedIndex + 1) % this.gallery.length;
          this.selectedItem = this.gallery[this.selectedIndex];
        },
        
        // Navigate to the previous image
        prevImage() {
          this.selectedIndex = (this.selectedIndex - 1 + this.gallery.length) % this.gallery.length;
          this.selectedItem = this.gallery[this.selectedIndex];
        }
    }));
}); // <-- This is the closing bracket of the alpine:init event listener

// Initialize map when the map section is visible
document.addEventListener('DOMContentLoaded', () => {
  const mapSection = document.getElementById('map-section');
  if (mapSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          initMap();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(mapSection);
  }
});

function initMap() {
  if (typeof L !== 'undefined') {
    const map = L.map('tracing-map').setView([40.7128, -74.0060], 4);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Add sample supply chain points
    const farms = [
      { lat: 42.3601, lng: -71.0589, name: 'Organic Farm A' },
      { lat: 37.7749, lng: -122.4194, name: 'Sustainable Farm B' },
      { lat: 29.7604, lng: -95.3698, name: 'Local Producer C' }
    ];
    
    const processors = [
      { lat: 40.7128, lng: -74.0060, name: 'Processing Facility X' },
      { lat: 41.8781, lng: -87.6298, name: 'Packaging Center Y' }
    ];
    
    const distributors = [
      { lat: 39.9526, lng: -75.1652, name: 'Distribution Hub East' },
      { lat: 34.0522, lng: -118.2437, name: 'Distribution Hub West' }
    ];
    
    // Add markers with custom icons
    farms.forEach(farm => {
      L.marker([farm.lat, farm.lng])
        .addTo(map)
        .bindPopup(`<b>${farm.name}</b><br>Farm Production Stage`);
    });
    
    processors.forEach(processor => {
      L.marker([processor.lat, processor.lng])
        .addTo(map)
        .bindPopup(`<b>${processor.name}</b><br>Processing & Packaging Stage`);
    });
    
    distributors.forEach(distributor => {
      L.marker([distributor.lat, distributor.lng])
        .addTo(map)
        .bindPopup(`<b>${distributor.name}</b><br>Distribution Stage`);
    });
    
    // Draw supply chain lines
    const supplyChainPath = [
      [42.3601, -71.0589], // Farm A
      [40.7128, -74.0060], // Processing X
      [39.9526, -75.1652], // Distribution East
      // Add more points as needed
    ];
    
    L.polyline(supplyChainPath, { color: '#22c55e', weight: 3, opacity: 0.7 }).addTo(map);
  }
}

