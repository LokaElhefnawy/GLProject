<template>
  <div id="app" class="app-container">
    <aside class="side-nav">
      <ul>
        <li
          v-for="view in views"
          :key="view.id"
          :class="{ active: view.id === currentViewId }"
          @click="selectView(view.id)"
        >
          {{ view.title }}
        </li>
      </ul>
    </aside>

    <main class="main-content">
      <component :is="currentView.component" />
    </main>
  </div>
</template>

<script>
import PlayerStatsView from './components/PlayerStatsView.vue';
import BracketsView from './components/BracketsView.vue';
import TodaysMatchesView from './components/TodaysMatchesView.vue';

export default {
  name: 'App',
  components: { PlayerStatsView, BracketsView },
  data() {
    return {
      views: [
       { id: 'brackets', title: "Brackets", component: BracketsView },
        { id: 'player-stats', title: "Player's Stats", component: PlayerStatsView },
        { id: 'TodaysMatchesView', title: "Todays Matches", component: TodaysMatchesView },
      ],
      currentViewId: 'player-stats',
    };
  },
  computed: {
    currentView() {
      return this.views.find((v) => v.id === this.currentViewId);
    },
  },
  methods: {
    selectView(id) {
      this.currentViewId = id;
    },
  },
};
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background-color: #0b0c10;
  color: white;
}

.app-container {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.side-nav {
  width: 220px;
  background: #13171f;
  padding-top: 20px;
  box-shadow: inset -3px 0 5px rgb(0 114 255 / 0.3);
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.side-nav ul {
  list-style: none;
  padding: 0;
  width: 100%;
}

.side-nav li {
  padding: 18px 24px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  border-left: 4px solid transparent;
  transition: background-color 0.3s, border-color 0.3s;
}

.side-nav li:hover {
  background-color: #0072ff33;
}

.side-nav li.active {
  background-color: #0072ff88;
  border-left-color: #00c6ff;
  font-weight: 700;
  color: #00c6ff;
}

.main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
  overflow-y: auto;
  box-sizing: border-box;
  min-width: 0; /* important for flex children to prevent overflow */
}
</style>
