<h1 align="center">Devops Knowledge Book</h1>

## Introduction

This documents my journey of creating a jenkins pipeline for a react project and deploying it to s3 bucket.

## Table of Contents
- [Introduction](#introduction)
- [Jenkins Configuration](#jenkins-configuration)
- [Issues Faced](#issues-faced)
- [Screenshots](#screenshots)

## Installation

Setup Local Jenkins Server
```bash
docker compose -f docker-compose-jenkins.yml up -d
```
Visit localhost:8080/jenkins to access the jenkins server. The administrator password can be obtained through the logs or **/var/lib/jenkins/secrets/initialAdminPassword**

## Jenkins Configuration

- Install these plugins
    - Blue Ocean
    - NodeJS
      - setup nodejs as a global tool
    - Pipeline AWS Steps
    - GitHub Integration

### Git Credentials Setup

1. Create a new Jenkins credential for github

- Add a new credential kind as **Username with password**
- Enter the username and password(Github PAT) for the github account

2. Create a new Jenkins credential for aws

- Add a new credential kind as **AWS Credentials** (Make sure the name matches the name used in the docker-compose-jenkins.yml)
- Enter the aws access key and secret key

### Pipeline Configuration
- Create a new pipeline
- Select **Pipeline script from SCM** as the source in pipeline
- Select **Git** as the SCM
- Enter the repository url
- Select **Credentials** that was added to the Jenkins
- Select the branch
- Select credentials added to the Jenkins


> [!NOTE]
> **NOTE:** Since the server is running locally, the pipeline has to be built manually or through creating a Poll SCM. For production use cases, github webhooks can be used.

## Issues Faced

- Using **jenkins:alpine** image for the pipeline caused the node executable to not be found. The issue was resolved by using the **jenkins/jenkins** image instead.

## Screenshots
![Image](https://github.com/user-attachments/assets/5edca4dd-e533-4354-8a59-4b29f05697b3)
