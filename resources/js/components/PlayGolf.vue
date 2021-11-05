<template>
    <div class="container card-golf">
        <div class="d-flex col-md-12">
            <div class="d-flex flex-column col-md-4">
              <h5 class="fw-normal">JOUEZ AU GOLF</h5>
              <h3 class="fw-bold color">PARTOUT DANS EN EUROPE</h3>
            </div>
            <div class="d-flex flex-row col-md-12">
                <div class="d-flex align-items-center col-md-2">FRANCE</div>
                <div class="d-flex align-items-center col-md-2">ESPAGNE</div>
                <div class="d-flex align-items-center col-md-2">ITALIE</div>
                <div class="d-flex align-items-center col-md-2">PORTUGAL</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('content golf component mounted.')
        },
    }
</script>

<style lang="scss" scoped>
.card-golf {
    height: 220px;
    display: flex;
    align-items: center;
}

.color {
    color: #50dd99;
    font-weight: 700;
    font-size: 1.5rem;
}
</style>