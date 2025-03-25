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
  
  // Team members data
    Alpine.data('teamMembers', () => ({
      current: 0,
      visibleItems: 4, // Increased to show 8 items at once
      team: [
        {
          id: 1,
          name: 'Afiq Fahmi',
          role: 'Developer Team',
          image: '/images/team/afiq.png',
          shortBio: 'Leads our vision for transparent food tracing systems worldwide.',
          linkedin: 'https://www.linkedin.com/in/afiqfahmi-jamil/',
          twitter: 'https://twitter.com/',
          email: 'paul@foodtracingsystem.com'
        },
        {
          id: 2,
          name: 'Naqibah Azman',
          role: 'Community Builder',
          image: '/images/team/naqiba.png',
          shortBio: 'Oversees the development of our blockchain-based tracing technology.',
          linkedin: 'https://www.linkedin.com/in/naqibah-azman-848970109/',
          twitter: 'https://twitter.com/',
          email: 'lily@foodtracingsystem.com'
        },
        {
          id: 3,
          name: 'Mohd Noor',
          role: 'Developer Team',
          image: '/images/team/noor.png',
          shortBio: 'Creates intuitive interfaces that make food tracing accessible to everyone.',
          linkedin: 'https://linkedin.com/',
          twitter: 'https://twitter.com/',
          email: 'amelia@foodtracingsystem.com'
        },
        {
          id: 4,
          name: 'Muhd Asyraf',
          role: 'Community Builder',
          image: '/images/team/asyraf.png',
          shortBio: 'Builds the backend systems that power our food tracing platform.',
          linkedin: 'https://linkedin.com/',
          twitter: 'https://twitter.com/',
          email: 'marco@foodtracingsystem.com'
        },
        {
          id: 5,
          name: 'Nurul Mahirah',
          role: 'Developer Team',
          image: '/images/team/hyra.png',
          shortBio: 'Ensures our solutions meet the real needs of users across the food supply chain.',
          linkedin: 'https://www.linkedin.com/in/tengkumuzaffar/',
          twitter: 'https://twitter.com/',
          email: 'lakshmi@foodtracingsystem.com'
        },
        {
          id: 6,
          name: 'Tengku Muzaffar',
          role: 'Developer Team',
          image: '/images/team/muz.png',
          shortBio: 'Ensures our solutions meet the real needs of users across the food supply chain.',
          linkedin: 'https://www.linkedin.com/in/nurul-mahirah-6b8160290/',
          twitter: 'https://twitter.com/',
          email: 'lakshmi@foodtracingsystem.com'
        }
      ],
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

});

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