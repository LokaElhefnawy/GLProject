<!-- PlayerStatsView.vue -->
<template>
  <div class="player-stats-view">
    <h1 class="title">🎮 Player’s Stats</h1>
    <div class="card">
      <!-- Text inputs grouped on left -->
      <div class="inputs-section">
        <div class="input-group" v-for="field in textFields" :key="field.id">
          <label :for="field.id">
            <i class="icon">✏️</i> {{ field.label }}
          </label>
          <input
            :type="field.type"
            :id="field.id"
            v-model="playerStats[field.model]"
            :placeholder="field.placeholder"
          />
        </div>
      </div>

      <!-- Images grouped on right -->
      <div class="images-section">
        <div class="file-group" v-for="field in imageFields" :key="field.id">
          <label :for="field.id">
            <i class="icon">🖼️</i> {{ field.label }}
          </label>
          <input type="file" accept="image/*" @change="e => onImageUpload(e, field.model)" />
          <div v-if="playerStats[field.previewModel]" class="image-preview">
            <img :src="playerStats[field.previewModel]" alt="Preview" />
            <button @click="removeImage(field.previewModel)">✖</button>
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
        kills: null,
        deaths: null,
        assists: null,
        heroImagePreview: null,
        teamFlagPreview: null,
      },
      textFields: [
        { id: "playerName", label: "Player Name", model: "playerName", type: "text", placeholder: "e.g. Phoenix" },
        { id: "teamName", label: "Team Name", model: "teamName", type: "text", placeholder: "e.g. Valor Kings" },
        { id: "favoriteWeapon", label: "Favorite Weapon", model: "favoriteWeapon", type: "text", placeholder: "e.g. Vandal" },
        { id: "economyScore", label: "Economy Score", model: "economyScore", type: "number", placeholder: "e.g. 1500" },
        { id: "kills", label: "Kills", model: "kills", type: "number", placeholder: "e.g. 22" },
        { id: "deaths", label: "Deaths", model: "deaths", type: "number", placeholder: "e.g. 5" },
        { id: "assists", label: "Assists", model: "assists", type: "number", placeholder: "e.g. 10" },
      ],
      imageFields: [
        { id: "heroImage", label: "Hero Image", model: "heroImagePreview", previewModel: "heroImagePreview" },
        { id: "teamFlag", label: "Team Flag", model: "teamFlagPreview", previewModel: "teamFlagPreview" },
      ],
    };
  },
  methods: {
    onImageUpload(e, model) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.playerStats[model] = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    removeImage(model) {
      this.playerStats[model] = null;
    },
  },
};
</script>

<style scoped>
.player-stats-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background: rgba(255, 255, 255, 0.05);
  font-family: 'Poppins', sans-serif;
  color: #fff;
  min-height: 100vh;
}

.title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 40px;
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
  max-width: 900px;
  box-shadow: 0 6px 20px rgba(0, 114, 255, 0.2);
  box-sizing: border-box;
  display: flex;
  gap: 40px;
}

/* Text inputs container */
.inputs-section {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Images container */
.images-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.input-group,
.file-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input-group label,
.file-group label {
  font-size: 1rem;
  font-weight: 600;
  color: #ffde59;
  display: flex;
  align-items: center;
  gap: 8px;
}

.input-group input[type="text"],
.input-group input[type="number"] {
  padding: 12px 16px;
  font-size: 1.05rem;
  border-radius: 10px;
  border: none;
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  transition: box-shadow 0.3s ease-in-out;
}

.input-group input[type="text"]:focus,
.input-group input[type="number"]:focus {
  outline: none;
  box-shadow: 0 0 0 3px #00c6ff;
}

input[type="file"] {
  font-size: 1rem;
  cursor: pointer;
  background: transparent;
  color: #eee;
}

.image-preview {
  margin-top: 10px;
  position: relative;
  width: 100%;
  max-height: 160px;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid #0072ff;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #222;
}

.image-preview img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 8px;
}

.image-preview button {
  position: absolute;
  top: 4px;
  right: 4px;
  background: #ff4d4d;
  border: none;
  color: white;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  z-index: 10;
  transition: transform 0.2s ease-in-out;
}

.image-preview button:hover {
  transform: scale(1.1);
}

/* Responsive layout */
@media (max-width: 768px) {
  .card {
    flex-direction: column;
  }

  .inputs-section, .images-section {
    flex: unset;
    width: 100%;
  }

  .image-preview {
    max-height: 200px;
  }
}
</style>
