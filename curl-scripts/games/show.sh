#!/bin/bash
# Show: GET /games/:id
# Retrieves a specific game by id, response body contains JSON for 'game'

curl "https://tic-tac-toe-api-development.herokuapp.com/games/${ID}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \

echo
