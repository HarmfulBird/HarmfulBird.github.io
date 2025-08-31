<!-- +page.svelte -->
<script>
  import { base } from '$app/paths';
  import HamburgerMenu from '$lib/HamburgerMenu.svelte';
  
  // Function to generate consistent colors for technologies
  function getTechColor(techName) {
    const colors = [
      'bg-blue-600',
      'bg-green-600', 
      'bg-purple-600',
      'bg-orange-600',
      'bg-red-600',
      'bg-yellow-600',
      'bg-pink-600',
      'bg-indigo-600',
      'bg-teal-600',
      'bg-cyan-600'
    ];
    
    // Create a simple hash from the technology name
    let hash = 0;
    for (let i = 0; i < techName.length; i++) {
      hash = techName.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    // Use the hash to pick a color (always the same for the same name)
    return colors[Math.abs(hash) % colors.length];
  }
  
  // Projects data
  const projects = [
    {
      title: 'ESP32 Smart Lamp',
      description: 'A custom-built smart lamp using ESP32 and WLED. Features RGB lighting, WiFi connectivity, and integration with home automation systems through wled.',
      technologies: ['ESP32', 'WLED', 'IoT', 'Hardware'],
      status: 'Completed ✅',
      image: `${base}/catlamp1.png`
    },
    {
      title: 'Portfolio Website',
      description: 'This very website! My first proper website built with SvelteKit and Tailwind CSS.',
      technologies: ['SvelteKit', 'Tailwind CSS'],
      status: 'In Progress 🚧',
      image: null
    },
    {
      title: 'Custom Soldering Iron Case',
      description: 'A custom desgined 3D printed case for my TS100 soldering iron, it fetures storage for tips & cables, it also has a stand to hold the iron when hot',
      technologies: ['3D Printing', 'CAD'],
      status: 'Completed ✅',
      image: '/case.png'
    },
    {
      title: 'Nest Table',
      description: 'A simple Flutter based app made for a course project that is for managing reservations, orders, and seating in a restaurant environment. It features real-time updates and an intuitive UI.',
      technologies: ['Flutter', 'Dart', 'Mobile', 'Cross-platform'],
      status: 'Completed ✅',
      image: null
    },
    {
      title: 'Study Web Development Portfolio',
      description: 'Collection of websites built during my learning journey, showcasing various projects and experiments from learning how to code. I am happy to show these off as they represent my growth and learning in web development.',
      technologies: ['html', 'CSS', 'JavaScript', 'PHP', 'mongoDB'],
      status: 'Completed ✅',
      image: null
    },
    {
      title: 'USB-C Laptop Upgrade',
      description: 'A project upgrading my laptop to support USB-C PD charging by modifying the case and soldering in a USB-C port to the motherboard.',
      technologies: ['USB-C', 'Hardware', 'Soldering'],
      status: 'Completed ✅',
      image: null
    },
  ];
</script>

<svelte:head>
  <title>Projects - Avery</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<style>
    * {
        font-family: 'Roboto Mono', monospace;
        font-weight: 700;
    }

    h1, h3, p {
        text-shadow: 
        4px 4px 4px rgba(0, 0, 0, 0.8),
        2px 2px 1px rgba(0, 0, 0, 0.8);
    }
    
    .page-1 {
        background: linear-gradient(rgba(5, 5, 10, 0.7), rgba(0, 0, 0, 0.5)), url('/endless-constellation.svg');
    }

    .project-card {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        transition: all 0.3s ease;
        display: flex;
        flex-direction: column;
        min-height: 280px;
    }

    .project-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
    }

    .project-content {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .project-header {
        flex: 1;
    }

    .project-footer {
        margin-top: auto;
        padding-top: 1rem;
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
    <div class="h-15"></div>
    <!-- Hamburger Menu -->
    <HamburgerMenu />

    <!-- Main Content -->
    <div class="p-8 max-w-6xl mx-auto">
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-12 text-center">My Projects</h1>
        
        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            {#each projects as project}
            <div class="project-card bg-zinc-700 rounded-2xl p-6 relative overflow-hidden">
                <div class="project-content relative z-10">
                    <div class="project-header">
                        <h3 class="text-2xl md:text-3xl mb-4">{project.title}</h3>
                        <p class="text-lg mb-4 leading-relaxed">
                            {project.description}
                        </p>
                    </div>
                    <div class="project-footer">
                        <div class="flex flex-wrap gap-2 mb-3">
                            {#each project.technologies as tech}
                            <span class="{getTechColor(tech)} px-3 py-1 rounded-full text-sm">{tech}</span>
                            {/each}
                        </div>
                        <div>
                            <span class="text-sm text-zinc-300">Status: {project.status}</span>
                        </div>
                    </div>
                </div>
                {#if project.image}
                <div class="absolute bottom-4 right-4 opacity-50">
                    <img src={project.image} alt={project.title} class="max-w-40 max-h-30 object-cover rounded-lg" />
                </div>
                {/if}
            </div>
            {/each}
        </div>
    </div>
    
        <!-- Navigation Buttons Section -->
        <div class="p-8 pb-16">
            <div class="max-w-6xl mx-auto">
                <div class="flex flex-col md:flex-row gap-12 justify-center items-center">
                <!-- Home Button -->
                <a href="{base}/" 
                class="nav-button bg-zinc-700 hover:bg-zinc-600 rounded-2xl p-6 w-full md:w-80 h-40 flex items-center justify-center text-white font-bold text-xl md:text-2xl transition-all duration-300 relative overflow-hidden">
                    <span class="text-with-border relative z-10">Home</span>
                </a>

                <!-- More About Me Button -->
                <a href="{base}/about" 
                    class="nav-button bg-zinc-700 hover:bg-zinc-600 rounded-2xl p-6 w-full md:w-80 h-40 flex items-center justify-center text-white font-bold text-xl md:text-2xl transition-all duration-300 relative overflow-hidden">
                    <div class="absolute inset-0 opacity-30">
                        <img src="{base}/avatar.png" alt="Avatar" class="w-full h-full object-cover" />
                    </div>
                    <span class="text-with-border relative z-10">More About Me!</span>
                </a>

                <!-- Contact Me Button -->
                <a href="{base}/contact" 
                    class="nav-button bg-zinc-700 hover:bg-zinc-600 rounded-2xl p-6 w-full md:w-80 h-40 flex items-center justify-center text-white font-bold text-xl md:text-2xl transition-all duration-300 relative overflow-hidden">
                    <div class="absolute inset-0 opacity-30">
                        <img src="{base}/contact-me.png" alt="Contact Me" class="w-full h-full object-cover" />
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
