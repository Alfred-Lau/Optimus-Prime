#! /bin/bash

mv dist projectdashboard
scp -r ./projectdashboard root@aliyun:/usr/local/nginx/html
