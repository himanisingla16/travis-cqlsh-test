#!/bin/bash

set -e
bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic dev_activities --max-messages 1 --from-beginning
