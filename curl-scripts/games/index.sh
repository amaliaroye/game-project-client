#!/bin/bash
# Index: GET /games
# Retrieves all games associated with a user and creates an array of 'games'
curl "https://tic-tac-toe-api-development.herokuapp.com/games" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \

echo
