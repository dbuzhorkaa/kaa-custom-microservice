import { connect } from "nats";
import { dataSamplesEventType } from "./schema";

const natsUrl = process.env.NATS_HOST_PORT || "localhost:4222";

const main = async () => {
  const nc = await connect({ servers: natsUrl, reconnect: true });
  nc.subscribe(
    "kaa.v1.events.dcx.endpoint.data-collection.data-samples-received ",
    {
      callback: (err, msg) => {
        if (err) {
          console.error("Error during receiving the message", err);
          return;
        }
        const message = dataSamplesEventType.fromBuffer(
          Buffer.from(msg.data)
        );
        message.dataSamples.forEach((sample: any) => {
          console.log(JSON.parse(Buffer.from(sample).toString()));
        });
      },
    }
  );
};

main().catch((err) => {
  console.error("Failed to connect", err);
});
