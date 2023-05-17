import { drizzle } from 'drizzle-orm/planetscale-serverless';
import { connect } from '@planetscale/database';
import { notes } from '../db/schema';

const config = {
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
};

const connectToDatabase = async () => {
    const connection = connect(config);

    const db = drizzle(connection);
    return db;
};

const handler = (async () => {
    try {
        const db = await connectToDatabase();
        const allNotes = await db.select().from(notes);
        console.log(allNotes);
    } catch (error) {

        console.error(error);
    }
})();
