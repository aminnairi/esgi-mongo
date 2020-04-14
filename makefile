.PHONY: start stop restart mongo restore clean react install server

start:
	docker-compose up --detach mongo mongo-express node server

stop:
	docker-compose down --volumes --remove-orphans

restart: stop start

mongo:
	docker-compose exec mongo mongo -u root -p password

restore:
	docker-compose exec mongo mongorestore -u root -p password

clean:
	docker-compose exec mongo rm -rf data

react:
	docker-compose exec node npm start

install:
	docker-compose exec node npm install

server:
	docker-compose exec server npm start
