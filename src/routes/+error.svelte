<!-- +error.svelte -->
<script>
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import HamburgerMenu from '$lib/HamburgerMenu.svelte';
</script>

<svelte:head>
  <title>Page Not Found - Avery</title>
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
        background: linear-gradient(rgba(5, 5, 10, 0.7), rgba(0, 0, 0, 0.5)), url('/endless-constellation.svg');
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

    <!-- Main Content -->
    <div class="p-8 max-w-6xl mx-auto flex flex-col items-center justify-center min-h-screen">
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-center">404</h1>
        <h2 class="text-2xl md:text-3xl mb-8 text-center">Page Not Found</h2>
        
        <p class="text-lg md:text-xl mb-12 text-center leading-relaxed max-w-2xl">
            Oops! The page you're looking for doesn't exist. <br>
            Maybe it was moved, or you typed the wrong URL?
        </p>

        <!-- Navigation Button -->
        <a href="{base}/" 
           class="nav-button bg-zinc-700 hover:bg-zinc-600 rounded-2xl px-8 py-4 text-white font-bold text-xl transition-all duration-300">
            <span class="text-with-border">← Back to Home</span>
        </a>
    </div>

    <!-- Footer -->
    <footer class="text-center py-6 border-t border-zinc-700 mt-16">
        <p class="text-sm text-zinc-400">
            © 2025 Avery (HarmlessBird). Content rights reserved. 
        </p>
        <p class="text-xs text-zinc-500 mt-1">
            Built with SvelteKit & Tailwind CSS
        </p>
    </footer>
</div>