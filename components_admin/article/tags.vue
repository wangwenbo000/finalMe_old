<template>
  <span><i class="fa fa-tags"></i>&nbsp;Tag:</span>
        <span class="label label-default taglabel"
              v-for="tag in tags.tagArr">
          {{tag}}
          <a href="javascript:;"
             @click="delTag(tag)">
            <i class="fa fa-times"></i>
          </a>
        </span>
  <input type="text"
         name="tagInput"
         placeholder="输入文章关键词"
         v-model="tags.nowInput"
         @keyup.enter="tagInput">
</template>

<script type="text/babel">
  export default{
    props: ['tags','mktagsstr'],
    methods:{
      tagArrCreate(){
        this.$set('mktagsstr',this.tags.tagArr.join("|"));
      },
      tagInput(){
        if (this.tags.nowInput.replace(/\s/g, "") !== "") {
          this.tags.tagArr.push(this.tags.nowInput);
          this.$set("tags.nowInput", "");
          this.tagArrCreate();
        } else {
          return false;
        }
      },
      delTag(tag){
        this.tags.tagArr.$remove(tag);
        this.tagArrCreate();
      }
    }
  }
</script>