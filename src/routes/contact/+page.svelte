<!-- +page.svelte -->
<script>
  import { base } from '$app/paths';
  import HamburgerMenu from '$lib/HamburgerMenu.svelte';

  // Contact page logic
  const contactMethods = [
    {
      name: 'Discord',
      icon: `${base}/icons/discord.svg`,
      url: 'https://discord.com/users/384079198731501578/',
      description: 'Best way to reach me for quick chats and discussions',
      handle: '@HarmlessBird'
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:Avery@FluffyTech.co.nz',
      description: 'For formal inquiries',
      handle: 'Avery@FluffyTech.co.nz'
    },
    {
      name: 'Telegram',
      icon: `${base}/icons/Telegram.svg`,
      url: 'https://t.me/HarmlessBird',
      description: 'Secure messaging and quick communication',
      handle: '@HarmlessBird'
    },
    {
      name: 'GitHub',
      icon: '🐙',
      url: 'https://github.com/HarmfulBird',
      description: 'Check out my code',
      handle: 'github.com/HarmfulBird'
    },
    {
      name: 'Instagram',
      icon: `${base}/icons/Instagram.svg`,
      url: 'https://www.instagram.com/harmless.bird/',
      description: 'Random photos from my life',
      handle: '@harmless.bird'
    },
    {
      name: 'Twitter',
      icon: `${base}/icons/Twitter.svg`,
      url: 'https://twitter.com/Harmless_Bird',
      description: 'Quick updates and thoughts',
      handle: '@Harmless_Bird'
    },
    {
      name: 'YouTube',
      icon: `${base}/icons/Youtube.svg`,
      url: 'https://www.youtube.com/channel/UCi7pLC3NC-LvrgQER1fNvyQ',
      description: 'I don\'t post anything but feel free to subscribe!',
      handle: '@HarmlessBird'
    },
    {
      name: 'Twitch',
      icon: `${base}/icons/Twitch.svg`,
      url: 'https://www.twitch.tv/harmlessbirb',
      description: 'Once in a while streams (very casual)',
      handle: '@harmlessbirb'
    },
    {
      name: 'TikTok',
      icon: `${base}/icons/tiktok.svg`,
      url: 'https://www.tiktok.com/@harmlessbird',
      description: 'I just watch videos but feel free to follow me!',
      handle: '@harmlessbird'
    },
    {
      name: 'Snapchat',
      icon: `${base}/icons/Snapchat.svg`,
      url: 'https://www.snapchat.com/add/harmless.birb?share_id=inEb3mFVH08&locale=en-NZ',
      description: 'I don\'t use it much, but feel free to add me!',
      handle: '@harmless.birb'
    },
    {
      name: 'Spotify',
      icon: `${base}/icons/Spotify.svg`,
      url: 'https://open.spotify.com/user/theninjabros',
      description: 'Check out my playlists and music taste',
      handle: '@Harmless_Bird'
    }
  ];
</script>

<svelte:head>
  <title>Contact - Avery</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<style>
    * {
        font-family: 'Roboto Mono', monospace;
        font-weight: 700;
    }

    h1, h2, h3, p {
        text-shadow: 
        4px 4px 4px rgba(0, 0, 0, 0.8),
        2px 2px 1px rgba(0, 0, 0, 0.8);
    }
    
    .page-1 {
        background: linear-gradient(rgba(5, 5, 10, 0.7), rgba(0, 0, 0, 0.5)), url('/endless-constellation.svg');
    }

    .contact-card {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        transition: all 0.3s ease;
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .contact-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 20px rgba(0, 0, 0, 0.4);
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

    .contact-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
        align-items: stretch;
    }

    @media (min-width: 768px) {
        .contact-grid {
            grid-template-columns: repeat(2, 1fr);
            max-width: 800px;
            margin: 0 auto;
        }
    }

    .icon-container {
        margin-right: 1rem !important;
    }
</style>

<div class="page-1 bg-zinc-800 text-white min-h-screen">
    <div class="h-15"></div>
    <!-- Hamburger Menu -->
    <HamburgerMenu />

    <!-- Main Content -->
    <div class="p-8 max-w-6xl mx-auto">
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-12 text-center">Get In Touch</h1>
        
        <div class="text-center mb-16">
            <p class="text-xl md:text-2xl lg:text-3xl leading-relaxed">
                I'd love to hear from you! Whether you have a project idea, want to collaborate, or just want to say hello.
            </p>
        </div>

        <!-- Contact Methods -->
        <div class="contact-grid mb-16">
            
            {#each contactMethods as contact}
            <!-- {contact.name} -->
            <a href={contact.url} target={contact.url.startsWith('mailto:') ? '' : '_blank'}
               class="contact-card bg-zinc-700 hover:bg-zinc-600 rounded-2xl p-6 text-white no-underline">
                <div class="flex items-center mb-4">
                    <div class="w-12 h-12 flex items-center justify-center icon-container">
                        {#if contact.icon.startsWith('/icons/')}
                            <img src={contact.icon} alt={contact.name} class="w-6 h-6 filter brightness-0 invert" />
                        {:else}
                            <span class="text-2xl">{contact.icon}</span>
                        {/if}
                    </div>
                    <h3 class="text-2xl">{contact.name}</h3>
                </div>
                <p class="text-lg mb-4">{contact.description}</p>
                <span class="text-blue-300 hover:text-blue-200 underline cursor-pointer">{contact.handle}</span>
            </a>
            {/each}

        </div>

        <!-- Gap between sections -->
        <div class="h-32"></div>

        <!-- Call to Action -->
        <div class="text-center bg-zinc-700 rounded-2xl p-8">
            <h2 class="text-3xl md:text-4xl mb-4">Let's Build Something Together!</h2>
            <p class="text-lg md:text-xl mb-6 leading-relaxed">
                I'm always excited about new projects and opportunities to learn. <br><br>
                Or would you rather just chat about tech, life, or anything in between?
            </p>
        </div>

        <!-- Gap between sections -->
        <div class="h-15"></div>

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

                <!-- My Projects Button -->
                <a href="{base}/projects" 
                    class="nav-button bg-zinc-600 hover:bg-zinc-600 rounded-2xl p-6 w-full md:w-80 h-40 flex items-center justify-center text-white font-bold text-xl md:text-2xl transition-all duration-300 relative overflow-hidden">
                    <div class="absolute inset-0 opacity-40">
                        <img src="{base}/projects-button.png" alt="Code on the background" class="w-full h-full object-cover" />
                    </div>
                    <span class="text-with-border relative z-10">My Projects</span>
                </a>
            </div>
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
