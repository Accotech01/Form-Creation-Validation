


    async function fetchUserData(){
        const apiUrl = 'https://jsonplaceholder.typicode.com/users'

        const dataContainer = document.getElementById('api-data')

         try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const users = await response.json();

    // Clear the loading message
    dataContainer.innerHTML = '';

    // Create and append user list
    const userList = document.createElement('ul');
    users.forEach((user) => {
      const userListItem = document.createElement('li');
      userListItem.textContent = user.name;
      userList.appendChild(userListItem);
    });
    dataContainer.appendChild(userList);
  } catch (error) {
    // Error handling
    dataContainer.innerHTML = '';
    dataContainer.textContent = 'Failed to load user data.';
    console.error('Error fetching user data:', error);
  }
}

document.addEventListener('DOMContentLoaded', fetchUserData)