import axios from 'axios';
const publicFolderPath = 'public/uploads';

export const uploadFile = async (image) => {
    return axios.post('/api/uploads', {
        data: image.split(',')[1],
    });
};

export const deleteImage = async (imageName) => {
    const imagePath = `${publicFolderPath}/${imageName}`;

    try {
        // Vérifier si la fonction unlink est disponible dans le navigateur
        if ('unlink' in window) {
            // Utiliser unlink de la Browser FileSystem API
            await window.unlink(imagePath);
            console.log(`File ${imageName} has been deleted successfully.`);
            return true;
        } else {
            console.error('unlink is not available in this environment.');
            return false;
        }
    } catch (error) {
        console.error(`Error deleting file ${imageName}:`, error);
        return false;
    }
};
