<template>
  <div class="brackets-view">
    <h1 class="title">🏆 Brackets</h1>
    <div class="bracket-rows">
      <div v-for="row in 32" :key="row" class="bracket-row">
        <div class="input-group image-group">
          <label :for="'teamImage-' + row">Team Image</label>
          <input type="file" :id="'teamImage-' + row" accept="image/*" @change="onTeamImageUpload($event, row)" />
          <div v-if="teams[row].teamImagePreview" class="image-preview">
            <img :src="teams[row].teamImagePreview" alt="Team Image" />
            <button @click="removeTeamImage(row)">✖</button>
          </div>
        </div>

        <div class="input-group image-group">
          <label :for="'teamFlag-' + row">Team Flag</label>
          <input type="file" :id="'teamFlag-' + row" accept="image/*" @change="onTeamFlagUpload($event, row)" />
          <div v-if="teams[row].teamFlagPreview" class="image-preview">
            <img :src="teams[row].teamFlagPreview" alt="Team Flag" />
            <button @click="removeTeamFlag(row)">✖</button>
          </div>
        </div>

        <div class="input-group">
          <label :for="'teamName-' + row">Team Name</label>
          <input
            type="text"
            :id="'teamName-' + row"
            v-model="teams[row].teamName"
            placeholder="Team Name"
          />
        </div>

        <div class="input-group">
          <label :for="'teamScore-' + row">Team Score</label>
          <input
            type="number"
            :id="'teamScore-' + row"
            v-model.number="teams[row].teamScore"
            min="0"
            placeholder="0"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BracketsView",
  data() {
    return {
      teams: Array.from({ length: 33 }, () => ({
        teamImagePreview: null,
        teamFlagPreview: null,
        teamName: "",
        teamScore: 0,
      })),
    };
  },
  methods: {
    onTeamImageUpload(e, index) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.teams[index].teamImagePreview = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    removeTeamImage(index) {
      this.teams[index].teamImagePreview = null;
    },
    onTeamFlagUpload(e, index) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.teams[index].teamFlagPreview = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    removeTeamFlag(index) {
      this.teams[index].teamFlagPreview = null;
    },
  },
};
</script>

<style scoped>
.brackets-view {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  user-select: none;
}

.title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 40px;
  background: linear-gradient(90deg, #00c6ff, #0072ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bracket-rows {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.bracket-row {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  background: rgba(255, 255, 255, 0.05);
  padding: 25px 30px;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 114, 255, 0.2);
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input-group label {
  font-size: 1rem;
  font-weight: 600;
  color: #ffde59;
}

.input-group input[type="text"],
.input-group input[type="number"] {
  padding: 12px 16px;
  font-size: 1.05rem;
  border-radius: 10px;
  border: none;
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  transition: box-shadow 0.3s;
}

.input-group input[type="text"]:focus,
.input-group input[type="number"]:focus {
  outline: none;
  box-shadow: 0 0 0 3px #00c6ff;
}

.input-group input[type="file"] {
  font-size: 1rem;
  cursor: pointer;
  background: transparent;
  color: #eee;
}

.image-group {
  position: relative;
}

.image-preview {
  margin-top: 10px;
  position: relative;
  width: 140px;
  height: 100px;
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
  .bracket-row {
    grid-template-columns: 1fr;
    padding: 20px;
  }

  .image-preview {
    width: 100%;
    height: auto;
    max-height: 160px;
  }
}
</style>


