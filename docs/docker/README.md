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

**Generate a site using a specific playbook**

    $ docker run -u $(id -u) -v $PWD:/antora:Z --rm -t ggrossetie/antora-lunr:latest site.yml

In the above example, we generate a site using a playbook file named `site.yml`.
You can also specify a playbook file using a relative path (i.e., `path/to/site.yml`).

**Note:** If you do not specify a playbook file, the container will try to build a site using a playbook file named `antora-playbook.yml`.

    $ docker run -u $(id -u) -v $PWD:/antora:Z --rm -t ggrossetie/antora-lunr:latest

The above command will build a site with Antora using a playbook file named `antora-playbook.yml`.

**Generate a site using additional CLI options**

You can add any option supported by the Antora CLI.
In the following example we are using `--attribute` and `--stacktrace`.

    $ docker run -u $(id -u) -v $PWD:/antora:Z --rm -t ggrossetie/antora-lunr:latest --attribute foo=bar --stacktrace site.yml

**Override antora command**

By default, the container is using the following command:

    $ antora --generator antora-site-generator-lunr

If for some reason you want to overidde this command you can use the `--entrypoint` option:

    $ docker run -u $(id -u) -v $PWD:/antora:Z --rm --entrypoint="" -t ggrossetie/antora-lunr:latest antora --version

In the above example, we reset the container entrypoint using `--entrypoint=""` and then we can provide our own command.
In this case, we are using the command `antora --version`.

## Environment Variables

The image sets `DOCSEARCH_ENABLED=true` and `DOCSEARCH_ENGINE=lunr` environment variables.
When executing `docker run`, you can [overwrite any variable](https://docs.docker.com/engine/reference/commandline/run/#set-environment-variables--e---env---env-file) defined in the image using the `-e`, `--env`, or `--env-file` flags.

## Versioning / Tags

- `latest`: latest version of the Antora Lunr site generator running the latest version of Antora
- `<antora-version>`: latest version of the Antora Lunr site generator using the specified version of Antora
- `<antora-version>-lunr<project-version>`: Specific version of the Antora Lunre site generator using the specified version of Antora

## License

MIT License. See [License](https://github.com/Mogztter/antora-site-generator-lunr/blob/master/LICENSE) for more details.
