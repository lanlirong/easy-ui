<template>
  <div class="datepicker">
    <e-date-picker :value="myDate" @input="myDate = $event"></e-date-picker>
    <e-date-picker :value="myDate" @input="myDate = $event"></e-date-picker>
  </div>
</template>

<script>
import eDatePicker from "@/components/date-picker/date-picker";

export default {
  components: {
    eDatePicker
  },
  data() {
    return {
      myDate: new Date()
    };
  }
};
</script>
