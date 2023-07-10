<template>
   <navbar 
        :pages="pages"
        :active-page="activePage"
        ></navbar>
        <!-- :nav-link-click="(index) => activePage = index" -->

     <!-- calling our component and passing page-title and page-content props
        or we can make it with v-bind:
      <page-viewer :page-title="pages[activePage].pageTitle" :page-content="pages[activePage].pageTitle"></page-viewer>
    -->
    <!-- <page-viewer page-title="Page Title" page-content="Page Content"></page-viewer> -->
    <page-viewer 
      v-if="pages.length > 0"
      :page="pages[activePage]"
    ></page-viewer>

    <!-- setting up the listener for the emited event from CreatePage.vue file -->
    <create-page
      @page-created="pageCreated"
    >
    </create-page>
</template>

<script>
import Navbar from './components/Navbar.vue';
import PageViewer from './components/PageViewer.vue';
import CreatePage from './components/CreatePage.vue';

export default {
  components: {
    Navbar,
    PageViewer,
    CreatePage
  },
  created() {
    this.getPages();

    this.$bus.$on('navbarLinkActivated', (index) => {
      this.activePage = index;
    });
  },
  data() {
    return {
      activePage: 0,
      theme: 'dark',
      pages: []
    }
  },
  methods: {
    async getPages() {
      let res = await fetch('pages.json');
      let data = await res.json();

      this.pages = data;
    },
    pageCreated(pageObj) {
      // add the new page object to the array
      this.pages.push(pageObj);
    }
  }
}
</script>