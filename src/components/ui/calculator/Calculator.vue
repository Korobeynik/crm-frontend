<template>
  <div class="calculator-container">
    <input type="number" v-model.number="targetValue"/>
    <VueInputCalculator
        enableKeyboard
        v-model="targetValue"
        bg-color="#fff"
        number-buttons-bg-color="#5893D4"
        action-buttons-bg-color="#5893D4"
        trigger-wrapper-class="open"
        :class="{open: isOpenCalculator}"
    >
      <img src="@/assets/icons/calculator.svg" alt="">
    </VueInputCalculator>
  </div>
</template>
<script>
import VueInputCalculator from "vue-input-calculator";
export default {
  name: 'calculator',
  props: {
    isOpenCalculator: Boolean
  },
  components: {VueInputCalculator},
  data() {
    return {
      targetValue: 0
    }
  }
}
</script>

<style lang="sass">

.calculator-container
  width: 66px
  height: 52px
  position: relative
  background: #5893D4
  border-left: 3px solid #fff
  &:hover
    cursor: pointer
  input
    height: 0
    width: 0
  .open
    position: absolute
    width: 100%
    height: 100%
    left: 0
    top: 0
    display: flex
    align-items: center
    justify-content: center

input.calculator-input
  height: 65px
  background-color: #fff !important
  color: #5893D4 !important
  border-radius: 7px
  margin-bottom: 20px

.calculator-col
  box-shadow: 0 0 0 1px #7BB0E9 !important
  border-bottom: 1px solid #7BB0E9

button.calculator-btn
  font-size: 26px !important

.calculator-logs
  max-height: 200px !important
  border-radius: 7px
  margin-bottom: 0px
  display: none !important

.vue-input-calculator .calc-wrapper .calculator .calculator-logs span
  padding: 10px !important
  font-size: 18px

.backdrop
  background-color: transparent !important

.footer-actions .calculator
  padding: 25px
  background-color: #5893D4 !important
  border-radius: 10px
  border: none !important
  outline: none !important
  position: absolute
  right: -200px
  bottom: 87px
  min-width: 300px
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1) !important
  &:hover
    cursor: pointer

button.calculator-btn.accent.action,button.calculator-btn.gray.action
  background-color: #5893D4 !important

</style>