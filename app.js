addEventListener('submit',(e)=>{

    const title= document.getElementById("title").value;
    const work= document.getElementById("work").value;

  
    const chk = document.querySelectorAll(".chkbtn");
     let id = chk.length+1
    
    const todo=  objectmaker(title,work,id)

  

  setdata(todo);
})



  objectmaker=(title,work,id)=>{

    let it={};
   
it.title=title;
it.work=work;
it.id=id;

return it;
}


setdata=(data)=>{
const todo= getdata();
todo.push(data);
localStorage.setItem('todo',JSON.stringify(todo));


}



getdata=()=>{
    let todos;
    if(localStorage.getItem("todo")===null) todos=[];


    else{
        todos =JSON.parse(localStorage.getItem('todo'));
    }
    return todos;
}





showdata=()=>{

    const work =getdata();

  work.forEach(element => {
      


    const row = document.createElement("tr");



    row.innerHTML=`<th scope="row">${element.id}</th>
                    <td>${element.title}</td>        
                    <td>${element.work}</td>
                    <td class="chkvalue">Uncompleted</td>
                    <td class="chkbtn delete "><input type="checkbox"  value="Uncompleted"></td>

    `
    const target = document.getElementsByTagName("table");

    const targetelement=target[0].children[0];
  
  
  
    targetelement.append(row);
  


    const chk = document.querySelectorAll(".chkbtn");

    const dataformat = document.querySelectorAll(".chkvalue");

  

    Toogle(i=chk.length-1,dataformat);

  });





          
  

}



Toogle=(index,data)=>{

    const btn = document.querySelectorAll(".chkbtn");
     btn[index].addEventListener("click",()=>{
         const valchk = data[index].innerHTML;


         valchk==='Uncompleted'?
         data[index].innerHTML='Completed':
         data[index].innerHTML='Uncompleted'
     })

  }




showdata();
