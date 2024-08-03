#!/bin/bash
sudo php -S 127.0.0.1:5500 -t "../" &
sass --watch ../scss/main.scss:../css/main.css
