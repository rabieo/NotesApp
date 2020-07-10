export default class Note{
	
	constructor(id, firebaseNote){
		this.id = id
		this.title = firebaseNote.Title
		this.body = firebaseNote.Body
		this.dateCreated = firebaseNote.DateCreated
		this.dateModified = firebaseNote.DateCreated
		this.folder = firebaseNote.Folder
		this.tags = firebaseNote.tags
	}
	
	delete(){
		
	}
	
	setBody(){
		
	}
	
	setTitle(){
		
	}
	
}