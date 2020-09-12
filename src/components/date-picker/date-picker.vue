<template>
    <div v-click-outside="onBlurInput" class="e-date-picker">
        <e-input @focus="onFocusInput" :value="formatDate"></e-input>
        <div class="e-date-picker-pop" v-show="popVisible">
            <div class="e-date-picker-nav">
                <span class="preYear"> <e-icon name="leftleft"></e-icon></span> <span class="preMonth"> <e-icon
                    name="left2"></e-icon></span>
                <span class="yearAndMonth">
                    <span class="years" @click="onClickYears">2020年</span>
                    <span @click="onClickMonth">12月</span>
              </span>
                <span class="nextMonth"> <e-icon name="right2"></e-icon></span> <span class="nextYear"> <e-icon
                    name="rightright"></e-icon></span>
            </div>
            <div class="e-date-picker-panels">
                <div v-if="mode === 'years'" class="e-date-picker-content">年</div>
                <div v-else-if="mode === 'months'" class="e-date-picker-content">月</div>
                <div v-else class="e-date-picker-content">
                    <!--星期-->
                    <div class="e-date-picker-weekdays">
                        <span class="e-date-picker-cell" v-for="i in helper.range(0,6)" :key="i">
                            {{weekdays[i]}}
                        </span>
                    </div>
                    <!--日期-->
                    <div class="e-date-picker-row" v-for="i in helper.range(1, 42/7)" :key="i">
                    <span class="e-date-picker-cell" v-for="j in helper.range(1,7)" :key="j" @click="onClickCell(visibleDays[(i-1)*7+j-1])">
                       {{visibleDays[(i-1)*7+j-1].getDate()}}
                    </span>
                    </div>
                </div>
            </div>
            <div class="e-date-picker-action"></div>
        </div>
    </div>
</template>

<script>
    import eInput from '@/components/input'
    import eIcon from '@/components/icon'
    import clickOutside from '../click-outside'
    import helper from './helper'

    export default {
        components: {
            eInput, eIcon
        },
        directives: {clickOutside},
        data() {
            return {
                popVisible: false,
                mode: 'days',
                value: new Date(),
                helper: helper,
                weekdays: ['一', '二', '三', '四', '五', '六', '日'],
            }
        },
        mounted() {
        },
        methods: {
            onFocusInput() {
                this.popVisible = true
            },
            onBlurInput() {
                this.popVisible = false
            },
            onClickYears() {
                console.log('years')
                this.mode = 'years'
            },
            onClickMonth() {
                this.mode = 'months'
            },
            onClickCell(date) {
                this.value = date
            }
        },
        computed: {
            visibleDays() {
                let date = this.value
                let firstDay = helper.firstDayOfMonth(date)
                // let lastDay = helper.lastDayOfMonth(date)
                let array = []
                // let [year, month] = helper.getYearMonthDate(date)
                let n = firstDay.getDay() // 1号前面有多少天
                let x = firstDay - (n === 0 ? 6 : n - 1) * 3600 * 24 * 1000
                for (let i = 0; i < 42; i++) {
                    array.push(new Date(x + i * 86400 * 1000))
                }

                return array
            },
            formatDate() {
               const [year,month,day]=helper.getYearMonthDate(this.value)
                return  `${year}-${month+1}-${day}`
            }
        }

    }
</script>

<style lang="scss" scoped>
    .e-date-picker {
        &-pop {
            position: absolute;
            border: 1px solid #e4e7ed;
            box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        }

        &-nav {
            width: 210px;
            height: 30px;
            line-height: 30px;
            padding: 0 10px;
            display: flex;
            .yearAndMonth {
                margin: 0 auto;
            }
            & .preYear {

            }

            & .nextYear {

            }
        }

        &-cell {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            height: 30px;
            width: 30px;
        }
    }

</style>
