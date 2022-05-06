# Kaa Custom Microservice (kaa-custom-microservice)

This is an example of microservice that can be deployed to hosted environment of the KaaIoT platform.

KaaIoT service deployments goes to the Kubernetes cluster. To simplify things we include helm chart and github actions
that helps to build the docker image and helm package that will be used to deploy the service to the KaaIoT platform instance.

## Deployment steps

* Build docker image with your service
* Build helm package
* Deploy the helm package to your cluster


Building the helm package is recommended way but if you have a good expertise with the Kubernetes you can do it manually by creating the required 
Kubernetes objects to run your service

## Build the helm chart

Add kaa repo:

```sh
helm3 repo add kaa https://museum.kaaiot.net
```

