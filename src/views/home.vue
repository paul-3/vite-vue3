<template>
  <div class="home-container page-container">
    <img
      src="../assets/honey.jpeg"
      alt="honey"
      class="home-img"
    >
    <div>羡煞旁人</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import axios from '../utils/axios';
export default defineComponent({
  name: 'PageHome',
  setup() {
    axios
      .get('/users/XPoet')
      .then((res) => {
        console.log('res: ', res);
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  }
});
</script>
<style scoped lang="stylus">
@keyframes scaleDraw
  0%
    transform scale(1)
  25%
    transform scale(1.1)
  50%
    transform scale(1)
  100%
    transform scale(1.1)

.home-img
  width 200px
  // height 200px
  animation scaleDraw ease-in-out infinite alternate 5s
</style>