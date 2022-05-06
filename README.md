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

### Deploy from the release chart

Before deploying the chart make sure that you installed [Helm](https://helm.sh/docs/intro/install/)
In order to deploy the chart first we need to add our helm repo hosted on the Github Pages:

```sh
helm add repo <repo_name> https://<owner>.github.io/<repository_name>
```

* <repo_name> can be any valid repo name string.

For this repository it will looks like:

```sh
helm add repo dbuzhorkaa-kaa-custom-microservice https://dbuzhorkaa.github.io/kaa-custom-microservice
```

First we need the values file that will be used to configure our service. You can use the example file in this repo:

```sh
cp deploy-values.yml.example deploy-values.yml
```

You need to replace some options in this file:

* `global.license.existingSecret` with the name of the `Kaa license` secret object. You can find it using next command:

```sh
kubectl get secrets -n <services-namespace> | grep kaa-license
```

* `global.nats.url` with the internal Nats url. You can use the service name as the domain. To find the service use next command:

```sh
kubectl get svc | grep nats-client
```

After updating the `deploy-values.yml` file we can update our repo and deploy:

```sh
# To get the latest version of our chart
helm repo update

# Install the chart to our cluster
helm upgrade --install -n <services-namespace> <repo> <repo>/<package> -f ./deploy-values.yml

# Lets assume that our services located in the namespace called kaa-iot and given repo we will have the next command
helm upgrade --install -n kaa-iot dbuzhorkaa-custom-microservice-demo dbuzhorkaa-custom-microservice/kaa-custom-microservice -f ./deploy-values.yml
```

By default the `:latest` docker image tag is deployed.

In case if you want to deploy the different docker image, for example the one published from the pull request you can specify the image tag in `deploy-values.yml` with `image.tag` attribute like this:

```yml
global:
  license:
    existingSecret: kaa-license-secret-name
  nats:
    url: "nats://nats-svc-client:4222"
image:
  tag: "my-pull-request"
```

Use the same command to deploy the service using helm.


**Note:** Building the helm package is recommended way but if you have a good expertise with the Kubernetes you can do it manually
 by creating the required Kubernetes objects to run your service.

## Repo automation

Automation in the repository is handled by the Github Actions.

The helm chart publishes after push to the `main` branch when the `Chart.version` gets changed.

The docker image is built on every pull request and the push to the `main` branch.

For more details check the `.github/workflows` folder.

## Helm chart

In this example we included our helm template package `service-chart` that simplifies definitions for the Kubernetes services, deployments, config maps and other objects to be compatible with the KaaIoT platform deployment. 

**Note:** The usage of this package is not required but it helps to simplify the deployment process.