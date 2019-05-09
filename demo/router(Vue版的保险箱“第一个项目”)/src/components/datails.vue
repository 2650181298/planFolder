<template>
    <div id="appa">
        <inside></inside>
        <Start></Start>
        <tail></tail>
    </div>
</template>
<script>
import inside from './content'
import tail from './tail'
import Start from './Header'
import {fontsizeset} from '../fontsizeset.js'
export default {
    name:'appa',
  components: {inside,tail,Start}
}
</script>
<style>
*{
    margin: 0;
    padding: 0;
    margin: 0 auto;
}
#appa{
    width: 100%;
    /* height: 13.34rem; */
}
</style>
