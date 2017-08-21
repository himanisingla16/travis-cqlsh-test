#!/bin/bash

set -e
/opt/kafka_2.11-0.10.1.0/bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic dev_activities --max-messages 1 --from-beginning
