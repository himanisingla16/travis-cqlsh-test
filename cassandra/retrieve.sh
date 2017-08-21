#!/bin/bash

set -e
cqlsh -e "select * from testdb.circleA"
