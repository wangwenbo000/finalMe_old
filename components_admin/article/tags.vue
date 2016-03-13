<template>
  <span><i class="fa fa-tags"></i>&nbsp;Tag:</span>
        <span class="label label-default taglabel"
              v-for="tag in tag.tagArr">
          {{tag}}
          <a href="javascript:;"
             @click="delTag(tag)">
            <i class="fa fa-times"></i>
          </a>
        </span>
  <input type="text"
         name="tagInput"
         placeholder="输入文章关键词"
         v-model="tag.nowInput"
         @keyup.enter="tagInput">
</template>

<script type="text/babel">
  export default{
    tagArrCreate(){
      return this.tag.tagArr.join("|");
    },
    tagInput(){
      if (this.tag.nowInput.replace(/\s/g, "") !== "") {
        this.tag.tagArr.push(this.tag.nowInput);
        this.$set("tag.nowInput", "");
      } else {
        return false;
      }
    },
    delTag(tag){
      this.tag.tagArr.$remove(tag);
    }
  }
</script>