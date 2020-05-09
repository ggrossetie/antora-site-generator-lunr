/* eslint-env mocha */
const fs = require('fs')
const rimrafSync = require('rimraf')
const chai = require('chai')
const expect = chai.expect
const dirtyChai = require('dirty-chai')
chai.use(dirtyChai)

const generateSite = require('../lib/index.js')

describe('Generate site', () => {
  beforeEach(() => {
    rimrafSync(`${__dirname}/public`, function (error) {
    })
  })
  it('should generate a site with a search index', async () => {
    await generateSite([`--playbook=${__dirname}/site.yml`], { 'DOCSEARCH_ENABLED': true, 'DOCSEARCH_ENGINE': 'lunr' })
    global.window = {}
    global.window.antoraLunr = {}
    global.window.antoraLunr.init = (index) => {
      expect(index.store['/antora-lunr/index.html'].title).to.equal('Antora x Lunr')
      expect(index.store['/antora-lunr/index.html'].url).to.equal('/antora-lunr/index.html')
    }
    require('./public/search-index.js')

    const cheerio = require('cheerio')
    const $ = cheerio.load(fs.readFileSync(`${__dirname}/public/antora-lunr/index.html`))
    expect($('#search-input').length).to.equal(1)
  })
})
