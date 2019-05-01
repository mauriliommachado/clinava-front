ECHO OFF
cls
ECHO Caso não rode de primeira, reinicie o docker e tente de novo.
ECHO ...
ECHO Rodando comando 'docker run -p 5432:5432 -e  POSTGRES_USER=maurilio.machado -e POSTGRES_PASSWORD= -e POSTGRES_DB=clinava postgres'...
docker run -p 5432:5432 -e  POSTGRES_USER=maurilio.machado -e POSTGRES_PASSWORD= -e POSTGRES_DB=clinava postgres
pause