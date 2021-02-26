<template>
    <div>
        <!-- Logo -->
        <img
            class="logo"
            alt="Logo"
            :src="currentUrl + 'img/logo.png'"
        >

        <!-- Buttons -->
        <section class="buttons">
            <Button
                :btn-class="'btn'"
                :img-src="'img/blue_t.png'"
                :img-alt="'tshirt'"
                :img-class="'imgBtn'"
                :img-data-key="'type'"
                :img-data-value="'tshirt'"
            />
            <Button
                :btn-class="'btn'"
                :img-src="'img/blue_p.png'"
                :img-alt="'pants'"
                :img-class="'imgBtn'"
                :img-data-key="'type'"
                :img-data-value="'pants'"
            />
            <Button
                :btn-class="'btn'"
                :img-src="'img/blue_s.png'"
                :img-alt="'skirt'"
                :img-class="'imgBtn'"
                :img-data-key="'type'"
                :img-data-value="'skirt'"
            />
            <Button
                :btn-class="'btn colorBtn blue'"
                :btn-data-key="'color'"
                :btn-data-value="'blue'"
                :inner-text="'Blue'"
            />
            <Button
                :btn-class="'btn colorBtn yellow'"
                :btn-data-key="'color'"
                :btn-data-value="'yellow'"
                :inner-text="'Yellow'"
            />
            <Button
                :btn-class="'btn colorBtn pink'"
                :btn-data-key="'color'"
                :btn-data-value="'pink'"
                :inner-text="'Pink'"
            />
        </section>
        
        <ul class="items">
            <Item
                :items-array="itemsInfo"
            />
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

import Button from '../components/Button.vue';
import Item from '../components/Item.vue';

export default {
    name: 'Home',
    components: {
        Button,
        Item,
    },
    data() {
        return {
            itemsInfo: [],
            currentUrl: '',
        };
    },
    mounted() {
        this.currentUrl = window.location.href;

        axios
            .get(this.currentUrl + 'data/data.json')
            .then(response => {
                // const dataJson = JSON.stringify(response);
                const tempArr = Object.values(response.data);
                tempArr[0].forEach(element => {
                    this.itemsInfo.push(element);
                });
                console.log(this.itemsInfo);
            })
            .catch(error => {
                console.log(error);
            })
            .then(() => {});
    },
};
</script>

<style>




:root {
  /* color */
  --color-black: #3f454d;
  --color-white: #ffffff;
  --color-blue: #3b88c3;
  --color-yellow: #fbbe28;
  --color-pink: #fd7f84;
  --color-light-grey: #dfdfdf;

  /* size */
  --size-button: 60px;
  --font-size: 18px;
  --size-border: 4px;
  --size-thumbnail: 50px;
  --base-space: 8px;

  /* annimation */
  --size-animation-duration: 300ms;
}

/* * {
  box-sizing: border-box;
} */

body {
  height: 100vh;
  background-color: var(--color-black);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
}

.logo {
  cursor: pointer;
  transition: transform var(--size-animation-duration) ease;
}

.btn {
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  transition: transform var(--size-animation-duration) ease;
  margin-right: var(--base-space);
}

.btn:hover,
.logo:hover {
  transform: scale(1.1);
}



.items {
  /* width: 60%;
  height: 50%; */
  width: 70vw;
  height: 70vh;
  list-style: none;
  padding-left: 0;
  overflow-y: scroll;
}

.imgBtn {
  width: var(--size-button);
  height: var(--size-button);
}


.buttons {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 70vw;
}

.colorBtn {
  font-size: var(--font-size);
  padding: calc(var(--base-space) * 2);
  border-radius: var(--size-border);
}

.blue {
  background-color: var(--color-blue);
}

.yellow {
  background-color: var(--color-yellow);
}

.pink {
  background-color: var(--color-pink);
}


.item {
  background-color: var(--color-white);
  display: flex;
  align-items: center;
  padding: var(--base-space);
  margin-bottom: var(--base-space);
}

.item__thumbnail {
  width: var(--size-thumbnail);
  height: var(--size-thumbnail);
}

.item__description {
  margin-left: var(--base-space);
  font-size: var(--font-size);
}

.item.invisible {
  background-color: var(--color-white);
  display: none;
}






</style>
