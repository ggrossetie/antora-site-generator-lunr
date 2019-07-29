# Antora Site Generator With Lunr

This site generator is a copy of the [default site generator](https://gitlab.com/antora/antora/blob/master/packages/site-generator-default/README.adoc) that in addition produces a Lunr index that can be used in your documentation UI.
Lunr provides a great search experience in your documentation site without the need for external, server-side, search services.

[Antora](https://antora.org) is a modular static site generator designed for creating documentation sites from AsciiDoc documents.
Its site generator pipeline aggregates documents from versioned content repositories and processes them using [Asciidoctor](https://asciidoctor.org).

## Usage

Install the site generator.
Open a terminal and type:

    $ npm i antora-site-generator-lunr

**NOTE:** If Antora is installed globally, you should also add this module globally using the `-g` flag:

    $ npm i -g antora-site-generator-lunr

When generating your documentation site, use the `--generator` option:

    $ DOCSEARCH_ENABLED=true DOCSEARCH_ENGINE=lunr antora site.yml --generator antora-site-generator-lunr

Please read the [documentation](https://github.com/Mogztter/antora-lunr#enable-the-search-component-in-the-ui) to enable the search component in your documentation UI.
