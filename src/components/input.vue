<template>
    <div class="e-input wrapper" :class="{error}">
        <input :value="value" :disabled="disabled" :readonly="readonly" type="text" @change="$emit('change', $event.target.value)"
               @input="$emit('input', $event.target.value)"
               @focus="$emit('focus', $event.target.value)"
               @blur="$emit('blur', $event.target.value)"
        />
        <template v-if="error">
            <e-icon  name="error" class="icon-error"></e-icon>
            <span class="errorMessage">{{error}}</span>
        </template>

    </div>
</template>

<script>
    import eIcon from "@/components/icon.vue";
    export default {
        components: {eIcon},
        name: 'eInput',
        props: {
            value: {
                type: [String, Date],
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $border-radius: 4px;
    $font-size: 12px;
    $box-shadow-color: rgba(0,0,0,0.5);
    $red: #F1453D;
    .wrapper {

        display: inline-block;
        font-size: $font-size;
        align-items: center;
        > * {
            margin-right: .5em;
            &:last-child{
                margin-right: 0;
            }
        }
        >input {
            height: 32px;border: 1px solid $border-color;
            border-radius: 4px;padding: 0 8px;
            font-size: inherit;
            &:hover {
                border-color: $border-color-hover;
            }
            &:focus {
                box-shadow: inset 0 1px 3px $box-shadow-color;
                outline: none;
            }
            &[disabled] {
                border-color: #aaa;
                color: #aaa;
                cursor: not-allowed;
            }
        }
        &.error {
            >input {
                border-color: $red;
            }

        }
        .icon-error {
            fill: $red;
        }
        .errorMessage {
            color: $red;
        }
    }
</style>
