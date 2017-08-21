#!/bin/bash

set -e
docker exec -it traviscqlshtest_redis_1 redis-cli lrange a 0 -1
