<!--
This is a template file for the README.md.
Use `helm-docs` to generate (https://github.com/norwoodj/helm-docs).

The autogeneration is performed by the pre-commit hook. To install the hook:
```
$ pip install pre-commit # Only do this once on your machine
```

Then from the repo directory:
```
$ pre-commit install
$ pre-commit install-hooks
```
-->


## Chart Requirements

| Repository | Name | Version |
|------------|------|---------|
| @kaa | service-chart | 0.0.31 |


## Chart Values

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| affinity | object | `{}` |  |
| annotations.deployment | object | `{}` |  |
| annotations.pod | object | `{}` |  |
| config | string | `""` | Content for the service config map, automatically mounted as a config file into the pod. |
| env | object | `{}` | Defines [the environment variables](#environment-variables) that Kubernetes passes to the service replica |
| extraPodSpecs.automountServiceAccountToken | bool | `false` |  |
| fullnameOverride | string | `""` |  |
| global.image.pullSecrets | list | `[]` | Specifies the image pull secret to define this secret, use your KaaID credentials |
| global.license.secretName | string | `""` |  Set a license file and password. Secret needs to have two fields: file and password |
| global.monitoring.enabled | bool | `false` | Monitoring status |
| global.nats.url | string | `""` | NATS url |
| image.pullPolicy | string | `"IfNotPresent"` | Docker image pull policy. |
| image.pullSecrets | list | `[]` | List of image pull secret names. Each must be defined as a record with the `name` field. |
| image.repository | string | `"dev-hub.kaaiot.net/core/service/{{ .Chart.Name }}/{{ .Chart.Name }}"` | Docker image repository image URL. |
| image.tag | string | `""` | Docker image tag version to pull and run. |
| metadata.component | string | `"backend"` |  |
| metadata.partOf | string | `"kaa"` |  |
| nameOverride | string | `""` |  |
| nodeSelector | object | `{}` |  |
| replicaCount | int | `1` | The number of service instance replicas to run. |
| resources | object | `{}` |  |
| rules | list | `[]` |  |
| runbookUrl | string | `""` |  |
| securityContext | object | `{}` |  |
| service.type | string | `"ClusterIP"` |  |
| terminationMessagePolicy | string | `"FallbackToLogsOnError"` | Kubernetes termination message policy. |
| tolerations | list | `[]` |  |
| updateStrategy.type | string | `"RollingUpdate"` | Deployment update srategy |
| waitContainers.enabled | bool | `true` | Wait for dependency services. |
| waitContainers.timeout | int | `300` | Wait timeout for dependency services in seconds. |

The keys with no description are standard Kubernetes values.
Refer to the [official Kubernetes documentation](https://kubernetes.io/docs/concepts/) for more information on these.
