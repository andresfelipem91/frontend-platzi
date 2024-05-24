//shift()
const colors= ['yellow', 'blue', 'red']
const removeColor=colors.shift()
console.log(colors)
console.log(removeColor)

//unshift()
const newColors=colors.unshift('pink','purple')
console.log(colors)
console.log(newColors)

//ejercicio
function managePlayList(playlist,newSong){
    playlist.shift()
    playlist.unshift(newSong)
    return playlist
}
const initialPlaylist=['Sweater Weater', 'what you know','Feria de la noche']
const newSongToAdd='The Adults Are Tasking'

const updatedPlayList=managePlayList(initialPlaylist,newSongToAdd);
console.log('Initial playList:',initialPlaylist)
console.log('New song to add:',newSongToAdd)
console.log('Updated playList:',updatedPlayList)