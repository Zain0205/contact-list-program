<script>
  export default {
    props: [
      'nama',
      'telp',
      'email',
      'isFavorite',
      'id'
    ],
    data(){
      return {
        showInfo: false,
      }
    },
    methods: {
      showInfoToggle(){
        this.showInfo = !this.showInfo
      },
      toggleFavorite(){
        this.$emit('toggle-favorite', this.id)
      }
    },
    emits: ['toggle-favorite', 'dellete']
  }
</script>

<template>
  <section>
    <h2> {{ nama }} {{ isFavorite ? '⭐' : ' '}} </h2>
    <button @click="showInfoToggle">Show Detail</button>
    <button @click="toggleFavorite">Favorite</button>
    <button @click=" $emit('dellete', id) ">Unfriend</button>
    <ul v-show="showInfo">
      <li>
        <strong>Phone:</strong> {{ telp }}
      </li>
      <li>
        <strong>Email:</strong> {{ email }}
      </li>
    </ul>
  </section>
</template>

<style>
button{
  background-color: rgb(191, 28, 28);
  color: white;
  border: none;
  padding: 5px 10px 5px 10px;
  margin: 5px;
  border-radius: 10px;
}
section {
  width: 90%;
  max-width: 40rem;
  margin: 1rem auto;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 0.5rem;
}

ul {
  margin-top: 1rem;
}


li {
  list-style-type: none;
  margin: 1rem;
}
</style>
