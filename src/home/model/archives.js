'use strict';
/**
 * relation model
 */
export default class extends think.model.relation {
  /**
   * init
   * @param  {} args []
   * @return {}         []
   */
  init(...args){
    super.init(...args);

    this.relation = {
      cate: {
        type: think.model.MANY_TO_MANY, //relation type
        model: "", //model name
        name: "profile", //data name
        key: "id",
        fKey: "user_id", //forign key
        field: "id,name",
        where: "name=xx",
        order: "",
        limit: "",
        rModel: "",
        rfKey: ""
      }
    }
  }
}