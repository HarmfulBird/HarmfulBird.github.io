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

    h1, h2, p {
        text-shadow: 
        4px 4px 4px rgba(0, 0, 0, 0.8),
        2px 2px 1px rgba(0, 0, 0, 0.8);
    }
    
    .page-1 {
        background-image: var(--bg-image);
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

    .floating-sidebar {
        float: right;
        margin: 0 0 2rem 2rem;
        width: 100%;
        max-width: 400px;
    }

    @media (max-width: 1023px) {
        .floating-sidebar {
            float: none;
            margin: 2rem 0;
            max-width: none;
        }
    }
</style>

<div class="page-1 bg-zinc-800 text-white min-h-screen" style="--bg-image: url('{base}/endless-constellation.svg')">
    <div class="h-15"></div>
    <!-- Hamburger Menu -->
    <HamburgerMenu />

    <!-- Main Content -->
    <div class="p-8 max-w-6xl mx-auto">
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-12 text-center">About Me</h1>
        
        <div class="text-content">
            <h2 class="text-2xl md:text-3xl lg:text-4xl mb-6">My Journey</h2>
            
            <!-- Floating sidebar with avatar and quick facts -->
            <div class="floating-sidebar">
                <img src="{base}/avatar.png" alt="Avery avatar variant" class="w-full h-auto mb-4 rounded-xl" />
                
                <div class="bg-zinc-700 rounded-xl p-6">
                    <h3 class="text-xl md:text-2xl mb-4">Quick Facts</h3>
                    <ul class="space-y-2 text-lg">
                        <li>Name: Avery</li>
                        <li>Pronouns: She/Her</li>
                        <li>📍 Location: New Zealand</li>
                        <li>🎂 Age: 20</li>
                        <li>💼 Work: Customer Service + Side Projects</li>
                        <li>🎓 Recent Graduate</li>
                    </ul>
                </div>
            </div>
            
            <p class="text-lg md:text-xl lg:text-2xl mb-6 leading-relaxed">
                As a 20-year-old trans woman living in New Zealand, my story begins with discovery. At 13, I started questioning my gender identity while exploring online furry communities. Those late-night browsing sessions became more than entertainment. They became self-exploration.<br><br>

                The furry community welcomed me immediately. Through forums and Discord servers, I found people who understood identity exploration and creative expression. These weren't just online friendships. They became genuine support networks that helped me through difficult times.<br><br>

                Figuring out who I was at 16 was the start of everything. She/her pronouns felt right from day one. Although I never told my family even to this day, the community's acceptance of diverse identities made my transition feel natural rather than revolutionary.<br><br>

                My transition journey includes starting HRT at 20, as well as my legal name change at the same time.<br><br>

                Professional environments posed new challenges. Job interviews required balancing authenticity with safety. I generally seek workplaces that explicitly support LGBTQ+ employees and contribute to inclusive hiring practices. <br><br>

                The furry community taught me valuable lessons about collaboration and communication. Organizing meetups, managing Discord servers, and coordinating convention groups developed my project management skills. These experiences transferred directly to my technical work and leadership abilities.<br><br>

                Convention attendance became a regular part of my year. Furry conventions offer unique networking opportunities and creative workshops. The inclusive environment lets me practice public speaking and event coordination while connecting with like-minded people who won't judge.<br><br>

                Today, my identity as a trans furry community member and developer feels integrated rather than compartmentalized. Each aspect influences the others: community involvement teaches empathy, event coordination develops organizational skills, and my transition experience builds resilience. Problems become puzzles to solve rather than obstacles to endure.<br><br>

                My journey continues daily. New community connections challenge me socially. Advocacy opportunities expand my impact. Technical projects push professional boundaries. Each challenge becomes data for growth, each setback becomes material for helping others navigate similar paths.
            </p>

            <div class="h-10"></div>

            <h2 class="text-2xl md:text-3xl lg:text-4xl mb-6 mt-12">My Current Focus</h2>
            <p class="text-lg md:text-xl lg:text-2xl mb-6 leading-relaxed">
                Right now I'm working in customer service at The Warehouse while building personal projects on the side. I'm actively learning new technologies and exploring ways to combine my interests into something I love.
            </p>
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
