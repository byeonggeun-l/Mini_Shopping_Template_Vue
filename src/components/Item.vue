<template>
    <div>
        <li
            v-for="(item, index) in itemsArray"
            :key="index"
            :class="'item'"
            :data-type="item.type"
            :data-color="item.color"
        >
            <img 
                :src="item.image"
                class="thumbnail"
            >
            <span class="description">
                {{ item.gender }}, {{ item.size }} size
            </span>
        </li>
    </div>
</template>

<script>
export default {
    name: 'Item',
    props:{
        itemsArray: {
            type: Array,
            required: true,
        },
    },
    mounted() {
    },
    created(){
    }
};
</script>

<style>


</style>
