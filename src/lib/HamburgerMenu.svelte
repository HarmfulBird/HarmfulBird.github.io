<!-- HamburgerMenu.svelte -->
<script>
  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
  }

  function closeMenu() {
    isOpen = false;
  }

  // Close menu when clicking outside
  function handleClickOutside(event) {
    if (!event.target.closest('.hamburger-menu')) {
      closeMenu();
    }
  }
</script>

<svelte:window on:click={handleClickOutside} />

<div class="hamburger-menu fixed top-6 right-6 z-50">
  <!-- Hamburger Button -->
  <button 
    on:click={toggleMenu}
    class="hamburger-button bg-zinc-700 hover:bg-zinc-600 rounded-xl p-3 text-white transition-all duration-300 shadow-lg"
    aria-label="Menu"
  >
    <div class="w-6 h-6 flex flex-col justify-center items-center">
      <div class="hamburger-line w-5 h-0.5 bg-white mb-1 transition-all duration-300" class:rotate-45={isOpen} class:translate-y-1.5={isOpen}></div>
      <div class="hamburger-line w-5 h-0.5 bg-white mb-1 transition-all duration-300" class:opacity-0={isOpen}></div>
      <div class="hamburger-line w-5 h-0.5 bg-white transition-all duration-300" class:-rotate-45={isOpen} class:-translate-y-1.5={isOpen}></div>
    </div>
  </button>

  <!-- Dropdown Menu -->
  {#if isOpen}
    <div class="menu-dropdown absolute top-16 right-0 bg-zinc-800 rounded-xl shadow-2xl border border-zinc-600 min-w-48 overflow-hidden">
      <nav class="py-2">
        <a href="/" on:click={closeMenu} class="menu-item block px-4 py-3 text-white hover:bg-zinc-700 transition-colors duration-200">
          Home
        </a>
        <a href="/about" on:click={closeMenu} class="menu-item block px-4 py-3 text-white hover:bg-zinc-700 transition-colors duration-200">
          About
        </a>
        <a href="/projects" on:click={closeMenu} class="menu-item block px-4 py-3 text-white hover:bg-zinc-700 transition-colors duration-200">
          Projects
        </a>
        <a href="/contact" on:click={closeMenu} class="menu-item block px-4 py-3 text-white hover:bg-zinc-700 transition-colors duration-200">
          Contact
        </a>
      </nav>
    </div>
  {/if}
</div>

<style>
  .hamburger-button {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
  
  .hamburger-button:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
  }

  .menu-dropdown {
    animation: slideDown 0.2s ease-out;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .menu-item {
    font-family: 'Roboto Mono', monospace;
    font-weight: 700;
  }
</style>
