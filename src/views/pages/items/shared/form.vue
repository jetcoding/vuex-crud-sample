<template>
  <form @submit.prevent="$emit('v-save')">
    <div>
      <label>text area</label>
      <textarea
        placeholder="text" v-model="form.text" rows="5"
      ></textarea>
    </div>
    <div>
      <label>
        <input
          type="checkbox"
          v-model="form.check"
          @change="$emit('v-change')"
        >
        Checkbox
      </label>
    </div>
    <div>
      <button>Submit</button>
    </div>
  </form>
</template>
<script>
export default {
  name: 'Form',
  props: ['form']
}
</script>
