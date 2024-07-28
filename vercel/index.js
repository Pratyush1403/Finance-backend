import app from '../index.js';

export default async (req, res) => {
  try {
    await app(req, res);
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).send('Internal Server Error');
  }
};
