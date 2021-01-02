<template>
  <div class="e-col" :style="colStyle" :class="colClass">
    <slot></slot>
  </div>
</template>

<script>
let validator = value => {
  let keys = Object.keys(value);
  let valid = true;
  keys.forEach(key => {
    if (!["span", "offset"].includes(key)) {
      valid = false;
    }
  });
  return valid;
};
export default {
  name: "eCol",
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
    phone: {
      type: Object,
      validator
    },
    ipad: {
      type: Object,
      validator
    },
    narrowPc: {
      type: Object,
      validator
    },
    pc: {
      type: Object,
      validator
    },
    widePc: {
      type: Object,
      validator
    }
  },
  data() {
    return {
      gutter: 0
    };
  },
  computed: {
    colClass() {
      let { span, offset, phone, ipad, narrowPc, pc, widePc } = this;
      // phone?
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        phone && phone.span && `col-phone-${phone.span}`,
        phone && phone.offset && `offset-phone-${phone.offset}`,
        ipad && ipad.span && `col-ipad-${ipad.span}`,
        ipad && ipad.offset && `offset-ipad-${ipad.offset}`,
        narrowPc && narrowPc.span && `col-narrow-pc-${narrowPc.span}`,
        narrowPc && narrowPc.offset && `offset-narrow-pc-${narrowPc.offset}`,
        pc && pc.span && `col-pc-${pc.span}`,
        pc && pc.offset && `offset-pc-${pc.offset}`,
        widePc && widePc.span && `col-wide-pc-${widePc.span}`,
        widePc && widePc.offset && `offset-wide-pc-${widePc.offset}`
      ];
    },
    colStyle() {
      return {
        paddingRight: this.gutter / 2 + "px",
        paddingLeft: this.gutter / 2 + "px"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.e-col {
  /*height: 40px;*/
  /*background: grey;*/
  /*!*width: 50%;*!*/
  /*border: 1px solid red;*/

  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }
  @media (min-width: 0px) {
    $class-prefix: col-phone-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class-prefix: offset-phone-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
  @media (min-width: 576px) {
    $class-prefix: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class-prefix: offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
  @media (min-width: 768px) {
    $class-prefix: col-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class-prefix: offset-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
  @media (min-width: 992px) {
    $class-prefix: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class-prefix: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
  @media (min-width: 1200px) {
    $class-prefix: col-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class-prefix: offset-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
}
</style>
