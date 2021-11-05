<template>
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="img/04-palheiro.jpeg" class="d-block w-100 carrousel-image" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h1 class="display-5 fw-bold text-white">{{ title }}</h1>
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Chercher une destination">
                    <div class="input-group-append">
                        <button class="btn btn-secondary" type="button">
                            <font-awesome-icon icon="search" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            title: 'TROUVER VOTRE DESTINATION',
        };
    },
}
</script>

<style lang="scss" scoped>
.carousel-caption {
    position: absolute;
    right: 15%;
    top: 30%;
    left: 15%;
    z-index: 10;
    padding-top: 20px;
    padding-bottom: 20px;
    color: #fff;
    text-align: center;
}

.carrousel-image {
    height: 450px;
    object-fit: cover;
}

.has-search .form-control {
    padding-left: 2.375rem;
}

.has-search .form-control-feedback {
    position: absolute;
    z-index: 2;
    display: block;
    width: 2.375rem;
    height: 2.375rem;
    line-height: 2.375rem;
    text-align: center;
    pointer-events: none;
    color: #aaa;
}

button.btn.btn-secondary {
    background-color: #50dd99;
    border: 1px solid #50dd99;
}
</style>
