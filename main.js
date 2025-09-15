(() => {
  // 1) apply body classes
  document.body.className = 'font-sans antialiased text-gray-800 bg-gray-50';

  // 2) inject full page structure
  document.body.innerHTML = `
    <!-- Navigation -->
    <nav class="bg-white shadow-lg sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0 flex items-center">
              <img src="ego-logo.svg" alt="Alter-Ego Icon" class="text-2xl mr-2" />
              <span class="text-xl font-bold text-gray-600">ALTER-EGO</span>
            </div>
          </div>
          <div class="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            <a href="#features" class="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Features</a>
            <a href="#technology" class="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Technology</a>
            <a href="#gallery" class="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Gallery</a>
            <a href="#contact" class="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Contact</a>
            <button class="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition duration-300">Contact Us</button>
          </div>
          <div class="md:hidden flex items-center">
            <button id="menu-toggle" class="text-gray-900">
              <i class="fas fa-bars h-8 w-8 text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
      <div id="mobile-menu" class="hidden md:hidden bg-white pb-3 px-2">
        <a href="#features" class="block px-3 py-2 text-base font-medium text-gray-900 hover:text-indigo-600">Features</a>
        <a href="#technology" class="block px-3 py-2 text-base font-medium text-gray-900 hover:text-indigo-600">Technology</a>
        <a href="#gallery" class="block px-3 py-2 text-base font-medium text-gray-900 hover:text-indigo-600">Gallery</a>
        <a href="#contact" class="block px-3 py-2 text-base font-medium text-gray-900 hover:text-indigo-600">Contact</a>
        <button class="mt-2 w-full bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition duration-300">Pre-order Now</button>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-gradient text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-10 md:mb-0">
            <h1 class="text-4xl md:text-6xl font-bold mb-6">Meet <span class="text-blue-300">Alter-Ego</span></h1>
            <p class="text-xl md:text-2xl mb-8 opacity-90">Your personal humanoid companion, designed to understand and adapt to your needs.</p>
            <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button class="bg-white text-indigo-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition duration-300 flex items-center justify-center">
                <i class="fas fa-play-circle mr-2"></i> Watch Demo
              </button>
              <button class="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-indigo-600 transition duration-300 flex items-center justify-center">
                <i class="fas fa-eye text-2xl mr-2"></i> Explore Features
              </button>
            </div>
          </div>
          <div class="md:w-1/2 relative flex justify-center">
            <img src="alter-ego.jpg" alt="Alter-Ego Icon" class="w-2000 h-2000 mx-auto" />
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Revolutionary Features</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">Alter-Ego combines cutting-edge technology with intuitive design to create the most advanced humanoid companion.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- repeat feature-card six times as in your HTML -->
          <div class="feature-card bg-gray-50 p-8 rounded-xl transition duration-300">
            <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
              <i class="fas fa-brain text-indigo-600 text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Advanced AI</h3>
            <p class="text-gray-600">Our proprietary neural network allows Alter-Ego to learn from interactions and adapt to your personality and preferences.</p>
          </div>
          <!-- … other feature-cards … -->
        </div>
      </div>
    </section>

    <!-- (Continue injecting #technology, #gallery, testimonials, CTA, #contact and footer exactly as in your HTML) -->
  `;

  // 3) re-attach interactive bits

  // mobile menu toggle
  document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
  });

  // smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const tgt = a.getAttribute('href');
      if (tgt === '#') return;
      const el = document.querySelector(tgt);
      if (!el) return;
      el.scrollIntoView({ behavior: 'smooth' });
      const mm = document.getElementById('mobile-menu');
      if (!mm.classList.contains('hidden')) mm.classList.add('hidden');
    });
  });

  // feature-card scroll animation
  const cards = document.querySelectorAll('.feature-card');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.style.opacity = '1';
        en.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(c => {
    c.style.opacity = '0';
    c.style.transform = 'translateY(20px)';
    c.style.transition = 'all 0.6s ease';
    obs.observe(c);
  });
})();