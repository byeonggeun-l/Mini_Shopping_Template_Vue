<template>
    <button
        :class="btnClass"
        :data-key="btnDataKey"
        :data-value="btnDataValue"
    >
        <img
            :v-if="imgSrc != ''"
            :src="currentUrl + imgSrc"
            :alt="imgAlt"
            :class="imgClass"
            :data-key="imgDataKey"
            :data-value="imgDataValue"
        >
        <span v-text="innerText" />
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        btnClass: {
            type: String,
            required: true
        },
        btnDataKey: {
            type: String,
            required: false,
            default: ''
        },
        btnDataValue: {
            type: String,
            required: false,
            default: ''
        },
        imgSrc: {
            type: String,
            required: false,
            default: ''
        },
        imgAlt: {
            type: String,
            required: false,
            default: ''
        },
        imgClass: {
            type: String,
            required: false,
            default: ''
        },
        imgDataKey: {
            type: String,
            required: false,
            default: ''
        },
        imgDataValue: {
            type: String,
            required: false,
            default: ''
        },
        innerText: {
            type: String,
            required: false,
            default: ''
        }
    },
    data() {
        return {
            currentUrl: ''
        };
    },
    created() {},
    mounted() {
        this.currentUrl = window.location.href;
    },
    methods: {}
};
</script>

<style></style>
