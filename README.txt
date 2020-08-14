(1) first do:

npm install

(2) create an SQL database called experiment (or use an existing one)
create a file called ".env" with content like this:

PGUSER=postgres
PGHOST=localhost
PGPASSWORD=none
PGDATABASE=experiment
PGPORT=5432

(3) try seeding the database:

npm run seed

(4) if that works try running the webserver

npm run server:dev
