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
$ git submodule update --init
```

## Commands

Commands | Description
---|---
`make start` | Start the `node`, `mongo`, `mongo-express` services
`make install` | Install the Node.js dependencies
`make mongo` | Open a MongoDB shell
`make restore` | Restore the collections
`make react` | Run the React app
`make clean` | Clean untracked files
`make stop` | Stop all the running services
`make restart` | Alias for `make stop start`

## IP Addresses

Exposed address | Description
---|---
[`127.0.0.1:27017`](http://127.0.0.1:27017) | Mongo database
[`127.0.0.1:8081`](http://127.0.0.1:8081) | Mongo administration panel
[`127.0.0.1:3000`](http://127.0.0.1:3000) | React app

