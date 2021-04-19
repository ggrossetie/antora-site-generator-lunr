# Antora Site Generator With Lunr

[![npm](https://img.shields.io/npm/v/antora-site-generator-lunr)](https://www.npmjs.com/package/antora-site-generator-lunr)
[![Build](https://github.com/Mogztter/antora-site-generator-lunr/workflows/Build/badge.svg)](https://github.com/Mogztter/antora-site-generator-lunr/actions?query=workflow%3ABuild)

This site generator is a copy of the [default site generator](https://gitlab.com/antora/antora/blob/master/packages/site-generator-default/README.adoc) that in addition produces a Lunr index that can be used in your documentation UI.
Lunr provides a great search experience in your documentation site without the need for external, server-side, search services.

[Antora](https://antora.org) is a modular static site generator designed for creating documentation sites from AsciiDoc documents.
Its site generator pipeline aggregates documents from versioned content repositories and processes them using [Asciidoctor](https://asciidoctor.org).

## Usage

Install the site generator.
Open a terminal and type:

    $ npm i -g antora-site-generator-lunr

When generating your documentation site, use the `--generator` option:

    $ DOCSEARCH_ENABLED=true DOCSEARCH_ENGINE=lunr NODE_PATH="$(npm -g root)" antora --generator antora-site-generator-lunr site.yml

**NOTE:** The `NODE_PATH` assignment is necessary to ensure Antora can locate node modules install globally.
Depending on your environment, you may find that this assignment is unnecessary.
If you've installed Antora globally using Yarn, you may need to add `"$(yarn global dir)/node_modules"` to the `NODE_PATH` environment variable instead.

Please read the [documentation](https://github.com/Mogztter/antora-lunr#enable-the-search-component-in-the-ui) to enable the search component in your documentation UI.

### Using the Docker image

[The Docker image](https://hub.docker.com/r/ggrossetie/antora-lunr) is built upon [the Antora's official Docker image](https://docs.antora.org/antora/2.3/antora-container/#run-the-antora-image) and should be used as a replacement.
For example, instead of running:

    $ docker run -u $(id -u) -v $PWD:/antora:Z --rm -t antora/antora:2.3.4 antora-playbook.yml

You will run:

    $ docker run -u $(id -u) -v $PWD:/antora:Z --rm -t ggrossetie/antora-lunr antora-playbook.yml

The image sets `DOCSEARCH_ENABLED=true` and `DOCSEARCH_ENGINE=lunr` environment variables.
When executing `docker run`, you can [overwrite any variable](https://docs.docker.com/engine/reference/commandline/run/#set-environment-variables--e---env---env-file) defined in the image.
For example:

    $ docker run --env DOCSEARCH_ENABLED=false # ...

Moreover, the site generator is automatically configured on the `antora` command (i.e. `--generator antora-site-generator-lunr`).

## Upgrading

When installing this generator globally (i.e., `npm i -g`), it also installs a private copy of Antora (minus the CLI).
Thus, to upgrade the copy of Antora this site generator uses, you need to reinstall this package.
Upgrading Antora alone isn't sufficient.

To upgrade this site generator and Antora, open a terminal and type the following commands:

    $ npm uninstall -g antora-site-generator-lunr @antora/cli @antora/site-generator-default

    $ npm i -g antora-site-generator-lunr @antora/cli @antora/site-generator-default

These commands ensure you have the latest version of both the site generator and Antora regardless of whether you're using this site generator.
