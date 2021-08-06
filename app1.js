
// const chalk = require('chalk')
// const yargs = require('yargs');
// const notes = require('./notes.js')

// // fs.writeFileSync('notes.txt','amr node');
// // fs.appendFileSync('notes.txt','amr node a7a');
// // Create add command
// yargs.command({
//     command: 'add',
//     describe: 'Add a new note',
//     builder: {
//         title: {
//             describe: 'Note title',
//             demandOption: true,
//             type: 'string'
//         },
//         body: {
//             describe: 'Note body',
//             demandOption: true,
//             type: 'string'
//         }
//     },
//     handler: function (argv) {
//         notes.addNote(argv.title, argv.body)
//     }
// })

// // Create remove command
// yargs.command({
//     command: 'remove',
//     describe: 'Remove a note',
//     builder: {
//         title: {
//             describe: 'Note title',
//             demandOption: true,
//             type: 'string'
//         }
//     },
//     handler: function (argv) {
//         notes.removeNote(argv.title)
//     }
// })
// // Create list command
// yargs.command({
//     command: 'list',
//     describe: 'List your notes',
//     handler: function () {
//         console.log('Listing out all notes')
//     }
// })
// // Create read command
// yargs.command({
//     command: 'read',
//     describe: 'Read a note',
//     handler: function () {
//         console.log('Reading a note')
//     }
// })

// yargs.parse()

var x = 2,counter=0;
var array = [1,2,5,1,1,2,3,5,1];
var array2 = [];

function fence(array,x){
    for (let f = 0; f <= array.length; f++) {
    const element = array[f];
    for (let f2 = f; f2 <= array.length; f2++) {
        const element2 = array[f2];
        if (element==element2 && f !== f2 ) {
            array2.push(element)
            for (let f3 = 0; f3 <= array.length; f3++) {
                if (array[f3] == element) {
                    array.splice(f3, 1);
                    f3=-1;
                }
            }
            f=-1;
        }
    }
}
    for (let w = 0; w < array2.length; w++) {
        const element1 = array2[w];
        for (let h = w; h < array2.length; h++) {
            const element2 = array2[h];
            if ((element1*element2)>=x && h != w) {
                counter++;
            }
        }
    }
    return counter;
}

console.log("number of ways to build the fence =",fence(array,x));