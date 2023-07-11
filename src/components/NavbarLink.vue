<template>
    <li>
        <!-- we can write instead of:
        v-bind:href just :href
    
        and instead of v-on:click  @click
        -->
        <router-link
            :to="`/${index}`"
            v-bind:href="page.link.url" 
            v-bind:title="`This page goes to \${page.link.text} page`"
            class="nav-link"
            :class="activeClasses" 
            aria-current="page"
        >{{ page.link.text }}</router-link>
        <!-- @click.prevent="$bus.$emit('navbarLinkActivated', index)" -->
    </li>
</template>

<script>
export default {
    props: ['page', 'index', 'isActive'],
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

