<template>
    <div>
        <Canvas />
        <Calculate :name="author" :initialValue="initialValue" />
    </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import Canvas from '@/components/Canvas.vue';
import Calculate from '@/components/Calculate.vue'
import { Getter, Mutation } from 'vuex-class'

@Component({
  components: {
    Canvas,
    Calculate
  },
})
export default class Index extends Vue {
  private initialValue!: number
  public data() {
    return {
      initialValue: 10
    };
  }
  //Getter
  @Getter author: any;

  //Mutation
  @Mutation SET_AUTHOR: any;
  
  mounted(){
    this.changeAuthor('apple');
  }

  changeAuthor(name: any) {
    this.SET_AUTHOR(name);
  }
}
</script>
<style lang="scss" scoped>
   .home-author {
       width: 100%;
       text-align: center;
       color: #646464;
   }
</style>
