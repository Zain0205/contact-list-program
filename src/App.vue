<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "123",
          nama: "Teman1",
          telp: "0821282182",
          email: "teman1@gmail.com",
          isFavorite: false,
        },
        {
          id: "321",
          nama: "Teman2",
          telp: "083981383423",
          email: "teman2@gmail.com",
          isFavorite: false,
        },
        {
          id: "213",
          nama: "Teman3",
          telp: "1212121212",
          email: "teman3@gmail.com",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    showToggleStattus(friendId) {
      const id = this.friends.find((friend) => friendId === friend.id);

      id.isFavorite = !id.isFavorite;
    },
    addFriendList(name, phone, email) {
      const friend = {
        id: new Date().toISOString,
        nama: name,
        telp: phone,
        email: email,
        isFavorite: false,
      };

      this.friends.push(friend);
    },
    removeFriend(friendId) {
      this.friends = this.friends.filter((friend) => friendId !== friend.id);
    },
  },
};
</script>

<template>
  <header>
    <h2>Friend List</h2>
  </header>

  <Form @add-friend="addFriendList" />

  <List v-for="friend in friends" :id="friend.id" :nama="friend.nama" :telp="friend.telp" :email="friend.email" :isFavorite="friend.isFavorite" @toggle-favorite="showToggleStattus" @dellete="removeFriend" />
</template>

<style>
header {
  width: 90%;
  max-width: 40rem;
  margin: 1rem auto;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 0.5rem;
  background-color: #b00808;
  color: white;
}
</style>
