<template>
   <navbar 
        :pages="pages"
        :active-page="activePage"
        :nav-link-click="(index) => activePage = index"
     ></navbar>

     <!-- calling our component and passing page-title and page-content props
        or we can make it with v-bind:
      <page-viewer :page-title="pages[activePage].pageTitle" :page-content="pages[activePage].pageTitle"></page-viewer>
    -->
    <!-- <page-viewer page-title="Page Title" page-content="Page Content"></page-viewer> -->
    <page-viewer 
      v-if="pages.length > 0"
      :page="pages[activePage]"
    ></page-viewer>

    <create-page
      :page-created="pageCreated"
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