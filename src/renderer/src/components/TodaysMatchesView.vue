<template>
  <div class="todays-matches-view">
    <h2>Today's Matches</h2>
    <div class="panels">
      <!-- Info Panel -->
      <section class="panel info-panel">
        <h3>Info</h3>
        <label for="matchDate">Date</label>
        <input
          id="matchDate"
          type="date"
          v-model="info.date"
          required
        />
      </section>

      <!-- First Match Panel -->
      <section class="panel match-panel">
        <h3>First Match</h3>

        <label for="firstMatchTime">Match Time</label>
        <input
          id="firstMatchTime"
          type="time"
          v-model="firstMatch.matchTime"
          required
        />

        <div class="team-row">
          <div class="team-side">
            <label>Left Team Name</label>
            <input
              type="text"
              v-model="firstMatch.leftTeamName"
              placeholder="Left Team Name"
              required
            />

            <label>Left Team Logo</label>
            <input
              type="file"
              accept="image/*"
              @change="onImageUpload($event, 'firstMatch', 'leftTeamLogo')"
            />
            <div v-if="firstMatch.leftTeamLogoPreview" class="image-preview-wrapper">
              <img :src="firstMatch.leftTeamLogoPreview" alt="Left Team Logo" />
              <button class="delete-btn" @click="deleteImage('firstMatch', 'leftTeamLogo')">×</button>
            </div>

            <label>Left Team Flag</label>
            <input
              type="file"
              accept="image/*"
              @change="onImageUpload($event, 'firstMatch', 'leftTeamFlag')"
            />
            <div v-if="firstMatch.leftTeamFlagPreview" class="image-preview-wrapper">
              <img :src="firstMatch.leftTeamFlagPreview" alt="Left Team Flag" />
              <button class="delete-btn" @click="deleteImage('firstMatch', 'leftTeamFlag')">×</button>
            </div>
          </div>

          <div class="team-side">
            <label>Right Team Name</label>
            <input
              type="text"
              v-model="firstMatch.rightTeamName"
              placeholder="Right Team Name"
              required
            />

            <label>Right Team Logo</label>
            <input
              type="file"
              accept="image/*"
              @change="onImageUpload($event, 'firstMatch', 'rightTeamLogo')"
            />
            <div v-if="firstMatch.rightTeamLogoPreview" class="image-preview-wrapper">
              <img :src="firstMatch.rightTeamLogoPreview" alt="Right Team Logo" />
              <button class="delete-btn" @click="deleteImage('firstMatch', 'rightTeamLogo')">×</button>
            </div>

            <label>Right Team Flag</label>
            <input
              type="file"
              accept="image/*"
              @change="onImageUpload($event, 'firstMatch', 'rightTeamFlag')"
            />
            <div v-if="firstMatch.rightTeamFlagPreview" class="image-preview-wrapper">
              <img :src="firstMatch.rightTeamFlagPreview" alt="Right Team Flag" />
              <button class="delete-btn" @click="deleteImage('firstMatch', 'rightTeamFlag')">×</button>
            </div>
          </div>
        </div>
      </section>

      <!-- Second Match Panel -->
      <section class="panel match-panel">
        <h3>Second Match</h3>

        <label for="secondMatchTime">Match Time</label>
        <input
          id="secondMatchTime"
          type="time"
          v-model="secondMatch.matchTime"
          required
        />

        <div class="team-row">
          <div class="team-side">
            <label>Left Team Name</label>
            <input
              type="text"
              v-model="secondMatch.leftTeamName"
              placeholder="Left Team Name"
              required
            />

            <label>Left Team Logo</label>
            <input
              type="file"
              accept="image/*"
              @change="onImageUpload($event, 'secondMatch', 'leftTeamLogo')"
            />
            <div v-if="secondMatch.leftTeamLogoPreview" class="image-preview-wrapper">
              <img :src="secondMatch.leftTeamLogoPreview" alt="Left Team Logo" />
              <button class="delete-btn" @click="deleteImage('secondMatch', 'leftTeamLogo')">×</button>
            </div>

            <label>Left Team Flag</label>
            <input
              type="file"
              accept="image/*"
              @change="onImageUpload($event, 'secondMatch', 'leftTeamFlag')"
            />
            <div v-if="secondMatch.leftTeamFlagPreview" class="image-preview-wrapper">
              <img :src="secondMatch.leftTeamFlagPreview" alt="Left Team Flag" />
              <button class="delete-btn" @click="deleteImage('secondMatch', 'leftTeamFlag')">×</button>
            </div>
          </div>

          <div class="team-side">
            <label>Right Team Name</label>
            <input
              type="text"
              v-model="secondMatch.rightTeamName"
              placeholder="Right Team Name"
              required
            />

            <label>Right Team Logo</label>
            <input
              type="file"
              accept="image/*"
              @change="onImageUpload($event, 'secondMatch', 'rightTeamLogo')"
            />
            <div v-if="secondMatch.rightTeamLogoPreview" class="image-preview-wrapper">
              <img :src="secondMatch.rightTeamLogoPreview" alt="Right Team Logo" />
              <button class="delete-btn" @click="deleteImage('secondMatch', 'rightTeamLogo')">×</button>
            </div>

            <label>Right Team Flag</label>
            <input
              type="file"
              accept="image/*"
              @change="onImageUpload($event, 'secondMatch', 'rightTeamFlag')"
            />
            <div v-if="secondMatch.rightTeamFlagPreview" class="image-preview-wrapper">
              <img :src="secondMatch.rightTeamFlagPreview" alt="Right Team Flag" />
              <button class="delete-btn" @click="deleteImage('secondMatch', 'rightTeamFlag')">×</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodaysMatchesView",
  data() {
    return {
      info: {
        date: '',
      },
      firstMatch: {
        matchTime: '',
        leftTeamName: '',
        rightTeamName: '',
        leftTeamLogoPreview: null,
        rightTeamLogoPreview: null,
        leftTeamFlagPreview: null,
        rightTeamFlagPreview: null,
      },
      secondMatch: {
        matchTime: '',
        leftTeamName: '',
        rightTeamName: '',
        leftTeamLogoPreview: null,
        rightTeamLogoPreview: null,
        leftTeamFlagPreview: null,
        rightTeamFlagPreview: null,
      },
    };
  },
  methods: {
    onImageUpload(event, matchKey, fieldKey) {
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        this[matchKey][fieldKey + 'Preview'] = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    deleteImage(matchKey, fieldKey) {
      this[matchKey][fieldKey + 'Preview'] = null;
      // Also clear the file input value, if needed - you can do this by ref if required
    }
  },
};
</script>

