var playlist = {"Elton John":"Your Song"}

function updatePlaylist(playlist,artist,title){
  playlist[artist] = title
  return playlist
}

function removeFromPlaylist(playlist,artist){
  delete playlist[artist]
  return playlist
}
