<template>
  <div class="brackets-view">
    <h1 class="title">🏆 Tournament Bracket</h1>
    <div v-for="n in 32" :key="n" class="bracket-row">
      <div class="input-group">
        <label>Team Image</label>
        <input type="file" accept="image/*" />
      </div>
      <div class="input-group">
        <label>Team Flag</label>
        <input type="file" accept="image/*" />
      </div>
      <div class="input-group">
        <label>Team Name</label>
        <input type="text" placeholder="Team Name" />
      </div>
      <div class="input-group">
        <label>Team Score</label>
        <input type="number" placeholder="Score" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BracketsView"
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
</style>
