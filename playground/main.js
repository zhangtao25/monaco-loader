import loader from '../src'
loader.init().then(monaco => monaco.editor.create(document.body, {
  value: '// some comment',
  language: 'javascript',
}));
