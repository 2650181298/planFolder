<template>
<div id="app8">
    <one></one>
    <two></two>
    <tree></tree >
</div>
</template>
<script>
import {fontsizeset} from '../../fontsizeset.js'
import one from './Header'
import two from './Content'
import tree from './Footer'
export default {
    name:'app8',
    components:{one,two,tree}
}
</script>
<style>
*{
    margin: 0;
    padding: 0;
}
#app8{
    width: 100%;
    height: 7rem;
}
</style>

