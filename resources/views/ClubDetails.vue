<template>
    <img class="logo" :src="'../storage/img/github_icon.png'" alt="" v-on:click="this.$router.push('/')">
    <div class="club-details-root">

        <span class="title-info-container">
            <img class="badge" src={{this.badge_url}} alt="" >
            <span class="name"> {{this.name}} 
                <img class="verified-check" v-if="this.verified" :src="'../storage/img/github_icon.png'" alt="">
            </span>
        </span>

        <span class="details-container">
            <span class="details-info-container">
                <span class="location-container">
                    <span class="details-info-label"> based in </span>
                    <span class="details-info-label-enlarged"> {{this.location}} </span>
                </span>
                <span class="founded-container">
                    <span class="details-info-label"> founded </span>
                    <span class="details-info-label-enlarged"> {{this.founded}} </span>
                </span>
                <span class="leagues-container">
                    <span class="details-info-label"> leagues </span>
                    <span class="leagues-subcontainer" v-for="league in this.leagues">
                        <span>
                            <img class="league-badge" v-on:click="redirect(league.website_url)" @mouseover="league.hover = true" @mouseleave="league.hover = false">
                            <span class="league-hover-info" v-if="league.hover"> {{league.name}} - {{league.level}} </span>
                        </span>
                    </span>
                </span>
                <span class="tryouts-container">
                    <span class="details-info-label"> upcoming tryouts </span>
                    <span class="details-info-label-enlarged"> {{ timestampToDate(this.tryout_timestamp) }} </span>
                </span>
                <span class="details-info-label"> accomplishments </span>
                <span class="accomplishments-container" v-for="accomplishment in this.accomplishments" >
                    <span class="accomplishments-subcontainer">
                        <span class="details-info-bullet" ></span>
                        <span class="accomplishment-text" > {{accomplishment.accomplishment}} </span>
                    </span>
                </span>
            </span>
            <span class="details-divider"></span>
            <span class="details-contact-container">
                <span class="details-contact-title"> Contact </span>
                <span class="details-contact-list" ng-for="contact in this.contacts"> 
                    <span class="details-contact-label" > {{contact.contact}} </span>
                </span>
            </span>
        </span>

        <span class="reviews-header">
            <span class="reviews-title"> Reviews </span>
            <span class="add-review-button" v-on:click="showAddReviewModal()" > + </span>
        </span>
        <span class="reviews-container" v-for="review in this.reviews">
            <span> 
                <span class="review"> {{review.text}} </span>
                <span class="review-divider"></span>
            </span>  
        </span>

    </div>
</template>

<style> @import '../css/club-details.css'; </style>

<script>

    export default {

        props: {
            id: {
                type: String,
                required: true
            }
        },

        mounted() {
            this.data = getClubDetails()
        },

        methods: {

            getClubDetails: () => {

                let id = props.id

                // request to server, dummy data for now

                return {
                    id: 1,
                    name: 'Boston Siege FC', 
                    location: 'Boston, Massachusetts',
                    website: 'https://www.bostonsiegefc.com',
                    tryout_timestamp: null,
                    founded: 2017,
                    leagues: [
                        {
                            id: 1,
                            name: 'Bay State Soccer League',
                            badge_url: '',
                            website_url: 'https://www.bssl.com',
                            level: 'amateur',
                            hover: false
                        },
                    ],
                    badge_url: '',
                    accomplishments: [
                        {
                            id: 1,
                            club_id: 1,
                            accomplishment: '2021 BSSL Division 2 Champions'
                        }
                    ],
                    reviews: [
                        {
                            id: 1,
                            club_id: 1,
                            text: 'great group of guys who love the game'
                        }
                    ],
                    contacts: [
                        {
                            id: 1,
                            club_id: 1,
                            contact: "ldedeus@bostonsiegefc.com"
                        },
                        {
                            id: 2,
                            club_id: 1,
                            contact: "coach@bostonsiegefc.com"
                        }
                    ],
                    verified: true
                }
            },

            showAddReviewModal: () => {

                // presentModal
            },

            redirect: (website_url) => {

                // take user to website_url on click
            },

            timestampToDate: (timestamp) => {

                //convert timestamp to date
            }
        }
    }
    
    
</script>