const notes =require('./notes.js');
const chalk = require('chalk');
const yargs =require('yargs');
const fs =require('fs');
console.log(process.argv);
//confinguration version is also possible
yargs.version('1.1.0'); 
//create add command
yargs.command({
   command:"add",
   description:"add a new node",
   builder:{
       title:{
        description:"note title",
        demandOption:true,
        type:'string'
       },
       body:{
        description:"note title",
        demandOption:true,
        type:'string'
       }
   },
   handler(argv){
      notes.add_Notes(argv.title,argv.body);
     
   }

})


//lets remocing node
yargs.command({
      command:"remove",
       description:"remove a existing node",
       builder:{
           title:{
               description:"note title",
               demandOption:true,
               type:'string'
           },
           body:{
            description:"body title",
            type:'string'
        }
       },
       handler(argv){
        notes.remove_Notes(argv.title);
    }


})

//listing a node
yargs.command({
  command:"list",
  describe:"listing a node",
  handler(){
  notes.list_notes();
  }
});

//read notees
yargs.command({
  command:"read",
  describe:"read note and With respact title",
  builder:{
    title:{
        description:"Read title",
        demandOption:true,
        type:'string'
       }
  },
  handler(argv){
   notes.read_notes(argv.title);
  }

});
yargs.parse()