<!-- +page.svelte -->
<script>
  import { base } from '$app/paths';
  import HamburgerMenu from '$lib/HamburgerMenu.svelte';
  // You can add any component logic here
</script>

<svelte:head>
  <title>Welcome - Avery</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<style>
    * {
        font-family: 'Roboto Mono', monospace;
        font-weight: 700;
    }

    h1, p {
        text-shadow: 
        4px 4px 4px rgba(0, 0, 0, 0.8),
        2px 2px 1px rgba(0, 0, 0, 0.8);
    }
    
    .page-1 {
        background-image: var(--bg-image);
    }

    .custom-list {
        list-style: none;
        padding-left: 2rem;
    }
    
    .custom-list li::before {
        content: "*";
        margin-right: 0.5rem;
        font-weight: bold;
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

<div class="page-1 bg-zinc-800 text-white" style="--bg-image: url('{base}/endless-constellation.svg')">
    <!-- Hamburger Menu -->
    <HamburgerMenu />
    
    <!-- Avatar Image that scrolls with page -->
    <div class="absolute bottom-0 left-0 z-10 hidden lg:block">
        <img 
        src="{base}/avatar.png" 
        alt="Avery avatar" 
        class="max-w-200 w-full h-auto"
        />
    </div>

    <!-- First Section - Welcome -->
    <div class="min-h-screen flex items-center justify-center ml-auto mr-auto max-w-4xl lg:pl-120 p-8">
        <div class="text-white max-w-2xl">
        <h1 class="text-4xl md:text-6xl lg:text-8xl font-bold mb-8">Welcome!</h1>
        
        <p class="text-xl md:text-2xl lg:text-4xl mb-6 leading-relaxed">
            I'm Avery, but you know me as HarmlessBird.
        </p>
        
        <p class="text-xl md:text-2xl lg:text-4xl leading-relaxed">
            I am a 20 year old trans woman living in New Zealand.
        </p>
        
        <!-- Mobile avatar - shows only on small screens -->
        <div class="lg:hidden mt-8 flex justify-center">
            <img 
            src="{base}/avatar.png" 
            alt="Avery avatar" 
            class="max-w-s w-full h-auto"
            />
        </div>
        </div>
    </div>

    <!-- Gap between sections -->
    <div class="h-32"></div>

    <!-- Second Section - New Content -->
    <div class="p-8">
        <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            <!-- Left Text -->
            <div class="flex-1 lg:pr-20">
                <p class="text-xl md:text-2xl lg:text-3xl mb-4 leading-relaxed">
                    Currently working in customer service at The Warehouse, while on the side I build personal projects.
                </p>
                <div class="h-10"></div>
                <p class="text-xl md:text-2xl lg:text-3xl mb-4 leading-relaxed">
                    As a recent graduate I've grown to appreciate solving problems by breaking them down into smaller pieces and tackling each of them systematically.
                </p>
            </div>

            <!-- Right Image -->
            <div class="flex-1 flex justify-center">
                <img 
                src="{base}/case.png" 
                alt="Case with Avery logo" 
                class="max-w-300 w-full h-auto"
                />
            </div>
        </div>
    </div>

    <!-- Gap between sections -->
    <div class="h-32"></div>

    <!-- Third Section - New Content -->
    <div class="p-8">
        <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            <!-- Text -->
            <div class="flex-1 lg:pr-20">
                <p class="text-xl md:text-2xl lg:text-3xl mb-4 leading-relaxed">
                    I build websites using HTML with Tailwind CSS and JS and sometimes React, and I am currently learning Svelte.
                </p>
                <p class="text-xl md:text-2xl lg:text-3xl mb-4 leading-relaxed">
                    I also build apps too! I currently use Flutter but would love to expand into using Kotlin and React Native too.
                </p>
            </div>
        </div>
    </div>

    <!-- Gap at the bottom -->
    <div class="h-10"></div>

    <!-- Fourth Section - New Content -->
    <div class="p-8">
        <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12">
            <!-- Left Text -->
            <div class="flex-1 lg:pr-20">
                <div class="text-xl md:text-2xl lg:text-3xl mb-4 leading-relaxed">
                    Other Frameworks/Languages I've used include:
                    <ul class="custom-list pl-8">
                        <li>Bootstrap CSS</li>
                        <li>JQuery</li>
                        <li>PHP</li>
                        <li>C#</li>
                        <li>SQL</li>
                        <li>Python</li>
                    </ul>
                </div>
            </div>

            <!-- Right Text -->
            <div class="flex-1">
                <div class="text-xl md:text-2xl lg:text-3xl mb-4 leading-relaxed">
                    And some that I've had minimal experience with:
                    <ul class="custom-list pl-8">
                        <li>Angular</li>
                        <li>Java</li>
                        <li>C++</li>
                        <li>Visual Basic</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- Gap at the bottom -->
    <div class="h-32"></div>

    <!-- Fifth Section - New Content -->
    <div class="p-8">
        <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12">
            <!-- Left Text -->
            <div class="flex-1 lg:pr-20">
                <div class="text-xl md:text-2xl lg:text-3xl mb-4 leading-relaxed">
                    I got into development & design all the way back in early high school when a classmate was showing me how to create a basic website using HTML. From that moment on it never left my mind and I knew exactly what I wanted to do. 
                </div>
            </div>
        </div>
        <div class="h-15"></div>
        <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12">
            <!-- Left Text -->
            <div class="flex-1 lg:pr-20">
                <div class="text-xl md:text-2xl lg:text-3xl mb-4 leading-relaxed">
                    I tend to work the best in a quiet space where I can get on with my work without distractions, but with the option to get help if I need it.I like to bring my curiosity and problem solving skills to every project that comes my way. 
                </div>
            </div>
        </div>  
    </div>

    <!-- Gap between sections -->
    <div class="h-32"></div>

    <!-- Second Section - New Content -->
    <div class="p-8">
        <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            <!-- Left Text -->
            <div class="flex-1 lg:pr-20">
                <p class="text-xl md:text-2xl lg:text-3xl mb-4 leading-relaxed">
                    When I'm not working or coding, you'll find me playing video games, hanging out with my friends, or working on a personal project, such as my most recent project an ESP32 powered WLED smart lamp.
                </p>

            </div>

            <!-- Right Image -->
            <div class="flex-1 flex justify-center">
                <img 
                src="{base}/catlamp1.png" 
                alt="The insides of a led lamp" 
                class="max-w-300 w-full h-auto"
                />
            </div>
        </div>
    </div>

    <!-- Gap between sections -->
    <div class="h-15"></div>

    <!-- Navigation Buttons Section -->
    <div class="p-8 pb-16">
        <div class="max-w-6xl mx-auto">
            <div class="flex flex-col md:flex-row gap-12 justify-center items-center">
                <!-- More About Me Button -->
                <a href="{base}/about" 
                    class="nav-button bg-zinc-700 hover:bg-zinc-600 rounded-2xl p-6 w-full md:w-80 h-40 flex items-center justify-center text-white font-bold text-xl md:text-2xl transition-all duration-300 relative overflow-hidden">
                    <div class="absolute inset-0 opacity-30">
                        <img src="{base}/avatar.png" alt="Avatar" class="w-full h-full object-cover" />
                    </div>
                    <span class="text-with-border relative z-10">More About Me!</span>
                </a>

                <!-- My Projects Button -->
                <a href="{base}/projects" 
                   class="nav-button bg-zinc-600 hover:bg-zinc-600 rounded-2xl p-6 w-full md:w-80 h-40 flex items-center justify-center text-white font-bold text-xl md:text-2xl transition-all duration-300 relative overflow-hidden">
                   <div class="absolute inset-0 opacity-40">
                        <img src="{base}/projects-button.png" alt="Code on the background" class="w-full h-full object-cover" />
                    </div>
                    <span class="text-with-border relative z-10">My Projects</span>
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

    <!-- Gap between sections -->
    <div class="h-15"></div>

    <!-- Copyright/Author Section -->
    <footer class="text-center py-6 border-t border-zinc-700">
        <p class="text-sm text-zinc-400">
            © 2025 Avery (HarmlessBird). Content rights reserved. 
        </p>
        <p class="text-sm text-zinc-500 ">
            Avatar drawn by [ <a href="https://discord.com/users/695455214416822353" target="_blank" class="hover:text-white underline">WxnterColor</a> ].
        </p>
        <p class="text-xs text-zinc-500 mt-1">
            Built with SvelteKit & Tailwind CSS
        </p>
    </footer>

</div>