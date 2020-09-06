<template>
    <div class="wrapper">
        <h2><span>Row-Col 栅格系统</span></h2>
        <h3>基本用法</h3>
        <e-row gutter="20">
            <e-col span="8" >8</e-col>
            <e-col span="8" >8</e-col>
            <e-col span="8" >8</e-col>
        </e-row>
        <e-row gutter="20">
            <e-col span="2" >2</e-col>
            <e-col span="22" >22</e-col>
        </e-row>

        <p class="code">代码示例</p>
        <codemirror :code="container1Code"></codemirror>
        <h3>偏移量、对齐</h3>
        <e-row>
            <e-col span="2">2</e-col>
            <e-col span="20" offset="2">20, offset="2"</e-col>
        </e-row>

        <e-row align="right">
            <e-col span="6">align="right"</e-col>
        </e-row>
        <p class="code">代码示例</p>
        <codemirror :code="container2Code"></codemirror>
        <h3>响应式栅格</h3>
        <e-row gutter="20">
            <e-col span="8" :phone="{span:24}" :ipad="{span: 12}" :narrowPc="{span: 8}" :pc="{span: 6} " :widePc="{span: 4}">1</e-col>
            <e-col span="8" :phone="{span:24}" :ipad="{span: 12}" :narrowPc="{span: 8}" :pc="{span: 6}" :widePc="{span: 4}">1</e-col>
            <e-col span="8" :phone="{span:24}" :ipad="{span: 12}" :narrowPc="{span: 8}" :pc="{span: 6}" :widePc="{span: 4}">1</e-col>
            <e-col span="8" :phone="{span:24}" :ipad="{span: 12}" :narrowPc="{span: 8}" :pc="{span: 6}" :widePc="{span: 4}">1</e-col>
            <e-col span="8" :phone="{span:24}" :ipad="{span: 12}" :narrowPc="{span: 8}" :pc="{span: 6}" :widePc="{span: 4}">1</e-col>
            <e-col span="8" :phone="{span:24}" :ipad="{span: 12}" :narrowPc="{span: 8}" :pc="{span: 6}" :widePc="{span: 4}">1</e-col>
        </e-row>
        <e-row gutter="20">
            <e-col span="2" :phone="{span:24}" :ipad="{span: 8}" :pc="{span: 4}">1</e-col>
            <e-col span="22" :phone="{span:24}" :ipad="{span: 16}" :pc="{span: 20}">1</e-col>
        </e-row>
        <p class="code">代码示例</p>
        <codemirror :code="container3Code"></codemirror>
        <!--属性-->
        <h3>Row属性</h3>
        <attrTable :attrList="rowAttrList"></attrTable>
        <h3>Col属性</h3>
        <attrTable :attrList="colAttrList"></attrTable>
        <!--下一个-->
        <div class="bottom">
            <div>
                <e-icon name="left"></e-icon>
                <a  @click="toComponent('/layout')">布局</a></div>
            <div>
                <a  @click="toComponent('/toast')">消息提示</a>
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
                rowAttrList: [
                    {
                        name: 'gutter',
                        definition: '栅格间隔',
                        type: '[Number,String]',
                        selectValue: '-',
                        defaultValue: '-'
                    },
                    {
                        name: 'align',
                        definition: '对齐方式',
                        type: '[Number,String]',
                        selectValue: 'left/right/center',
                        defaultValue: 'left'
                    }

                ],
                colAttrList: [
                    {
                        name: 'span',
                        definition: '栅格占据的列数',
                        type: '[Number,String]',
                        selectValue: '-',
                        defaultValue: '-'
                    },
                    {
                        name: 'offset',
                        definition: '栅格左侧的间隔格数',
                        type: '[Number,String]',
                        selectValue: '-',
                        defaultValue: '-'
                    },
                    {
                        name: 'phone',
                        definition: '<576px 响应式栅格数或者栅格属性对象',
                        type: 'Object例如{span:24}',
                        selectValue: '-',
                        defaultValue: '-'
                    },
                    {
                        name: 'ipad',
                        definition: '<768px 响应式栅格数或者栅格属性对象',
                        type: 'Object例如{span:24}',
                        selectValue: '-',
                        defaultValue: '-'
                    },
                    {
                        name: 'narrowPc',
                        definition: '<992px 响应式栅格数或者栅格属性对象',
                        type: 'Object例如{span:24}',
                        selectValue: '-',
                        defaultValue: '-'
                    },
                    {
                        name: 'pc',
                        definition: '<1200px 响应式栅格数或者栅格属性对象',
                        type: 'Object例如{span:24}',
                        selectValue: '-',
                        defaultValue: '-'
                    },
                    {
                        name: 'widePc',
                        definition: '>1200px 响应式栅格数或者栅格属性对象',
                        type: 'Object例如{span:24}',
                        selectValue: '-',
                        defaultValue: '-'
                    }

                ],
                container1Code: '<template>\n' +
                    '    <e-row gutter="20">\n' +
                    '         <e-col span="8" >8</e-col>\n' +
                    '         <e-col span="8" >8</e-col>\n' +
                    '         <e-col span="8" >8</e-col>\n' +
                    '     </e-row>\n' +
                    '\n<br>\n\n' +
                    '     <e-row gutter="20">\n' +
                    '         <e-col span="2" >2</e-col>\n' +
                    '         <e-col span="22" >22</e-col>\n' +
                    '     </e-row>\n' +
                    '</template>',
                container2Code: '<template>\n' +
                    '      <e-row>\n' +
                    '         <e-col span="2">2</e-col>\n' +
                    '         <e-col span="20" offset="2">20, offset="2"</e-col>\n' +
                    '     </e-row>\n' +
                    '\n' +
                    '     <e-row align="right">\n' +
                    '         <e-col span="6">align="right"</e-col>\n' +
                    '     </e-row>\n' +
                    '</template>',
                container3Code: '<template>\n' +
                    '    <e-row gutter="20">\n' +
                    '         <e-col span="8" :phone="{span:24}" :ipad="{span: 12}" :narrowPc="{span: 8}" :pc="{span: 6} " :widePc="{span: 4}">1</e-col>\n' +
                    '         <e-col span="8" :phone="{span:24}" :ipad="{span: 12}" :narrowPc="{span: 8}" :pc="{span: 6}" :widePc="{span: 4}">1</e-col>\n' +
                    '         <e-col span="8" :phone="{span:24}" :ipad="{span: 12}" :narrowPc="{span: 8}" :pc="{span: 6}" :widePc="{span: 4}">1</e-col>\n' +
                    '         <e-col span="8" :phone="{span:24}" :ipad="{span: 12}" :narrowPc="{span: 8}" :pc="{span: 6}" :widePc="{span: 4}">1</e-col>\n' +
                    '         <e-col span="8" :phone="{span:24}" :ipad="{span: 12}" :narrowPc="{span: 8}" :pc="{span: 6}" :widePc="{span: 4}">1</e-col>\n' +
                    '         <e-col span="8" :phone="{span:24}" :ipad="{span: 12}" :narrowPc="{span: 8}" :pc="{span: 6}" :widePc="{span: 4}">1</e-col>\n' +
                    '     </e-row>\n' +
                    '\n<br>\n' +
                    '     <e-row gutter="20">\n' +
                    '         <e-col span="2" :phone="{span:24}" :ipad="{span: 8}" :pc="{span: 4}">1</e-col>\n' +
                    '         <e-col span="22" :phone="{span:24}" :ipad="{span: 16}" :pc="{span: 20}">1</e-col>\n' +
                    '     </e-row>\n' +
                    '</template>'
            }

        },
        mounted() {
        },
        methods: {
            toComponent(path) {
                this.$router.push(
                    path
                )
            }
        }

    }
</script>
<style lang="scss" scoped>
    $themeColor: #41BD84;
    $fontColor: #444;
    .wrapper {
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
    .e-col {
        height: 40px;
        background: #e5e9f2;
        border: 1px solid #99a9bf;
    }
</style>
