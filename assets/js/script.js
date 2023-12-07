/*3iZai5LVmwMvK1ydYBA2eeQyvxbNI0Hhi7QXyzL8f0k8hIzm5TeWp29E API KEY*/

document.addEventListener('DOMContentLoaded', function () {

    let currentQuery = '';
  
    function loadImages(query) {
      const url = `https://api.pexels.com/v1/search?query=${query}`;
      fetch(url, {
        headers: {
          'Authorization': '3iZai5LVmwMvK1ydYBA2eeQyvxbNI0Hhi7QXyzL8f0k8hIzm5TeWp29E'
        }
      })
        .then(response => response.json())
        .then(data => displayImages(data.photos))
        .catch(error => console.log('Error fetching images', error));
    }
  
    function displayImages(photos) {
      const album = document.querySelector('.album .row');
      album.innerHTML = '';
      photos.forEach(photo => {
        const card = `
          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <img src="${photo.src.medium}" class="bd-placeholder-img card-img-top" alt="${photo.photographer}" />
              <div class="card-body">
                <h5 class="card-title">${photo.photographer}</h5>
                <p class="card-text">${photo.id}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <button type="button" class="btn btn-sm btn-outline-secondary hide-card">
                    Hide
                  </button>
                </div>
              </div>
            </div>
          </div>
        `;
        album.insertAdjacentHTML('beforeend', card);
      });
    }
  
    function hideCard(button) {
      button.closest('.col-md-4').remove();
    }
  
    function handleSearch(event) {
      event.preventDefault();
      const query = document.getElementById('search-input').value;
      loadImages(query);
    }
  
    function redirectToDetailPage(card) {
      const photographer = card.querySelector('.card-title').textContent;
      const imageId = card.querySelector('.card-text').textContent;
      console.log(`Redirecting to detail page for image ID: ${imageId}, Photographer: ${photographer}`);
      window.location.href = 'detail.html?id=' + 'imageId';
    }
  
    document.querySelector('.btn-primary').addEventListener('click', function () {
      currentQuery = '"https://api.pexels.com/v1/search?query=nature&per_page=12"'; 
      loadImages(currentQuery);
    });
  
    document.querySelector('.btn-secondary').addEventListener('click', function () {
      currentQuery = '"https://api.pexels.com/v1/search?query=ocean&per_page=12"';
      loadImages(currentQuery);
    });
  
    document.querySelector('.album').addEventListener('click', function (event) {
      const target = event.target;
      if (target.classList.contains('hide-card')) {
        hideCard(target);
      } else if (target.closest('.card')) {
        redirectToDetailPage(target.closest('.card'));
      }
    });
  
   
  });
  





