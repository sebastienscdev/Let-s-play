<template>
<div class="">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <ul>
                    <router-link v-for="route in routes" :key="route.path" class="router-links" :to="route.path">
                        {{ route.name}}
                    </router-link>
                    <!-- <router-link class="router-links" to='/'>Home</router-link>
                    <router-link class="router-links" to='/le-concept'>le concept</router-link> -->
                </ul>
            </div>
        </div>
    </nav>
</div>
</template>

<script>
import {routes} from '../router.js'

export default {
    name: 'Menu',
    data () {
        return {
            routes,
        }
    },
     mounted() {
        console.log('Ceci est le menu')
    },
}
</script>

<style lang="scss">
ul {
    margin-top: 0;
    margin-bottom: 0;
}

a:hover {
    color: #206d48 !important;
    text-decoration: none !important;
}

.router-links {
    margin-right: 10px;
}

.router-link-active {
    color: #50dd99;
    font-weight: 900;
}
</style>
