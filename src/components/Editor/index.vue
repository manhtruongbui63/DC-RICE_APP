<template>
  <Editor
    v-model="content"
    api-key="gndcyxqarv2mw2esravlv1ir7vqgqvecrxfknmti32y4dbmq"
    :init="{
      toolbar_mode: 'sliding',
      height: 500,
      plugins:
        'advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount',
      toolbar:
        'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
      tinycomments_mode: 'embedded',
      readonly: false,
      automatic_uploads: true,
      file_picker_types: 'image',
      file_picker_callback: pickerImage
    }"
  />
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
export default {
  components: { Editor },
  data() {
    return {
      content: ''
    }
  },
  methods: {
    pickerImage(callback, value, meta) {
      const input = document.createElement('input')
      input.setAttribute('type', 'file')
      input.setAttribute('accept', 'image/*')
      input.onchange = function () {
        const file = this.files[0]
        const reader = new FileReader()
        reader.onload = function () {
          const id = 'blobid' + new Date().getTime()
          const blobCache = window.tinymce.activeEditor.editorUpload.blobCache
          const base64 = reader.result.split(',')[1]
          const blobInfo = blobCache.create(id, file, base64)
          blobCache.add(blobInfo)
          callback(blobInfo.blobUri(), { title: file.name })
        }
        reader.readAsDataURL(file)
      }
      input.click()
    }
  }
}
</script>

<style lang="scss" scoped>
.tox-tinymce {
  border-radius: 4px !important;
}
</style>
