<template>
     <div>
        <div>好贵呀 {{name}}{{exclamationMarks}}</div>
        <button @click="decrement(calculatedValue)">-</button>
        <button @click="increment(calculatedValue)">+</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component
export default class Calculate  extends Vue{
    @Prop() private name!: string;
    @Prop() private initialValue!: number;

    calculatedValue = this.initialValue

    get exclamationMarks(): string {
        return Array(this.calculatedValue + 1).join('$');
    }
    private decrement () {
        if (this.calculatedValue > 1) {
            this.calculatedValue--;
        }
    }
    private increment () {
        this.calculatedValue++;
    }
}
</script>
