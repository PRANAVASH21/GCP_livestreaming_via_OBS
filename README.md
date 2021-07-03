# GCP_livestreaming_via_OBS
Using GCP instance, we connect OBS and access the stream from VLC

# Open GCP and create an instance of your choice (here we used Ubuntu 20.04 LTS)

# open ssh window

# type the following to install docker 

sudo -i

apt-get update

apt-get install \
apt-transport-https \
ca-certificates \
curl \
gnupg-agent \
software-properties-common

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

add-apt-repository \
"deb [arch=amd64] https://download.docker.com/linux/ubuntu \
$(lsb_release -cs) \
stable"

apt-get update
apt-get install docker-ce docker-ce-cli containerd.io

# Now make a directory "livestream"

mkdir livestream

# create 2 more directories under it

cd livestream

mkdir auth

mkdir rtmp

# Now create a docker-compose.yml file 

nano docker-compose.yml

# now copy the docker-compose.yml from the repo and pase it under it

# now go to rtmp

cd rtmp

# make nginx.conf file, and copy the same from repo

nano nginx.conf


# now come to auth folder and make Dockerfile and copy the same from repo

nano Dockerfile

# now 

apt install npm

npm init

npm --save express nodemon

# now open package.json and under "scripts" type

"start": "nodemon server.js",

# as in package.json in the repo

# now create server.js and copy the same from the repo

nano server.js

# Now come to the livestream directory and run the following-

apt install docker-compose -y

docker-compose build
docker-compose up

# if no error, then march to the OBS software and Under Console>settings>Stream

# choose service as "custom"
# and type the url as rtmp://<instance_ip>/live
# and under stream key, write  test?key=<your_password>

# hit ok, and click on start streaming


# Now open VLC
# under Modules>open Network

# and type the same rtmp://<instance_ip>/live/test

# and BOOM, you're streaming live.......


