<template>
    <span>
        <img class="logo" :src="'../storage/img/github_icon.png'" alt="" v-on:click="this.$router.push('/')">
        <div class="home-root">
            <span class="home-options">
                <search-bar v-bind:items="this.filteredClubs" placeholder="find a club..." @filter="findClubs" @search="handleSearch"> </search-bar>
                <span class="or" > or </span>
                <span class="map-button" v-on:click="this.$router.push({ path: '/club-map' })"> view map... </span>
            </span>
            
            <span class="request-button" v-on:click="" > can’t find a club, or want to verify a club your apart of? click here to let us know... </span>
        </div>
    </span>
</template>

<style> @import '../css/home.css'; </style>

<script>

    import SearchBar from "../js/components/SearchBar";
    
    let clubsDummy = [
        {
            id: 1,
            name: 'Boston Siege FC',
        },
        {
            id: 2,
            name: 'New England Revolution',
        },
        {
            id: 3,
            name: 'Mass United',
        }
    ]

    export default {

        data() {
            return {
                filteredClubs: []
            }
        },

        methods: {

            findClubs(filter) {
                this.filteredClubs = clubsDummy.filter((club) => {
                    return club.name.toLowerCase().includes(filter.toLowerCase())
                })
                console.log(this.filteredClubs)
            },

            handleSearch(id) {
                this.$router.push({ path: '/club-details' })
            }

        },

        components: {
            'search-bar': SearchBar,
        },

    }
</script>