<template>
<div id="Add_to1">
    <Start></Start>
    <inside></inside>
    <Ending></Ending >
</div>
</template>
<script>
import {fontsizeset} from '../../fontsizeset.js'
import Start from './header'
import inside from './content'
import Ending from './footer'
export default {
    name:'app',
    components:{Start,inside,Ending}
}
</script>
<style>
#Add_to1{
    width: 100%;
    height: 11.38rem;
    background-color: #17181a;
}
</style>
