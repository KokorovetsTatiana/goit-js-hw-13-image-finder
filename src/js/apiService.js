export default async (name, page) => {
    try {
        const picturesList = await fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${name}&page=${page}&per_page=12&key=21742684-2124d89228f195892f61b714b`);
        return picturesList.json();
    } catch (error) {
        return error;
    }
}