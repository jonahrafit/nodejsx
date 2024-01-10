import { addProfileImage } from '../../../lib/models/auth';
import path from 'path';

const fs = require('fs');

// api: http://localhost:3000/api/auth/login
export default async function handler(req, res) {
    try {
        const name = 'images_' + Date.now() + '.png';
        const uploadDir = path.join(process.cwd(), 'public', 'uploads', name);
        fs.writeFileSync(uploadDir, req.body, {
            encoding: 'base64',
            flag: 'w',
        });
        const response = await addProfileImage(req.query.userId, name);
        if (response)
            res.status(200).json({
                path: name,
            });
        else
            res.status(400).json({
                message: 'BAD_REQUEST',
            });
    } catch (error) {
        res.status(500).json({
            path: error,
        });
    }
}
