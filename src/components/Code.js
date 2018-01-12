import React, { Component } from 'react';
import Clipboard from 'clipboard';

const template = ({ address, text, actionText, alt, type, size, position }) => {
  const attrs = [
    ['address', address],
    ['text', text],
    ['action-text', actionText],
    ['alt', alt ? 'true' : 'false'],
    ['type', type],
    ['size', size],
    ['position', position]
  ];

  const attrString = attrs.reduce((str, [name, value]) => (`${str}data-${name}="${value}" `), '').trim();

  return `<div class="nav-btn-placeholder" ${attrString}></div>`;
};

const snippet = (props) => (
`<script type="text/javascript">
(function(d, id) {
if (!d.getElementById(id)) {
  var js;
  js = d.createElement("script");
  js.id = id;
  js.src = "//cdn.rawgit.com/brianium/nav-button/10bd8e501bf21a8429759917e475558745d88471/nav-embed.js";
  d.head.appendChild(js);
}
}(document, 'nav-embed-js'));
</script>
${template(props)}`
);

export default class Code extends Component {
  componentDidMount() {
    const { element } = this;
    new Clipboard(element);
  }

  render() {
    const { props } = this;
    return (
      <div className="text-left">
        <h6>
          Embed code
          <button title="copy embed code" className="ml-3" ref={(element) => { this.element = element; }} data-clipboard-target="#snippet" style={{cursor: 'pointer'}}>
            <i className="fas fa-paste" />
          </button>
        </h6>
        <pre id="snippet">{snippet(props)}</pre>
      </div>
    );
  }
}
