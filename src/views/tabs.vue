<template>
    <div class="tabs" selected="tab1">
        <e-tabs>
            <e-tabs-head>
                <e-tabs-item name="tab1">选项卡1</e-tabs-item>
                <e-tabs-item name="tab2">选项卡2</e-tabs-item>
                <e-tabs-item name="tab3">选项卡3</e-tabs-item>
            </e-tabs-head>
            <e-tabs-body>
                <e-tabs-pane name="tab1">选项卡1content</e-tabs-pane>
                <e-tabs-pane name="tab2">选项卡2content</e-tabs-pane>
                <e-tabs-pane name="tab3">选项卡3content</e-tabs-pane>
            </e-tabs-body>
        </e-tabs>
    </div>
</template>

<script>
import eTabs from "@/components/tabs/tabs.vue";

export default {
    components: {
        eTabs,
    },
    data() {
        return {};
    },
};
</script>
