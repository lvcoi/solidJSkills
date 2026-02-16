# Extension Release Guide

How to publish a new release of solidJSkills as a Gemini-CLI extension via GitHub Releases.

## Prerequisites

- Push access to this repository
- The `gemini-extension.json` file is at the repository root (already set up)
- The `.github/workflows/release.yml` workflow is in place (already set up)

## How releases work

When you push a tag that starts with `v` (for example `v1.2.0`), the release workflow automatically:

1. Checks out the tagged commit
2. Installs MCP server dependencies
3. Validates skill contracts and output schemas
4. Creates a `.tar.gz` archive of the entire extension
5. Publishes a GitHub Release with the archive attached

Since solidJSkills is platform-independent (no compiled binaries), a single generic archive is created. Gemini CLI uses this archive for faster initial installs — users don't need to clone the full git history.

## Creating a release

### 1. Update the version

Edit `gemini-extension.json` and set the `version` field:

```json
{
  "version": "1.2.0"
}
```

Commit the version bump:

```bash
git add gemini-extension.json
git commit -m "bump version to 1.2.0"
git push
```

### 2. Tag the release

```bash
git tag v1.2.0
git push origin v1.2.0
```

This triggers the release workflow. Check the **Actions** tab to monitor progress.

### 3. Mark as latest (optional)

The workflow creates the release automatically. If you want a specific release to be the one users get by default, make sure it is marked as **Latest** on the GitHub Releases page. By default, GitHub marks the most recent non-prerelease as latest.

## Installing from a release

Users install the extension with:

```bash
gemini extensions install <repo-uri>
```

Gemini CLI checks for the latest GitHub Release and downloads the archive instead of cloning the repository.

To install a specific version:

```bash
gemini extensions install <repo-uri> --ref=v1.2.0
```

## Pre-releases

To publish a pre-release for testing before promoting to all users:

1. Tag with a pre-release identifier (e.g., `v1.2.0-beta.1`)
2. On the GitHub Releases page, check **Set as a pre-release** (the workflow uses `generate_release_notes` but does not force latest)
3. Testers install with `--pre-release`:

```bash
gemini extensions install <repo-uri> --pre-release
```

## Alternative: Git repository releases

You can also distribute the extension directly from the git repository without GitHub Releases. Users install with:

```bash
gemini extensions install <repo-uri>
```

They can pin to a branch or tag with `--ref`:

```bash
gemini extensions install <repo-uri> --ref=main
```

See the [GitHub Releases documentation](https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases) for more details on GitHub Releases.
