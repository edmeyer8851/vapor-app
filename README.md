# README

Inspired by Steam, Vapor is a mock digital games store featuring a
customized back end created with Ruby on Rails, a robust front end user
interface created with React, user profiles/authentication, and over 350 games. 

## Setup

To get set up, run:

```console
$ bundle install
$ npm install --prefix client
```

This will install the necessary gems and packages. To set up the database, run:

```console
$ rails db:migrate db:seed
```

Make sure the Postgre service is started by running:

```console
$ sudo service postgresql start
```

You can run the Rails server with:

```console
$ rails s
```

Finally, open another terminal and run React with:
```console
$ npm start --prefix client
```