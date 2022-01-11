<template>
    <span class="search-bar-root">
        <input type="text" class="search-input" :placeholder="placeholder" v-model="filter">
        <div class="search-options" >
            <span class="option" v-for="item in items" :key="item.id" v-on:click="this.$emit('search', item.id)"> {{item.name}} </span>
        </div>
    </span>
</template>

<style> @import '../../css/search-bar.css'; </style>

<script>

    export default {

        name: "SearchBar",

        mounted() {
        },

        data() {
            return {
                focused: false,
                filter: ""
            }
        },

        props: {
            items: {
                type: Array,
                required: true
            },
            placeholder: {
                type: String,
                required: true
            }
        },

        watch: {
            filter(value, oldValue) {
                this.$emit('filter', this.filter);
            }
        }

    }
</script>