# Kaa Custom Microservice (kaa-custom-microservice)

This is an example of microservice that can be deployed to hosted environment of the KaaIoT platform.

KaaIoT service deployments goes to kubernetes cluster. To simplify things we include helm chart and github actions
that helps to build the docker image and helm package that will be used to deploy the service to the KaaIoT platform instance.


# Build the helm chart

Add kaa repo:

```sh
helm3 repo add kaa https://museum.kaaiot.net
```