<style scoped>
.todays-matches-view {
  color: white;
  font-family: 'Poppins', sans-serif;
  background-color: #0b0c10;
  padding: 20px;
  user-select: none;
}

h2 {
  margin-bottom: 20px;
  font-weight: 700;
}

.panels {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.panel {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 114, 255, 0.15);
  flex: 1 1 300px;
  min-width: 300px;
}

.panel h3 {
  margin-bottom: 15px;
  font-weight: 700;
  color: #00c6ff;
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 6px;
  color: #ffde59;
}

input[type="date"],
input[type="time"],
input[type="text"],
input[type="file"] {
  width: 100%;
  padding: 10px 14px;
  border-radius: 10px;
  border: none;
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-size: 1.1rem;
  margin-bottom: 15px;
  box-sizing: border-box;
  cursor: pointer;
}

input[type="text"]:focus,
input[type="time"]:focus,
input[type="date"]:focus {
  outline: none;
  box-shadow: 0 0 0 3px #00c6ff;
}

.team-row {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.team-side {
  flex: 1 1 45%;
}

.team-side img {
  display: block;
  max-width: 100%;
  max-height: 90px;
  margin-top: 5px;
  border-radius: 10px;
  object-fit: contain;
  position: relative;
}

/* Wrapper to hold image and delete button */
.image-preview-wrapper {
  position: relative;
  display: inline-block;
  max-width: 100%;
}

.delete-btn {
  position: absolute;
  top: 4px;
  right: 4px;
  background: rgba(255, 0, 0, 0.75);
  border: none;
  color: white;
  font-weight: bold;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  cursor: pointer;
  font-size: 18px;
  line-height: 18px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  transition: background-color 0.3s;
}

.delete-btn:hover {
  background: rgba(255, 0, 0, 1);
}
</style>
