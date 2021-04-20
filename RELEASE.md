# Release

How to perform a release.

1. Update the version in the Dockerfile: `RUN yarn global add yarn global add antora-site-generator-lunr@<x.y.z>`
2. Run `npm version x.y.z` at the root of the repository
3. Run `npm publish` to publish the version on https://www.npmjs.com
4. **Wait until the version is successfully published and available for download**
5. Push your changes with the tag: `git push origin master --tags`

The release process is automated and relies on GitHub Actions.
It will automatically publish the Docker image to hub.docker.com.
