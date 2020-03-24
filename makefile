.PHONY: start stop restart mongo restore clean

start:
	docker-compose up --detach mongo mongo-express

stop:
	docker-compose down --volumes --remove-orphans

restart: stop start

mongo:
	docker-compose exec mongo mongo -u root -p password

restore:
	docker-compose exec mongo mongorestore -u root -p password

clean:
	docker-compose exec mongo rm -rf data
