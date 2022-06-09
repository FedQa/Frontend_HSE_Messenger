<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Логин</h3>
    <input type="text">
    <h3>Пароль</h3>
    <input type="text">


<!--    <vs-button-->
<!--        gradient-->
<!--        :active="active == 0"-->
<!--        @click="active = 0"-->
<!--    >-->
<!--      Active-->
<!--    </vs-button>-->

  </div>
  <div class="enter">
    <button>Войти</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input {
  padding: 10px;
}
.enter {
  font-size: 16px;
  background-size: 20px;
  padding: 9px 15px;
}
</style>
