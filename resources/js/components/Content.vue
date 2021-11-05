<template>
    <div class="container card-home mt-4">
        <div class="flex-row d-flex justify-content-around">
            <div class="card mx-2">
                <img src="img/golf-02.jpg" class="card-img-top-home" alt="">
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's
                        content.</p>
                </div>
            </div>
            <div class="card mx-2">
                <img src="img/golf-01.jpg" class="card-img-top-home" alt="">
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's
                        content.</p>
                </div>
            </div>
            <div class="card mx-2">
                <img src="img/golf.jpg" class="card-img-top-home" alt="">
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's
                        content.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('content component mounted.')
        },
    }
</script>

<style lang="scss" scoped>
.card-img-top-home {
    flex-shrink: 0;
    width: 100%;
    height: 200px;
    object-fit: cover;
}
</style>