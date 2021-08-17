const fs = require('fs')
const chalk = require('chalk')

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note)=> note.title!==title)
    if(notes.length>notesToKeep.length){
        console.log(chalk.bgGreen('Note removed!'))
    } else{
        console.log(chalk.bgRed('No note found!'))
    }
    saveNotes(notesToKeep)
}

const addNote = (title, body) => {
    const notes = loadNotes()
    //const duplicateNotes = notes.filter((note) => note.title === title) ** this line searches for all duplicates in a whole array.
    const duplicateNote = notes.find((note)=>note.title===title) // ** this line searches for the first coincidence and returns true or false.
    
    debugger //To debug node apps, type 'node inspect app.js' with the needed args, then open a chrome tab and visit chrome://inspect.

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'))
    } else{
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note)=>note.title===title)
    if (note){
        console.log(chalk.green.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('No note with such title found.'))
    }

}

const listNotes = () =>{
    const notes = loadNotes();
    console.log(chalk.blue('Your notes...'))
    notes.forEach(note => {
        console.log(chalk.green(note.title))
    });
}

module.exports = {
    readNote: readNote,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}




