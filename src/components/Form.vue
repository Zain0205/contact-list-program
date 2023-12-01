<script>
  export default {
    data(){
      return {
        enterName: '',
        enterEmail: '',
        enterTelp: '',
      }
    },
    methods: {
      addFriend(){
        this.$emit('add-friend', this.enterName, this.enterEmail, this.enterTelp)

        this.enterName = ''
        this.enterEmail = ''
        this.enterTelp = ''
      }
    }
  }
</script>

<template>
  <form @submit.prevent="addFriend">
    <section class="form">
      <div>
        <label for="nama">Nama</label>
        <input type="text" id="nama" v-model="enterName" />
      </div>
      <div>
        <label for="telp">Telp</label>
        <input type="text" id="telp" v-model="enterEmail" />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="text" id="email" v-model="enterTelp" />
      </div>
      <div>
        <button class="add">Add Friend</button>
      </div>
    </section>
  </form>
</template>

<style>
  .add{
    margin-top: 10px;
  }

  label {
    margin-right: 10px;
  }

  #telp {
    margin-left: 12.5px;
  }

  #email {
    margin-left: 6.5px;
  }
</style>
