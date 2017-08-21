#!/bin/bash

set -e
cqlsh -e "insert into testdb.circleA (circleId) values (59de3176-8629-11e7-bb31-be2e44b06b34)"
