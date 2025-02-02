import Column from "./column.js";

export default class kanban{
  constructor(root){
    this.root=root;

    kanban.columns().forEach(column=>{
      // TODO: create an instance in  column class
      const columnView = new Column(column.id, column.title);
      this.root.appendChild(columnView.elements.root);
    })
  }  

  static  columns(){
    return[
     {
       id:1,
      title:"Not Started"
     },
     {
       id:2,
      title:"In Progress"
     },
     {
       id:3,
      title:"Completed"
     }
    ];
  }

}