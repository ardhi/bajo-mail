By default, no transport is configured yet! You have to add your own transport in your app config directory first.

| Key | Type | Description |
| --- | ---- | ----------- |
| ```transports``` | Array | List all your transports here. Format see below |
| ```sender``` | String | Will be used as the sender if none is provided |

#### Format

Transport format follows [nodemailer's transport](https://nodemailer.com/smtp/) format specifications with exceptions:

- You have to add key ```name``` as the transport name. If you omit ```name```, it will be named **default** internally and will be used as the default transport
- You have to add key ```type``` as the transport type. It defaults to **SMTP**.

#### Example

```json
{
  "transports": [{
    "name": "default",
    "type": "SMTP",
    "host": "smtp.yourdomain.com",
    "port": 587,
    "auth": {
      "user": "user@yourdomain.com",
      "pass": "SuperDuperSecret"
    }
  }]
}
```
