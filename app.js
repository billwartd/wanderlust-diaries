// Render blog cards
function renderBlogs() {
  const grid = document.getElementById('blog-grid');
  grid.innerHTML = BLOGS.map((b, i) => `
    <article class="blog-card ${i === 0 ? 'blog-featured' : ''}" onclick="openBlog('${b.id}')">
      <div class="blog-img-wrap">
        <img src="${b.img}" alt="${b.title}" loading="lazy">
      </div>
      <div class="blog-info">
        <div class="blog-meta">
          <span class="blog-cat">${b.cat}</span>
          <span class="blog-date">${b.date}</span>
        </div>
        <h3 class="blog-title">${b.title}</h3>
        <p class="blog-excerpt">${b.excerpt}</p>
        <div class="blog-footer">
          <span class="blog-loc">${b.flag} ${b.loc}</span>
          <span class="blog-read">${b.readTime} read</span>
        </div>
      </div>
    </article>
  `).join('');
}

// Open blog modal
function openBlog(id) {
  const blog = BLOGS.find(b => b.id === id);
  if (!blog) return;
  const body = document.getElementById('modal-body');
  body.innerHTML = `
    <div class="modal-hero">
      <img src="${blog.img}" alt="${blog.title}">
      <div class="modal-hero-overlay">
        <div class="modal-meta">
          <span class="blog-cat">${blog.cat}</span>
          <span>${blog.flag} ${blog.loc}</span>
          <span>${blog.date}</span>
          <span>${blog.readTime} read</span>
        </div>
        <h1>${blog.title}</h1>
      </div>
    </div>
    <div class="modal-article">
      ${blog.content}
    </div>`;
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    document.querySelector('.nav-links')?.classList.remove('open');
  });
});

// Init
document.addEventListener('DOMContentLoaded', renderBlogs);
