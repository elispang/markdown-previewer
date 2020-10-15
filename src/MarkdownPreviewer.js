import React, {Component} from 'react';

class MarkdownPreviewer extends Component {
    constructor(){
        super()
        this.state={
            editorText: "Editville",
            previewText: "PreviewTown"
            
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    render(){
        return(
        <div>
            <textarea 
            id="editor" 
            name="editorText" 
            value={this.state.editorText}
            onChange={this.handleChange} 
            />
            <textarea 
            id="preview" 
            value={this.state.editorText}
            readOnly/>
        </div>
        )
    }
}


export default MarkdownPreviewer;