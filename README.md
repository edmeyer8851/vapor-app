# README

Inspired by Steam, Vapor is a mock digital games store featuring a
customized back end created with Ruby on Rails and PostgreSQL, a robust front end user
interface created with React, user profiles/authentication, and an API fed database with over 350 games. 

## Setup

To get set up, run:

```console
$ bundle install
$ npm install --prefix client
```

This will install the necessary gems and packages. To set up the database, run:

```console
$ sudo service postgresql start
$ rails db:migrate db:seed
```

You can run the Rails server with:

```console
$ rails s
```

Finally, open another terminal and run React with:
```console
$ npm start --prefix client
```