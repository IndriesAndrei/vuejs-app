<template>
    <nav class="navbar navbar-expand-lg"
        :class="navbarClasses">
        <div class="container-fluid">
            <a href="" class="navbar-brand">My Vue</a>
            <ul class="navbar nav me-auto mb-2 mb-lg-0">
                <!-- v-for directive of Vue -->
                <navbar-link
                    v-for="(page, index) in publishedPages" class="nav-item" :key="index"
                    :page="page"
                    :index="index"
                    :isActive="activePage === index"
                    ></navbar-link>
                    <!-- @click.prevent="navLinkClick(index)" -->
            </ul>
            <form class="d-flex">
                <button class="btn btn-primary"
                    @click.prevent="useDarkNavbar = !useDarkNavbar"
                >Toggle Navbar</button>
            </form>
        </div>
    </nav>
</template>

<script>
import NavbarLink from './NavbarLink.vue';

export default {
    components: {
        NavbarLink
    },
    // computed property -> property evaluated on the fly (check for changes); it has to execute to generate it's value, so we will make it like a function
    // it will recompute the navbarClasses
    computed:  {
        navbarClasses() {
            return {
                'navbar-light': this.useDarkNavbar, 
                'bg-light': !this.useDarkNavbar,
                'navbar-dark': this.useDarkNavbar,
                'bg-dark':this.useDarkNavbar,
            }
        },
        publishedPages() {
            return this.pages.filter(p => p.published);
        }
    },
    // navLinkClick its' a function and we inform the parent component that this is changed, the child will pass the index back to the parent
    props: ['pages', 'activePage', 'navLinkClick'],
    data() {
        return {
            useDarkNavbar: false,
        }
    }
}
</script>
