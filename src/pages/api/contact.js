import { connectToDatabase } from "@/lib/mondoDB";
import contactModel from "@/models/contact.model";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { firstName, lastName, email, message } = req.body;

            if (!firstName || !lastName || !email || !message) {
                return res.status(400).json({ error: 'All fields are required.' });
            }

            const { db } = await connectToDatabase();
            const todayStart = new Date();
            todayStart.setHours(0, 0, 0, 0);
            const todayEnd = new Date();
            todayEnd.setHours(23, 59, 59, 999);

            // Count messages from the same person today
            const messageCount = await contactModel.countDocuments({
                firstName,
                lastName,
                createdAt: { $gte: todayStart, $lte: todayEnd }
            });

            if (messageCount >= 3) {
                return res.status(429).json({ error: 'You have reached the maximum number of submissions for today.' });
            }

            const newContact = await contactModel.create({
                firstName,
                lastName,
                email,
                message,
                createdAt: new Date()
            });

            res.status(201).json(newContact);
        } catch (error) {
            console.error('Error handling contact form:', error);
            res.status(500).json({ error: 'Failed to submit the form.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}