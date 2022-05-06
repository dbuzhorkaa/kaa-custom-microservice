# Kaa Custom Microservice (kaa-custom-microservice)

This is an example of microservice that can be deployed to hosted environment of the KaaIoT platform.

## Microservice

The microservice shows how to communicate with [Nats](https://nats.io/) that is used as the main communication bus between the microservices. In this example we watch for telemetry data
received according to the [13/DSTP](https://github.com/kaaproject/kaa-rfcs/blob/master/0013/README.md#introduction) protocol and parse the message payload
according to the [EndpointDataSamplesEvent](https://github.com/kaaproject/kaa-rfcs/blob/master/0013/README.md#endpoint-data-sample-transmission-to-receivers) schema.

## Deployment overview

KaaIoT service deployments goes to the Kubernetes cluster. To simplify things we include helm chart and github actions
that helps to build the docker image and helm package that will be used to deploy the service to the KaaIoT platform instance.

The Docker image is deployed to the Github Container Registry and the helm package is hosted in the Github Pages of the repository.

* Build docker image with your service
* Build helm package
* Deploy your service using helm

Building the helm package is recommended way but if you have a good expertise with the Kubernetes you can do it manually by creating the required 
Kubernetes objects to run your service.

## Helm chart

In this example we included our helm template package `service-chart` that simplifies definitions for the Kubernetes services, deployments, config maps and other objects to be compatible with the KaaIoT platform deployment. 

**Note:** The usage of this package is not required but it helps to simplify the deployment process.