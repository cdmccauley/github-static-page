// default imports
import React, { Component } from 'react';
import './MarkdownPreviewer.css';

// material-ui imports
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

// import marked
import marked from 'marked';

// declaration
const initialMarkdown = `# h1

## h2

\`<div></div>\`

\`\`\`
constructor(props) {
	super(props);
	this.state = {
		markdown: initialMarkdown
	}
	this.handleChange = this.handleChange.bind(this);
}
\`\`\`

ul
- li

> blockquote

[Link](https://cdmccauley.github.io)

![Image](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png)

**bold text**
`

// configure marked
marked.setOptions({
  breaks: true,
	gfm: true,
});
const customRenderer = new marked.Renderer();
customRenderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + '</a>';
};

class MarkdownPreviewer extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			markdown: initialMarkdown
		}
		this.handleChange = this.handleChange.bind(this);
		this.clearTb = this.clearTb.bind(this);
	}
	
	render() {
		return (
      <div style={{ marginBottom: '1em' }}>
				<div id="tag">
					<Typography variant="subheading">Enter markdown below to preview.</Typography>
					<Button variant="contained" style={{ color: 'black' }} onClick={ this.clearTb }><DeleteIcon />Clear</Button>
				</div>
        <EditComponent markdown={this.state.markdown} onChange={this.handleChange} />
        <PreviewComponent markdown={this.state.markdown} />
      </div>
    )};
	
	clearTb(props) {
		this.setState({
			markdown: ''
		})
	};
	
	// handle editcomponent textarea updates
	handleChange(props) {
		this.setState({
			markdown: props.target.value
		})
	};
};

// editcomponent definition
const EditComponent = (props) => {
	return <textarea type="text" id="editor" value={props.markdown} onChange={props.onChange} />;
};

// previewcomponent definition
const PreviewComponent = (props) => {
	return <div id="preview" dangerouslySetInnerHTML={{ __html: marked(props.markdown, {renderer: customRenderer})}} />
};

// render app
//ReactDOM.render(<App />, document.getElementById('root'));

export default MarkdownPreviewer;