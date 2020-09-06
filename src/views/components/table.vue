<template>
    <div class="table">
        <table >
            <tr>
                <th>属性名</th>
                <th>含义</th>
                <th>类型</th>
                <th>可选值</th>
                <th>默认值</th>
            </tr>
            <tr v-for="(item, index) in attrList" :key="index">
                <td>{{item.name}}</td>
                <td>{{item.definition}}</td>
                <td>{{item.type}}</td>
                <td>{{item.selectValue}}</td>
                <td>{{item.defaultValue}}</td>

            </tr>
        </table>
    </div>
</template>
<script>
    export default {
        props: {
            attrList: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {}
        },
        mounted() {
            console.log(this.attrList)
        }
    }
</script>
<style lang="scss" scoped>
    $themeColor: #41BD84;
    $fontColor: #444;
    table {
        width: 100%;
        tr {
            th {
                text-align: left;
                color: $themeColor;
                white-space: nowrap;
                padding: 10px 0;
                border-bottom: 1px solid #eee;
            }
            td {
                white-space: nowrap;
                padding: 10px 0;
                border-bottom: 1px solid #eee;
                color: $fontColor;
            }
        }
    }

</style>
