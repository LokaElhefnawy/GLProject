<template>
  <div class="brackets-view">
    <h1 class="title">🏆 Tournament Bracket</h1>
    <div v-for="(team, index) in teams" :key="index" class="bracket-row">
      
      <!-- Team Image -->
      <div class="input-group">
        <label>Team Image</label>
        <input type="file" accept="image/*" @change="onImageChange($event, index, 'image')" />
        <div v-if="team.imagePreview" class="image-preview">
          <img :src="team.imagePreview" />
          <button @click="removeImage(index, 'image')">❌</button>
        </div>
      </div>

      <!-- Team Flag -->
      <div class="input-group">
        <label>Team Flag</label>
        <input type="file" accept="image/*" @change="onImageChange($event, index, 'flag')" />
        <div v-if="team.flagPreview" class="image-preview">
          <img :src="team.flagPreview" />
          <button @click="removeImage(index, 'flag')">❌</button>
        </div>
      </div>

      <!-- Team Name -->
      <div class="input-group">
        <label>Team Name</label>
        <input type="text" placeholder="Team Name" v-model="team.name" />
      </div>

      <!-- Team Score -->
      <div class="input-group">
        <label>Team Score</label>
        <input type="number" placeholder="Score" v-model="team.score" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BracketsView",
  data() {
    return {
      teams: Array.from({ length: 32 }, () => ({
        imagePreview: null,
        flagPreview: null,
        name: "",
        score: ""
      }))
    };
  },
  methods: {
    onImageChange(event, index, type) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = e => {
          this.teams[index][`${type}Preview`] = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    removeImage(index, type) {
      this.teams[index][`${type}Preview`] = null;
    }
  }
};
</script>

<style scoped>
.brackets-view {
  padding: 40px 20px;
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
  color: #fff;
}

.title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 40px;
  background: linear-gradient(90deg, #ff8a00, #e52e71);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bracket-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease-in-out;
}

.bracket-row:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(255, 138, 0, 0.3);
}

.input-group {
  flex: 1 1 22%;
  display: flex;
  flex-direction: column;
  margin: 5px;
  min-width: 150px;
}

.input-group label {
  font-size: 0.85rem;
  margin-bottom: 6px;
  font-weight: 600;
  color: #ffc107;
}

input[type="text"],
input[type="number"] {
  padding: 10px 12px;
  border-radius: 6px;
  border: none;
  background-color: #fff;
  color: #333;
  font-size: 0.95rem;
  transition: box-shadow 0.2s ease;
}

input[type="text"]:focus,
input[type="number"]:focus {
  box-shadow: 0 0 0 2px #ff8a00;
  outline: none;
}

input[type="file"] {
  background-color: #fff;
  color: #444;
  padding: 8px;
  border-radius: 6px;
  border: none;
  font-size: 0.9rem;
  cursor: pointer;
}

input[type="file"]:hover {
  background-color: #f1f1f1;
}

.image-preview {
  position: relative;
  margin-top: 10px;
}

.image-preview img {
  width: 100%;
  max-height: 100px;
  object-fit: contain;
  border: 1px solid #fff;
  border-radius: 6px;
}

.image-preview button {
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ff4d4d;
  border: none;
  color: white;
  border-radius: 50%;
  font-size: 0.9rem;
  width: 24px;
  height: 24px;
  cursor: pointer;
}
</style>
