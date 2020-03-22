.PHONY := build
.DEFAULT_GOAL := build

build:
	hugo

build-drafts:
	hugo --buildDrafts=true

clean:
	rm -rf public

server-dev:
	hugo server -D

server:
	hugo server
