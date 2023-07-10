<template>
    <!-- we can write instead of:
    v-bind:href just :href

    and instead of v-on:click  @click
    -->
    <a 
        v-bind:href="page.link.url" 
        v-bind:title="`This page goes to \${page.link.text} page`"
        class="nav-link"
        :class="activeClasses" 
        aria-current="page"
    >{{ page.link.text }}</a>
</template>

<script>
export default {
    props: ['page', 'isActive'],
    computed: {
        activeClasses() {
            return {
                active: this.isActive,
                emphasize: this.isActive
            }
        }
    }
}
</script>

<style>
.emphasize {
    text-decoration: underline !important;
}
</style>

