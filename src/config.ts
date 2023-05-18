import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    jwtSecret: process.env.JWT_SECRET,
    mysql: {
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT, 10),
      user: process.env.MYSQL_USER,
      password: '',
      name: process.env.MYSQL_DB,
    },
  };
});
