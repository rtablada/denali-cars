export default function environmentConfig(environment: string) {
  let config: any = {
    server: {
      port: process.env.PORT || 3000
    },
    ormAdapter: 'objection',
    database: {
      client: 'pg',
      connection: {
        host: 'localhost',
        user: 'ryan',
        database: 'razer-cars'
      }
    }
  };

  config.migrations = {
    db: config.database
  };

  if (environment === 'development') {
    // development-specific config
  }

  if (environment === 'production') {
    config.database.connection = config.migrations.db.connection = process.env.DATABASE_URL;

    // == SSL
    //
    // You can start Denali in SSL mode by providing your private key and
    // certificate, or your pfx file contents
    //
    // config.server.ssl = {
    //   key: fs.readFileSync('privatekey.pem'),
    //   cert: fs.readFileSync('certificate.pem')
    // };
    //
    // or,
    //
    // config.server.ssl = {
    //   pfx: fs.readFileSync('server.pfx')
    // };
    //
  }

  return config;
}
