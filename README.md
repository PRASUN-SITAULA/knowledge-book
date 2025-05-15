<h1 align="center">Devops Knowledge Book</h1>

## Introduction

This documents my journey of creating a jenkins pipleine for a react project and deploying it to s3 bucket.

## Configurationn

- Jenkins
  - Installed on a local machine using docker

- React Project
  - Created using vite


## Issues Faced

- Using **jenkins:alpine** image for the pipeline caused the node executable to not be found.  The issue was resolved by using the **jenkins/jenkins** image instead.
