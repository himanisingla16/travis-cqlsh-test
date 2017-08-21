#!/bin/bash

set -e
echo "Hello, World" | /opt/kafka_2.11-0.10.1.0/bin/kafka-console-producer.sh --broker-list localhost:9092 --topic dev_activities
