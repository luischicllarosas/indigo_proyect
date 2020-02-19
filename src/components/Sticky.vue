<template>
  <div>
    <nav class="navbar is-fixed-top fixed-bar">
      <div  class="columns is-multiline is-gapless">
          <div class="column">
              <a class="navbar-item"><b-icon class="sticky-icon" type="is-white" icon="facebook-box" size="mdi-24px"></b-icon></a>
          </div>
          <div class="column">
              <a class="navbar-item"><b-icon class="sticky-icon" type="is-white" icon="instagram" size="mdi-24px"></b-icon></a>
          </div>
          <div class="column">
              <a class="navbar-item"><b-icon class="sticky-icon" type="is-white" icon="tripadvisor" size="mdi-24px" pack="fab"></b-icon></a>
          </div>
      </div>
    </nav>
  </div>
</template>
<style>
.fixed-bar {
  width: 4rem;
  background: black;
  top: 50% !important;
  border-radius: 0 10px 10px 0;
}
.sticky-icon{
    padding: 0 10px;
    display: inline-table;
    /* vertical-align: middle; */
}
</style>
