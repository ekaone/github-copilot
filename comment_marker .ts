interface CommentMarker {
  start: string;
  end: string;
}

const markers: { [language:string]: CommentMarker } = {
  javascript: { start: '//', end: ''},
  python:     { start: '#', end: ''},
  typescript: { start: '//', end: ''},
  css:        { start: '/*', end: '*/'},
  html:       { start: '<!--', end: '-->'},
  xml:        { start: '<!--', end: '-->'},
  php:        { start: '#', end: ''},
  ruby:       { start: '#', end: ''},
  csharp:     { start: '//', end: ''}}