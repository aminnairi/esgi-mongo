# esgi-mongo

MongoDB course at the ESGI

## Requirements

- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Installation

```console
$ cd
$ git clone https://github.com/aminnairi/esgi-mongo.git ~/github/aminnairi/esgi-mongo
$ cd ~/github/aminnairi/esgi-mongo
```

## Start

Starts the Docker Compose services.

```console
$ make start
```

Exposed address | Description
---|---
[`127.0.0.1:27017`](http://127.0.0.1:27017) | Mongo database
[`127.0.0.1:8081`](http://127.0.0.1:8081) | Mongo administration panel

## Restore

Restore the dump of the folder `collections/dbkoda-data/SampleCollections`.

```console
$ make restore
```

## Mongo

Opens a Mongo shell.

```console
$ make mongo
```

## Stop

Stops the Docker Compose services.

```console
$ make stop
```

## Restart

Restarts the Docker Compose services.

```console
$ make restart
```

## Clean

Removes the `data` folder.

```console
$ make clean
```
