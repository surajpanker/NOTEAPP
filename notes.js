const chalk = require('chalk');

const fs =require('fs');
const getNotes = ()=> "this is your notes";


const addNotes = function(title,body){
 
const notes =loadnotes();

/*
const duplicateNotes = notes.filter(notes=>{
return notes.title===title;
})
*/
const duplicateNotes =notes.find((i)=>i.title===title)
debugger
if(duplicateNotes===undefined)
{//push array into object
notes.push({
  title:title,
  body:body
});
saveNotes(notes);}
else{
  console.log("note is already exists");
}

}
const saveNotes=function(notes){
const jsonArr =JSON.stringify(notes);
fs.writeFileSync('notes.json',jsonArr);
}
const loadnotes =function(){
//return array of nodes

  try
  {
 const buferData=fs.readFileSync('notes.json');
 const Jsondata = buferData.toString();
 return JSON.parse(Jsondata);
  }
  catch(e){
    return []
  }

}

const removeNotes =function(title)
{
      const readData= fs.readFileSync('notes.json');
      const readstring =readData.toString();
      const parseData =JSON.parse(readstring);
      let result = remove_note(parseData,title);
      if(result){
        const s = chalk.green(`Notes has been removed successfylly ${title}`)
        console.log(s);
      }
      else{
        const ne =chalk.red(`Notes not exists`)
        console.log(ne);

      }
}

const remove_note=function(notes_arr,title){
  let a =false;
 const arr= notes_arr.filter((data)=>{
   if(data.title!==title){
    return true;
   }
   if(data.title===title){
    a=true;
   }
  });

  if(arr.length!==0 && a)
  {
    const updateData =JSON.stringify(arr);
  fs.writeFileSync('notes.json',updateData);
  const remove =chalk.green("title remove succesfully");
  console.log(remove)
  return true;
 }

 else{
return false;

}

}
const ListNotes =()=>{

  console.log("listin a node successfully");
  const BufferData =fs.readFileSync('notes.json');
  const ConvStr =BufferData.toString();
  const Parsedata =JSON.parse(ConvStr);
  Parsedata.forEach(element => {
      
      const str = chalk.blue.bold('Your notes')+element.title;
      console.log(str);
  });
}
const ReadNotes =(title)=>{
  
  console.log("listin a node successfully");
  const BufferData1 =fs.readFileSync('notes.json');
  const ConvStr1 =BufferData1.toString();
  const Parsedata1 =JSON.parse(ConvStr1);
  let find =false;
  try
{
  Parsedata1.forEach((el)=>{
    if(el.title==title){
      
    let data = chalk.green(el.title) +chalk.bold(el.body);
    console.log(data);
    find =true;
    }
  });
  }
  catch(e){
    console.log(e)
  }
 if(!find)
   console.log(chalk.red("Note is not found"));


}
module.exports ={
  get_Notes:getNotes,
  add_Notes:addNotes,
  remove_Notes:removeNotes,
  list_notes:ListNotes,
  read_notes:ReadNotes
}
