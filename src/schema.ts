import { Schema, Type } from "avsc";

const dataSamplesEventSchema: Schema = {
  namespace: "org.kaaproject.ipc.dstp.gen.v1",
  name: "DataSamplesEvent",
  type: "record",
  doc: "Broadcast event with endpoint data samples to data receivers",
  fields: [
    {
      name: "correlationId",
      type: "string",
      doc: "Message ID primarily used to track message processing across services",
    },
    {
      name: "timestamp",
      type: "long",
      doc: "Message creation UNIX timestamp in milliseconds",
    },
    {
      name: "timeout",
      type: "long",
      default: 0,
      doc: "Amount of milliseconds since the timestamp until the message expires. Value of 0 is reserved to indicate no expiration.",
    },
    {
      name: "appVersionName",
      type: "string",
      doc: "Application version name the data samples are sent for",
    },
    {
      name: "endpointId",
      type: "string",
      doc: "Identifier of the endpoint that originated the data samples",
    },
    {
      name: "contentType",
      type: "string",
      default: "application/json",
      doc: "Type of the data sample payload, e.g.: application/json, application/x-protobuf, etc.",
    },
    {
      name: "dataSamples",
      type: {
        type: "array",
        items: "bytes",
      },
      doc: "Array of endpoint data samples encoded according to the content type",
    },
  ],
};

export const dataSamplesEventType = Type.forSchema(dataSamplesEventSchema);
