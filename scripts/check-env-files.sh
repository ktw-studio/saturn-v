#!/usr/bin/env bash

example_env_key_number=$(grep ".*=" .env.example -o | wc -l | xargs);

local_env_key_number=$(grep ".*=" .env -o | wc -l | xargs);

if [ "$example_env_key_number)" != "$local_env_key_number)"  ]; then
  echo "$(tput setaf 1) You did not declare all environment variables. Please check .env.example and update .env file";
  exit 1;
fi
