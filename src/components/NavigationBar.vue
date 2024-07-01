<template>
  <nav class="navbar">
    <div class="navbar-container">
      <a href="/" class="navbar-logo">Sadie Crawford</a>
      <ul class="navbar-menu">
        <li class="navbar-item">
          <a href="#work" class="navbar-link">Work</a>
        </li>
        <li class="navbar-item">
          <a href="#art" class="navbar-link">Art</a>
        </li>
        <li class="navbar-item">
          <a href="#about" class="navbar-link">About</a>
        </li>
        <li class="navbar-item">
          <a href="#resume" class="navbar-link">Resume</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  box-shadow: 0 0.125rem 0.4rem rgba(0, 0, 0, 1);
  backdrop-filter: blur(20px);
  margin: 0 auto;
  padding: 1rem;
  width: 100%;
  background-color: var(--global-color-neutral-100) / 0.75;
  animation: var(--global-animation-fade-down);
}

.navbar-container {
  gap: calc(var(--global-layout-gutter) / 2);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: var(--global-layout-size);
}

.navbar-logo {
  text-decoration: none;
  font-size: 1.5rem;
  color: #fff;
}

.navbar-menu {
  gap: calc(var(--global-layout-gutter) / 2);
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.navbar-link {
  text-decoration: none;
  font-size: 1rem;
  color: #fff;
}

.navbar-link:hover {
  text-decoration: underline;
}
</style>
