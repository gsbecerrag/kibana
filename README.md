# Plugin development usage

Please follow the instructions to run the entire kibana development environment.

## Install nvm

Use nvm in order to manage different node versions, very useful for develop plugins for several kibana versions.

[nvm for windows](https://github.com/coreybutler/nvm-windows)

[nvm for linux/MacOS](https://github.com/nvm-sh/nvm)

## Install and use node

Check the node requeried version in the .node-version file inside this repo.

```sh
nvm install 10.22.1

nvm use 10.22.1
```

## Install the recommended build tools for your OS 

For linux

```sh
apt install build-essential
```

For windows install git bash and add the tools to the PATH

## Check the installation

Run

```sh
yarn start
```

Or for the open source version

```sh
yarn start --oss
```

If everything is ok you should see the Kibana home page.

## Create your first plugin

Run the kibana plugin creation wich returns a scaffold for the plugin development

```sh
node scripts/generate_plugin my_plugin_name
```

Answer the questions and be sure to verify the correct kibana version you are working on. After that you should find the /plugin/my_plugin_name folder wich contains the scaffold for your plugin.

## Run our plugin

To check if our plugin is working, go to the /plugin/my_plugin_name folder and run

```sh
yarn start
```

Or for the open source version

```sh
yarn start --oss
```

If everything is ok you should see the Kibana home page and your plugin in the left menu.

# Kibana

Kibana is your window into the [Elastic Stack](https://www.elastic.co/products). Specifically, it's a browser-based analytics and search dashboard for Elasticsearch.

- [Getting Started](#getting-started)
  - [Using a Kibana Release](#using-a-kibana-release)
  - [Building and Running Kibana, and/or Contributing Code](#building-and-running-kibana-andor-contributing-code)
- [Documentation](#documentation)
- [Version Compatibility with Elasticsearch](#version-compatibility-with-elasticsearch)
- [Questions? Problems? Suggestions?](#questions-problems-suggestions)

## Getting Started

If you just want to try Kibana out, check out the [Elastic Stack Getting Started Page](https://www.elastic.co/start) to give it a whirl.

If you're interested in diving a bit deeper and getting a taste of Kibana's capabilities, head over to the [Kibana Getting Started Page](https://www.elastic.co/guide/en/kibana/current/getting-started.html).

### Using a Kibana Release

If you want to use a Kibana release in production, give it a test run, or just play around:

- Download the latest version on the [Kibana Download Page](https://www.elastic.co/downloads/kibana).
- Learn more about Kibana's features and capabilities on the
[Kibana Product Page](https://www.elastic.co/products/kibana).
- We also offer a hosted version of Kibana on our
[Cloud Service](https://www.elastic.co/cloud/as-a-service).

### Building and Running Kibana, and/or Contributing Code

You might want to build Kibana locally to contribute some code, test out the latest features, or try
out an open PR:

- [CONTRIBUTING.md](CONTRIBUTING.md) will help you get Kibana up and running.
- If you would like to contribute code, please follow our [STYLEGUIDE.md](STYLEGUIDE.md).
- For all other questions, check out the [FAQ.md](FAQ.md) and
[wiki](https://github.com/elastic/kibana/wiki).

## Documentation

Visit [Elastic.co](http://www.elastic.co/guide/en/kibana/current/index.html) for the full Kibana documentation.

For information about building the documentation, see the README in [elastic/docs](https://github.com/elastic/docs).

## Version Compatibility with Elasticsearch

Ideally, you should be running Elasticsearch and Kibana with matching version numbers. If your Elasticsearch has an older version number or a newer _major_ number than Kibana, then Kibana will fail to run. If Elasticsearch has a newer minor or patch number than Kibana, then the Kibana Server will log a warning.

_Note: The version numbers below are only examples, meant to illustrate the relationships between different types of version numbers._

| Situation                 | Example Kibana version     | Example ES version | Outcome |
| ------------------------- | -------------------------- |------------------- | ------- |
| Versions are the same.    | 5.1.2                      | 5.1.2              | 💚 OK      |
| ES patch number is newer. | 5.1.__2__                  | 5.1.__5__          | ⚠️ Logged warning      |
| ES minor number is newer. | 5.__1__.2                  | 5.__5__.0          | ⚠️ Logged warning      |
| ES major number is newer. | __5__.1.2                  | __6__.0.0          | 🚫 Fatal error      |
| ES patch number is older. | 5.1.__2__                  | 5.1.__0__          | ⚠️ Logged warning      |
| ES minor number is older. | 5.__1__.2                  | 5.__0__.0          | 🚫 Fatal error      |
| ES major number is older. | __5__.1.2                  | __4__.0.0          | 🚫 Fatal error      |

## Questions? Problems? Suggestions?

- If you've found a bug or want to request a feature, please create a [GitHub Issue](https://github.com/elastic/kibana/issues/new/choose).
  Please check to make sure someone else hasn't already created an issue for the same topic.
- Need help using Kibana? Ask away on our [Kibana Discuss Forum](https://discuss.elastic.co/c/kibana) and a fellow community member or
Elastic engineer will be glad to help you out.
