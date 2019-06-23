
// import draggable from 'vuedraggable';
// Vue.component('draggable', draggable);

Vue.component('code-editor',{
  props:['id','title','length'],
  data:function () {
    return {
      code:''
    }
  },
  template: '#code-editor',
  created(){
  },
  methods:{
    toggle_id(event){
      // console.log(event.target);
    },
    delete_editor(id){
      this.$parent.delete_editor(id);
    },
    add_editor(data){
      this.$parent.add_editor(data);
    },
    execute(){
      if(this.code != ''){
        this.$parent.results = alasql(this.code.replace(/\n/g, ""));
        if(Array.isArray(this.$parent.results)){
         this.$parent.keys = Object.keys(this.$parent.results[0]);
        this.$emit('results',alasql(this.code));
        this.$emit('keys',Object.keys(this.$parent.results[0])) 
        }
      }
}
    },
})
var app = new Vue({
  el: '#app',
  data: {
    results:[],
    keys:[],
    templates:[
      {id:1,title:'Section'}
    ]
  },
  mounted(){

  },
  created(){
  },
  methods:{
    add_editor(data){
      this.templates.push(data)
    },
    delete_editor(id){
      if(this.templates.length > 1){
       this.templates.splice( this.templates.indexOf(parseInt(id)), 1);
    }
}
    },
})
