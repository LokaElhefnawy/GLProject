<template>
  <div class="player-stats-view">
    <h1 class="title">🎮 Player’s Stats</h1>
    <div class="card">
      <div
        class="input-group"
        v-for="(field, index) in fields"
        :key="index"
        :class="{ 'file-group': field.type === 'file' }"
      >
        <label :for="field.id">
          <i class="icon">✏️</i> {{ field.label }}
        </label>
        <input
          v-if="field.type !== 'file'"
          :type="field.type"
          :id="field.id"
          v-model="playerStats[field.model]"
          :placeholder="field.placeholder"
        />
        <div v-else>
          <input type="file" accept="image/*" @change="onImageUpload" />
          <div v-if="playerStats.heroImagePreview" class="image-preview">
            <img :src="playerStats.heroImagePreview" />
            <button @click="removeImage">✖</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayerStatsView",
  data() {
    return {
      playerStats: {
        playerName: "",
        teamName: "",
        favoriteWeapon: "",
        economyScore: null,
        heroImagePreview: null,
        kills: null,
        deaths: null,
        assists: null,
      },
      fields: [
        { id: "playerName", label: "Player Name", model: "playerName", type: "text", placeholder: "e.g. Phoenix" },
        { id: "teamName", label: "Team Name", model: "teamName", type: "text", placeholder: "e.g. Valor Kings" },
        { id: "favoriteWeapon", label: "Favorite Weapon", model: "favoriteWeapon", type: "text", placeholder: "e.g. Vandal" },
        { id: "economyScore", label: "Economy Score", model: "economyScore", type: "number", placeholder: "e.g. 1500" },
        { id: "heroImage", label: "Hero Image", model: "heroImage", type: "file" },
        { id: "kills", label: "Kills", model: "kills", type: "number", placeholder: "e.g. 22" },
        { id: "deaths", label: "Deaths", model: "deaths", type: "number", placeholder: "e.g. 5" },
        { id: "assists", label: "Assists", model: "assists", type: "number", placeholder: "e.g. 10" },
      ],
    };
  },
  methods: {
    onImageUpload(e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.playerStats.heroImagePreview = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    removeImage() {
      this.playerStats.heroImagePreview = null;
    },
  },
};
</script>

<style scoped>
/* Global Reset for Edge-to-Edge */
:global(body),
:global(html),
.player-stats-view {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  font-family: 'Poppins', sans-serif;
  color: #fff;
}

.player-stats-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 40px;
  box-sizing: border-box;
  overflow-x: hidden;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 30px;
  background: linear-gradient(90deg, #00c6ff, #0072ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 30px;
  width: 100%;
  max-width: 700px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
}

.input-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.input-group label {
  font-size: 0.9rem;
  margin-bottom: 8px;
  color: #ffde59;
  font-weight: 600;
}

.input-group input[type="text"],
.input-group input[type="number"] {
  padding: 12px 14px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: #fff;
  border-radius: 8px;
  font-size: 1rem;
  transition: box-shadow 0.3s;
}

.input-group input[type="text"]:focus,
.input-group input[type="number"]:focus {
  outline: none;
  box-shadow: 0 0 0 2px #00c6ff;
}

input[type="file"] {
  color: #eee;
  background: transparent;
  font-size: 0.95rem;
}

.file-group {
  margin-top: 24px;
}

.image-preview {
  margin-top: 10px;
  position: relative;
  display: inline-block;
}

.image-preview img {
  max-height: 120px;
  border-radius: 10px;
  border: 2px solid #0072ff;
}

.image-preview button {
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ff4d4d;
  border: none;
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s;
}

.image-preview button:hover {
  transform: scale(1.1);
}
</style>

