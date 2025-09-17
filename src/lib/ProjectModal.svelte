<!-- ProjectModal.svelte -->
<script>
  export let isOpen = false;
  export let project = null;
  
  let currentImageIndex = 0;
  
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
  
  function closeModal() {
    isOpen = false;
  }
  
  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }
  
  function nextImage() {
    if (project && project.images && project.images.length > 1) {
      currentImageIndex = (currentImageIndex + 1) % project.images.length;
    }
  }
  
  function prevImage() {
    if (project && project.images && project.images.length > 1) {
      currentImageIndex = (currentImageIndex - 1 + project.images.length) % project.images.length;
    }
  }
  
  function selectImage(index) {
    currentImageIndex = index;
  }
  
  // Reset image index when project changes
  $: if (project) {
    currentImageIndex = 0;
  }
</script>

{#if isOpen && project}
  <!-- Backdrop -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div 
    class="fixed inset-0 z-40"
    style="background-color: rgba(0, 0, 0, 0.7);"
    on:click={closeModal}
  ></div>
  
  <!-- Modal content positioned over the backdrop -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <div 
    class="modal-content fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 max-w-4xl w-[90vw] max-h-[90vh] bg-zinc-800 rounded-2xl overflow-hidden"
    on:keydown={(e) => e.key === 'Escape' && closeModal()}
    role="dialog"
    aria-modal="true"
    tabindex="-1"
  >
    <!-- Close button -->
    <button 
      class="absolute top-4 right-4 z-20 bg-zinc-700 hover:bg-zinc-600 rounded-full w-10 h-10 flex items-center justify-center text-white transition-colors"
      on:click={closeModal}
    >
      ✕
    </button>
    
    <!-- Scrollable inner container -->
    <div 
      class="h-full overflow-y-auto rounded-2xl"
      style="
        margin: 1px;
        max-height: calc(90vh - 2px);
        scrollbar-width: thin;
        scrollbar-color: #71717a #27272a;
      "
      style:--webkit-scrollbar-width="8px"
      style:--webkit-scrollbar-track-background="#27272a"
      style:--webkit-scrollbar-thumb-background="#71717a"
      style:--webkit-scrollbar-thumb-background-hover="#a1a1aa"
    >
      <!-- Close button -->
      <button 
        class="absolute top-4 right-4 z-20 bg-zinc-700 hover:bg-zinc-600 rounded-full w-10 h-10 flex items-center justify-center text-white transition-colors"
        on:click={closeModal}
      >
        ✕
      </button>
      
      <!-- Modal content -->
      <div class="p-6">
        <!-- Title -->
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white pr-12">{project.title}</h2>
        
        <!-- Main image with gallery -->
        {#if project.images && project.images.length > 0}
          <div class="mb-6">
            <!-- Main image display -->
            <div class="relative bg-zinc-700 rounded-xl overflow-hidden mb-4">
              <img 
                src={project.images[currentImageIndex]} 
                alt={project.title}
                class="w-full h-64 md:h-96 object-cover"
              />
              
              <!-- Navigation arrows for multiple images -->
              {#if project.images.length > 1}
                <button 
                  class="absolute left-4 top-1/2 transform -translate-y-1/2 backdrop-blur-sm text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                  style="background-color: rgba(0, 0, 0, 0.3);"
                  on:click={prevImage}
                  aria-label="Previous image"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>
                <button 
                  class="absolute right-4 top-1/2 transform -translate-y-1/2 backdrop-blur-sm text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                  style="background-color: rgba(0, 0, 0, 0.3);"
                  on:click={nextImage}
                  aria-label="Next image"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
                
                <!-- Image counter -->
                <div class="absolute bottom-4 right-4 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm shadow-lg" style="background-color: rgba(0, 0, 0, 0.3);">
                  {currentImageIndex + 1} / {project.images.length}
                </div>
              {/if}
            </div>
            
            <!-- Thumbnail gallery -->
            {#if project.images.length > 1}
              <div class="thumbnail-gallery flex gap-2 overflow-x-auto pb-2">
                {#each project.images as image, index}
                  <button
                    class="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all {currentImageIndex === index ? 'border-blue-500' : 'border-transparent opacity-70 hover:opacity-100'}"
                    on:click={() => selectImage(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${project.title} ${index + 1}`}
                      class="w-full h-full object-cover"
                    />
                  </button>
                {/each}
              </div>
            {/if}
          </div>
        {/if}
        
        <!-- Description -->
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-3 text-white">Description</h3>
          <p class="text-lg text-gray-300 leading-relaxed whitespace-pre-line">{project.description}</p>
        </div>
        
        <!-- Technologies -->
        {#if project.technologies && project.technologies.length > 0}
          <div class="mb-6">
            <h3 class="text-xl font-bold mb-3 text-white">Technologies</h3>
            <div class="flex flex-wrap gap-2">
              {#each project.technologies as tech}
                <span class="{getTechColor(tech)} px-3 py-1 rounded-full text-sm text-white">{tech}</span>
              {/each}
            </div>
          </div>
        {/if}
        
        <!-- Status -->
        {#if project.status}
          <div class="mb-6">
            <h3 class="text-xl font-bold mb-3 text-white">Status</h3>
            <span class="text-zinc-300">{project.status}</span>
          </div>
        {/if}
        
        <!-- Links -->
        {#if project.links && project.links.length > 0}
          <div class="mb-6">
            <h3 class="text-xl font-bold mb-3 text-white">Links</h3>
            <div class="flex flex-wrap gap-3">
              {#each project.links as link}
                <a 
                  href={link.url} 
                  target="_blank"
                  class="bg-zinc-700 hover:bg-zinc-600 px-4 py-2 rounded-lg text-white transition-colors inline-flex items-center gap-2"
                >
                  {link.title}
                  <span class="text-xs">↗</span>
                </a>
              {/each}
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}

<style>
  * {
    font-family: 'Roboto Mono', monospace;
    font-weight: 700;
  }
  
  h2, h3, p {
    text-shadow: 
      4px 4px 4px rgba(0, 0, 0, 0.8),
      2px 2px 1px rgba(0, 0, 0, 0.8);
  }

  /* Custom scrollbar styling */
  :global(.modal-content) {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
  }

  :global(.modal-content::-webkit-scrollbar) {
    width: 8px;
  }

  :global(.modal-content::-webkit-scrollbar-track) {
    background: transparent;
    border-radius: 16px;
    margin: 16px 0;
  }

  :global(.modal-content::-webkit-scrollbar-thumb) {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 16px;
    margin: 16px 0;
  }

  :global(.modal-content::-webkit-scrollbar-thumb:hover) {
    background-color: rgba(255, 255, 255, 0.5);
  }

  :global(.modal-content::-webkit-scrollbar-button) {
    display: none;
  }

  :global(.modal-content::-webkit-scrollbar-corner) {
    display: none;
  }

  /* Hide scrollbar for thumbnail gallery */
  .thumbnail-gallery {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .thumbnail-gallery::-webkit-scrollbar {
    display: none;
  }
</style>
