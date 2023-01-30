FROM --platform=linux/x86_64 node:16.14.2-slim

RUN apt-get update && \
    apt-get install -y locales git procps vim tmux curl
RUN locale-gen ja_JP.UTF-8
RUN localedef -f UTF-8 -i ja_JP ja_JP
RUN yarn global add htpasswd@2.4.4
ENV LANG=ja_JP.UTF-8
ENV TZ=Asia/Tokyo
WORKDIR /app