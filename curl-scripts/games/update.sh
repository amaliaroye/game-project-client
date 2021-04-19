#!/bin/bash
# Update: PATCH /games/:id
# Updates a specific 'game' by id with 'cell': {'index', 'value'} and 'over'

curl "https://tic-tac-toe-api-development.herokuapp.com/games/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "game": {
      "cell": {
        "index": "'"${INDEX}"'",
        "value": "'"${VALUE}"'"
      }
      "over": "'"${OVER}"'"
    }
  }'

echo
