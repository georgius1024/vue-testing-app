<template>
  <div class="calc">
    <h3>Easy calculator</h3>
    <div class="row">
      <button id="increment" @click="increment">+</button>
      <div id="counter">{{ counter }}</div>
      <button id="decrement" @click="decrement">-</button>
    </div>
    <div class="row">
      <button id="reset" @click="reset">reset</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calc',
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increment() {
      this.counter = this.counter + 1
    },
    decrement() {
      this.counter = this.counter - 1
    },
    reset() {
      this.counter = 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calc {
  display: flex;
  flex-direction: column;
  font-size: 32px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  border: 1px solid #333;
  padding: 32px;
}
.calc h3 {
  margin-top: -16px;
}
#counter {
  padding: 32px;
  flex-grow: 1;
  width: 10em;
}
button {
  border: none;
  border: 4px solid teal;
  background-color: #ddd;
  font-size: 32px;
  cursor: pointer;
  width: 100px;
  height: 100px;
  border-radius: 50px;
}
button:focus {
  outline: none;
}

.row {
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
#reset {
  width: 100%;
}
</style>
