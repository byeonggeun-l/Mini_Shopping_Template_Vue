<template>
    <div>
        <div
            v-for="(item, index) in itemsArray"
            :key="index"
        >
            <li
                v-if="sortCheck(item.type, item.color)"
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
        sortState:{
            type: Object,
            required: true,
        }
    },
    mounted() {
    },
    created(){
    },
    methods:{
        sortCheck(type, color){
            if(this.sortState.sortKey === 'all'){
                return true;
            }else if(this.sortState.sortKey === 'type'){
                if(this.sortState.sortValue === type){
                    return true;
                }
                else{
                    return false;
                }
            }else if(this.sortState.sortKey === 'color'){
                if(this.sortState.sortValue === color){
                    return true;
                }
                else{
                    return false;
                }
            }
        }
    }
};
</script>

<style>


</style>
