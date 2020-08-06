<template>
    <svg  class="e-icon">
        <!--<use :xlink:href=`#i-${name}`></use>-->
        <use :xlink:href=`#i-${name}`></use>

    </svg>
</template>

<script>
    import './svg'
    export default {
        props: ['name']
    }
</script>

<style lang="scss">
    .e-icon {
        width: 1em;
        height: 1em;
        /*vertical-align: center;*/
    }
</style>
