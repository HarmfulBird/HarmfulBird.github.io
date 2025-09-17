<!-- +page.svelte -->
<script>
  import { base } from '$app/paths';
  import HamburgerMenu from '$lib/HamburgerMenu.svelte';
  // About page logic
</script>

<svelte:head>
  <title>About - Avery</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<style>
    * {
        font-family: 'Roboto Mono', monospace;
        font-weight: 700;
    }

    h1, h2 {
        text-shadow: 
        4px 4px 4px rgba(0, 0, 0, 0.8),
        2px 2px 1px rgba(0, 0, 0, 0.8);
    }
    
    .page-1 {
        background: linear-gradient(rgba(5, 5, 10, 0.7), rgba(0, 0, 0, 0.5)), url('/endless-constellation.svg');
    }

    .back-button {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        transition: all 0.3s ease;
    }

    .back-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    }

    .nav-button {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        transition: all 0.3s ease;
    }

    .nav-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 20px rgba(0, 0, 0, 0.4);
    }

    .text-with-border {
        text-shadow: 
            -2px -2px 0 #000,
            2px -2px 0 #000,
            -2px 2px 0 #000,
            2px 2px 0 #000,
            -2px 0 0 #000,
            2px 0 0 #000,
            0 -2px 0 #000,
            0 2px 0 #000;
    }
</style>

<div class="page-1 bg-zinc-800 text-white min-h-screen">
    <!-- Hamburger Menu -->
    <HamburgerMenu />
    
    <!-- Back button -->
    <div class="p-8">
        <a href="/" 
           class="back-button bg-zinc-700 hover:bg-zinc-600 rounded-xl px-6 py-3 inline-flex items-center text-white font-bold transition-all duration-300">
            ← Back to Home
        </a>
    </div>

    <!-- Main Content -->
    <div class="p-8 max-w-6xl mx-auto">
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-12 text-center">About Me</h1>
        
        <div class="flex flex-col lg:flex-row gap-12 items-start">
            <!-- Left Column - Text -->
            <div class="flex-1">
                <h2 class="text-2xl md:text-3xl lg:text-4xl mb-6">My Journey</h2>
                <p class="text-lg md:text-xl lg:text-2xl mb-6 leading-relaxed">
                    My coding journey started back in high school when a classmate showed me how to create a basic website using HTML. That moment sparked something in me that has never left.
                </p>
                
                <p class="text-lg md:text-xl lg:text-2xl mb-6 leading-relaxed">
                    As a 20-year-old trans woman living in New Zealand, I've learned to approach challenges with patience and systematic thinking. Each problem becomes an opportunity to learn something new.
                </p>

                <h2 class="text-2xl md:text-3xl lg:text-4xl mb-6 mt-12">What I Love</h2>
                <p class="text-lg md:text-xl lg:text-2xl mb-6 leading-relaxed">
                    * Building things that solve real problems<br>
                    * Learning new technologies and frameworks<br>
                    * Working on hardware projects like my ESP32 smart lamp<br>
                    * Playing video games with friends<br>
                    * Quiet spaces where I can focus and create
                </p>

                <h2 class="text-2xl md:text-3xl lg:text-4xl mb-6 mt-12">Current Focus</h2>
                <p class="text-lg md:text-xl lg:text-2xl mb-6 leading-relaxed">
                    Right now I'm working in customer service at The Warehouse while building personal projects on the side. I'm actively learning Svelte and exploring new ways to combine my interests in web development and hardware programming.
                </p>
            </div>

            <!-- Right Column - Images/Info -->
            <div class="flex-1 flex flex-col items-center">
                <img src={base}/avatar.png alt="Avery avatar variant" class="w-full h-auto rounded-xl" />
                
                <div class="bg-zinc-700 rounded-xl p-6 w-full">
                    <h3 class="text-xl md:text-2xl mb-4">Quick Facts</h3>
                    <ul class="space-y-2 text-lg">
                        <li>📍 Location: New Zealand</li>
                        <li>🎂 Age: 20</li>
                        <li>💼 Currently: Customer Service + Side Projects</li>
                        <li>🎓 Recent Graduate</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- Navigation Buttons Section -->
    <div class="p-8 pb-16">
        <div class="max-w-6xl mx-auto">
            <div class="flex flex-col md:flex-row gap-12 justify-center items-center">
                <!-- Home Button -->
                <a href="/" 
                    class="nav-button bg-zinc-700 hover:bg-zinc-600 rounded-2xl p-6 w-full md:w-80 h-40 flex items-center justify-center text-white font-bold text-xl md:text-2xl transition-all duration-300 relative overflow-hidden">
                    <span class="text-with-border relative z-10">Home</span>
                </a>

                <!-- My Projects Button -->
                <a href="/projects" 
                   class="nav-button bg-zinc-600 hover:bg-zinc-600 rounded-2xl p-6 w-full md:w-80 h-40 flex items-center justify-center text-white font-bold text-xl md:text-2xl transition-all duration-300 relative overflow-hidden">
                   <div class="absolute inset-0 opacity-40">
                        <img src="/projects-button.png" alt="Code on the background" class="w-full h-full object-cover" />
                    </div>
                    <span class="text-with-border relative z-10">My Projects</span>
                </a>

                <!-- Contact Me Button -->
                <a href="/contact" 
                    class="nav-button bg-zinc-700 hover:bg-zinc-600 rounded-2xl p-6 w-full md:w-80 h-40 flex items-center justify-center text-white font-bold text-xl md:text-2xl transition-all duration-300 relative overflow-hidden">
                    <div class="absolute inset-0 opacity-30">
                        <img src="/contact-me.png" alt="Contact Me" class="w-full h-full object-cover" />
                    </div>
                    <span class="text-with-border relative z-10">Contact Me</span>
                </a>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="text-center py-6 border-t border-zinc-700 mt-16">
        <p class="text-sm text-zinc-400">
            © 2025 Avery (HarmlessBird). Content rights reserved. 
        </p>
        <p class="text-sm text-zinc-500">
            Avatar drawn by [ <a href="https://discord.com/users/695455214416822353" target="_blank" class="hover:text-white underline">WxnterColor</a> ].
        </p>
        <p class="text-xs text-zinc-500 mt-1">
            Built with SvelteKit & Tailwind CSS
        </p>
    </footer>
</div>
