#!/bin/bash

aws dynamodb create-table \
    --table-name Supplier \
    --attribute-definitions \
        AttributeName=CompanyName,AttributeType=S \
    --key-schema \
        AttributeName=CompanyName,KeyType=HASH \
    --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1 \
    --endpoint-url http://localhost:8000
