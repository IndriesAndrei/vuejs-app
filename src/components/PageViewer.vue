<template>
 <div v-if="page" class="container">
    <h1>{{ page.pageTitle }}</h1>
    <p>{{ page.content }}</p>
 </div>
</template>

<script>
export default {
    // props: ['page'],
    created() {
        this.page = this.$pages.getSinglePage(this.$route.params.index);

        this.$watch(() => this.$route.params, (newParams, prevParams) => {
            this.page = this.$pages.getSinglePage(newParams.index);
        });
    },
    data() {
        return {
            page: null
        };
    },
}
</script>