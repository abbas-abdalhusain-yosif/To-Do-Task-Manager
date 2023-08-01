let form_add_task=document.getElementById("form-add-task");
let btn_add_task=document.querySelector("#form-add-task input[type='submit']");
let input_task=document.querySelector("#form-add-task input[type='text']")
let container_new_tasks=document.getElementsByClassName("tasks-container")[0];



btn_add_task.addEventListener("click",function(e){
e.preventDefault();
if(input_task.value=="") return;
let new_task=document.createElement("div");
let new_task_title=document.createElement("input");
let div_btns=document.createElement("div");
let new_task_done=document.createElement("button");
let new_task_delete=document.createElement("button");
let new_task_edit=document.createElement("button");
// let new_task_edit_input=document.createElement("input");



new_task_title.value=input_task.value;
new_task_title.setAttribute("disabled","disabled");
new_task_title.style.border="none";
new_task_title.style.fontSize="2em";
new_task_title.style.color="black";
new_task_done.textContent="Done";
new_task_done.setAttribute("id", "btn_done");
new_task_delete.textContent="Delete";
new_task_delete.setAttribute("id", "btn_delete");
new_task_edit.textContent="Edit";
new_task_edit.setAttribute("id", "btn_edit");



new_task.appendChild(new_task_title);
div_btns.appendChild(new_task_done);
div_btns.appendChild(new_task_delete);
div_btns.appendChild(new_task_edit);
new_task.appendChild(div_btns);
container_new_tasks.appendChild(new_task);



new_task_done.addEventListener("click", function(e){
    e.target.parentElement.parentElement.style.backgroundColor="darkslategrey";
});
new_task_delete.addEventListener("click", function(e){
    e.target.parentElement.parentElement.parentElement.removeChild(e.target.parentElement.parentElement);
});
new_task_edit.addEventListener("click",function(e){
if(e.target.textContent=="Edit")
{
    new_task_title.removeAttribute("disabled");
    e.target.textContent="Ok";
}else if(e.target.textContent=="Ok") 
{
    new_task_title.setAttribute("disabled","disabled");
    e.target.textContent="Edit";  
}
});

input_task.value="";
});