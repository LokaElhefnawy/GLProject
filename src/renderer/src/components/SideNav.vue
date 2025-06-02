<template>
  <nav class="side-nav">
    <ul>
      <li
        v-for="view in views"
        :key="view.id"
        :class="{ active: view.id === selectedViewId }"
        @click="$emit('select-view', view.id)"
      >
        {{ view.title }}
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "SideNav",
  props: {
    views: Array,
    selectedViewId: String,
  },
};
</script>

<style scoped>
.side-nav {
  width: 220px;
  background: #14253d;
  color: #eee;
  height: 100vh;
  padding-top: 20px;
  box-sizing: border-box;
}

.side-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.side-nav li {
  padding: 14px 20px;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.3s;
}

.side-nav li:hover {
  background-color: #274060;
}

.side-nav li.active {
  background-color: #0072ff;
  font-weight: 700;
  color: white;
}
</style>
