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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.navbar-logo {
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
}

.navbar-menu {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.navbar-item {
  margin-left: 1rem;
}

.navbar-link {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
}

.navbar-link:hover {
  text-decoration: underline;
}
</style>
