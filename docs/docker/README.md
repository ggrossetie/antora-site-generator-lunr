# Antora Site Generator With Lunr

This site generator is a copy of the [default site generator](https://gitlab.com/antora/antora/blob/master/packages/site-generator-default/README.adoc) that in addition produces a Lunr index that can be used in your documentation UI.
Lunr provides a great search experience in your documentation site without the need for external, server-side, search services.

[Antora](https://antora.org) is a modular static site generator designed for creating documentation sites from AsciiDoc documents.
Its site generator pipeline aggregates documents from versioned content repositories and processes them using [Asciidoctor](https://asciidoctor.org).

## Getting Started

### Prerequisites

In order to run this container you'll need docker installed.

- [Windows](https://docs.docker.com/windows/started)
- [OS X](https://docs.docker.com/mac/started/)
- [Linux](https://docs.docker.com/linux/started/)

## Usage

**Generate a site from a playbook file**

    $ docker run -u $(id -u) -v $PWD:/antora:Z --rm -t ggrossetie/antora-lunr:latest antora-playbook.yml

## Environment Variables

The image sets `DOCSEARCH_ENABLED=true` and `DOCSEARCH_ENGINE=lunr` environment variables.
When executing `docker run`, you can [overwrite any variable](https://docs.docker.com/engine/reference/commandline/run/#set-environment-variables--e---env---env-file) defined in the image using the `-e`, `--env`, or `--env-file` flags.

## Versioning / Tags

- `latest`: latest version of the Antora Lunr site generator running the latest version of Antora
- `<antora-version>`: latest version of the Antora Lunr site generator using the specified version of Antora
- `<antora-version>-lunr<project-version>`: Specific version of the Antora Lunre site generator using the specified version of Antora

## License

MIT License. See [License](https://github.com/Mogztter/antora-site-generator-lunr/blob/master/LICENSE) for more details.
