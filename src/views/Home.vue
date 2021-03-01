<template>
    <div>
        <Informatiom 
            :component-name="'Context_Menu_Original'"
            :component-path="'/views/Components/01_Context_Menu/Context_Menu_Original'"
            :component-link="'/context_menu_original'"
            :component-desc="`목록을 클릭하면 해당 아이템에 대한 컨텍스트메뉴가 나타나고,<br />
                메뉴를 선택하거나 그 외의 부분을 클릭하면 사라지는 팝오버 컴포넌트.<br />
                팝오버는 한 번에 하나만 보인다.`"
            :component-skills="`HTML, CSS, Javascript, EventListener, 이벤트 버블링.`"
        />
    </div>
</template>

<script>
import Informatiom from '@/views/Information.vue';
export default {
    name: 'Home',
    components: {
        Informatiom,
    },
};
</script>

<style>

</style>