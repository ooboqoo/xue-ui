const marked = require('marked')
const hljs = require('highlight.js')
const rege = /<pre><code( class="([\w- ]+?)")?>([\s\S]*?)<\/code><\/pre>/g

module.exports = function (markdown) {
  this.cacheable()
  return marked(markdown).replace(rege, function (match, p1, lang, code) {
    if (lang) { lang = lang.replace('language', 'lang') }
    const language = lang && lang.split('-')[1]
    if (language === 'txt' || language === 'text') {
      return `<pre><code class="${lang} hljs">${code}}</code></pre>`
    }
    code = code
      .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    const res = language ? hljs.highlight(language, code) : hljs.highlightAuto(code)
    return `<pre><code class="${lang || res.language} hljs">${res.value}</code></pre>`
  })
}
