export default{
  ready(){
    $("[type='checkbox']").bootstrapSwitch({
      onColor: 'success',
      onText: '开',
      offText: '关'
    });
  },
}