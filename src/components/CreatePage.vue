<template>
    <form action="" class="container mb-3">
        <div class="row">
            <div class="col-md-8">
                <div class="mb-3">
                    <label for="" class="form-label">
                        Page Title
                    </label>
                    <!-- v-model  => 2 way binding between the input element and whatever we specify as a value/model -->
                    <input 
                        type="text"
                        class="form-control"
                        v-model="pageTitle"
                    />
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">
                        Content
                    </label>
                    <textarea 
                        type="text"
                        class="form-control"
                        rows="5"
                        v-model="content"
                    ></textarea>
                </div>
            </div>
            <div class="col">
                <div class="mb-3">
                    <label for="" class="form-label">
                        Link Text
                    </label>
                    <input type="text"
                        class="form-control"
                        v-model="linkText"
                    />
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">
                        Link URL
                    </label>
                    <input type="text"
                        class="form-control"
                        v-model="linkUrl"
                    />
                </div>
                <div class="row mb-3">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="published">
                        <label class="form-check-label" for="gridCheck1">
                            Published
                        </label>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <button 
                    :disabled="isFormInvalid"
                    class="btn btn-primary"
                    @click.prevent="submitForm"
                >
                    Create Page
                </button>
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        // name of the emits we emit
        emits: {
            pageCreated({pageTitle, content, link}) {
                if (!pageTitle) {
                    return false;
                }

                if (!content) {
                    return false;
                }

                if (!link || !link.text || !link.url) {
                    return false;
                }

                return true;
            }
        },
        props: ['pageCreated'],
        computed: {
            isFormInvalid() {
                return !this.pageTitle || !this.content || !this.linkText || !this.linkUrl;
            }
        },
        data() {
            return {
                pageTitle: '',
                content: '',
                linkText: '',
                linkUrl: '',
                published: true
            }
        },
        methods: {
            submitForm() {
                if (!this.pageTitle || !this.content || !this.linkText || !this.linkUrl) {
                    alert('Please fill the form.');
                    return;
                }

                // we emit an event ($emit is a public property)
                this.$emit('pageCreated', {
                    pageTitle: this.pageTitle,
                    content: this.content,
                    link: {
                        text: this.linkText,
                        url: this.linkUrl
                    },
                    published: this.published
                });

                // this.pageCreated({
                //     pageTitle: this.pageTitle,
                //     content: this.content,
                //     link: {
                //         text: this.linkText,
                //         url: this.linkUrl
                //     },
                //     published: this.published
                // });

                this.pageTitle = '';
                this.content = '';
                this.linkText = '';
                this.linkUrl ='';
                this.published = true;
            }
        },
        // adding watchers -> with a method that watches the value and it will execute if the value changes and allow us to mutate the state
        watch: {
            pageTitle(newTitle, oldTitle) {
                if (this.linkText === oldTitle){
                    this.linkText = newTitle;
                }
            }
        }
    }
</script>