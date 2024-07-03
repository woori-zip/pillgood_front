<template>
  <div>
    <QuillEditor v-model="content" :options="editorOptions" />
  </div>
</template>

<script>
import { ref } from 'vue';
import { QuillEditor } from '@vueup/vue-quill';

export default {
  name: 'RichTextEditor',
  components: {
    QuillEditor
  },
  setup() {
    const content = ref('');
    const editorOptions = {
      placeholder: 'Write something...',
      modules: {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          ['image', 'code-block']
        ]
      }
    };

    return {
      content,
      editorOptions
    };
  }
}
</script>

<style>
/* 필요한 스타일링을 추가할 수 있음 */
</style>
