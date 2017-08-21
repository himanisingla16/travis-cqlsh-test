#!/bin/bash

set -e
cqlsh -e "create table testdb.circleA (circleId uuid, PRIMARY KEY(circleId))"
