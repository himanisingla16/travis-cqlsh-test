#!/bin/bash

set -e
docker exec -it traviscqlshtest_redis_1 redis-cli lpush a 3
