<template>
    <div class="input-wrapper">
        <h2><span>Input 输入框</span></h2>
        <h3>基本用法</h3>
        <p><e-input :value="message"></e-input> 支持双向绑定： <e-input  v-model="message"></e-input> </p>
        <p class="code">代码示例</p>
        <codemirror :code="input1Code"></codemirror>
        <h3>禁用和只读</h3>
        <p>禁用：   <e-input value="我被禁用了" disabled></e-input> 只读：       <e-input value="我是只读的 " readonly></e-input> </p>


        <p class="code">代码示例</p>
        <codemirror :code="input2Code"></codemirror>

        <h3>文字提示</h3>

        <e-input value="输入框" error="姓名不能少于两个字符"></e-input>
        <p class="code">代码示例</p>
        <codemirror :code="input3Code"></codemirror>
        <!--属性-->
        <h3>属性</h3>
        <attrTable :attrList="buttonAttrList"></attrTable>
        <!--下一个-->
        <div class="bottom">
            <div>
                <e-icon name="left"></e-icon>
                <a>无</a></div>
            <div>
                <a>输入框</a>
                <e-icon name="right"></e-icon>
            </div>

        </div>
    </div>
</template>
<script>
    import codemirror from '@/views/components/codemirror.vue'
    import attrTable from '@/views/components/table.vue'

    export default {
        components: {
            codemirror, attrTable
        },
        data() {
            return {
                loading1: true,
                message: 'input 双向绑定',
                buttonAttrList: [
                    {
                        name: 'value',
                        definition: 'input的value',
                        type: 'String',
                        selectValue: '-',
                        defaultValue: '-'
                    },
                    {
                        name: 'disabled',
                        definition: 'input是否禁用',
                        type: 'Boolean',
                        selectValue: '-',
                        defaultValue: 'false'
                    },
                    {
                        name: 'readonly',
                        definition: 'input是否只读',
                        type: 'Boolean',
                        selectValue: '-',
                        defaultValue: 'false'
                    },
                    {
                        name: 'error',
                        definition: '输入错误提示',
                        type: 'String',
                        selectValue: '-',
                        defaultValue: '-'
                    },

                ],
                input1Code:
                   '<template>\n' +
                    '   <p>' +
                    '   \n' +
                    '      <e-input :value="message"></e-input> ' +
                    '   \n' +
                    '      支持双向绑定： ' +
                    '   \n' +
                    '      <e-input  v-model="message"></e-input>' +
                    '   \n ' +
                    '   </p>\n' +
                    '</template>'+
                    '\n'
                + '\n'+
                    '<script>' +
                    '\n ' +
                    'export default {' +
                    '\n' +
                    '    data () {' +
                    '\n' +
                    '       message: "input 双向绑定"' +
                    '\n' +
                    '    }' +
                    '\n' +
                    '}' +
                    '\n' +
                    '< /script>',
                input2Code: '<template>\n' +
                    '   <p>' +
                    '   \n' +
                    '     禁用：  ' +
                    '   \n' +
                    '     <e-input value="我被禁用了" disabled></e-input>' +
                    '   \n' +
                    '     只读：  ' +
                    '   \n' +
                    '      <e-input value="我是只读的 " readonly></e-input> ' +
                    '   \n' +
                    '   </p>\n' +
                    '</template>',
                input3Code: '<template>\n' +
                    '    <e-input value="输入框" error="姓名不能少于两个字符"></e-input>\n' +
                    '</template>'

            }

        },
        mounted() {
        },
        methods: {}

    }
</script>
<style lang="scss" scoped>
    $themeColor: #41BD84;
    $fontColor: #444;
    .input-wrapper {
        padding: 5vh;
        height: 100%;

        h2 > span {
            display: inline-block;
            padding-bottom: 4px;
            border-bottom: 3px solid $themeColor;

        }

        h3 {
            margin: 5vh 0 2vh 0;

            &::before {
                content: '';
                width: 6px;
                height: 6px;
                display: inline-block;
                background-color: #000;
                border-radius: 3px;
                vertical-align: middle;
                margin-right: 5px;
            }
        }

        > .e-button {
            margin-right: 10px;
        }

        .code {
            padding: 10px 0;
            color: $themeColor;
            font-weight: 700;
        }

        .bottom {
            margin: 50px 0 20px 0;
            display: flex;
            justify-content: space-between;

            a {
                text-decoration: none;
                color: $fontColor;
                font-size: 16px;
                line-height: 16px;

                &:hover {
                    cursor: pointer;
                    font-weight: 700;
                }
            }
        }
    }
</style>
