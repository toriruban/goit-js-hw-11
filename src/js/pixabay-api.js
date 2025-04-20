export const fetchPhotosByQuery = query => {
    const searchParams = new URLSearchParams({
        key: '49835598-9f74b1000f2ba2b610eab7f75',
        q: query,
        image_type: 'photo', 
        orientation: 'horizontal',
        safesearch: true,
      });

    return fetch(`https://pixabay.com/api/?${searchParams}`)
        .then(response => {
            if(!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
};