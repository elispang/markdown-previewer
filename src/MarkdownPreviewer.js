import React, {Component} from 'react';
const marked = window.marked;

marked.setOptions({
    breaks: true,
  });

class MarkdownPreviewer extends Component {
    constructor(){
        super()
        this.state={
            editorText: placeholder,
            previewText: ""
            
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
            <div id="preview" dangerouslySetInnerHTML={{ __html: marked(this.state.editorText)}}></div>
        </div>
        )
    }
}

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

export default MarkdownPreviewer