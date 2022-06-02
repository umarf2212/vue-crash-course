<template>
  <header>
    <h1>{{ title }}</h1>
    <ButtonVue 
        v-show="homePage"
        @btn-click="$emit('toggle-add-task')" 
        :text="showAddTasks ? 'Close' : 'Add Task'" 
        :color="showAddTasks ? 'red' : 'green'" 
    />
  </header>
</template>

<script>
import ButtonVue from './Button.vue'

export default {
    name: "HeaderVue",
    props: {
        title: String,
        showAddTasks: Boolean,
    },
    components: { ButtonVue },
    computed: {
        homePage() {
            if (this.$route.path === '/') return true
            else return false
        }        
    }
}
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>
