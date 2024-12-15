const paginateUsers = (page, itemsPerPage = 5) => {
    // Validate page number to ensure it's a positive integer
    if (isNaN(page) || page < 1) {
      console.error("Invalid page number. Page must be a positive integer.");
      return;
    }
  
    // Fetch data from Firebase
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        const users = Object.entries(data);  // Convert data to an array of entries
        const totalUsers = users.length;
        
        // Calculate total pages
        const totalPages = Math.ceil(totalUsers / itemsPerPage);
  
        // Check if the requested page number is valid
        if (page > totalPages) {
          console.error(`Page ${page} exceeds total pages (${totalPages}).`);
          return;
        }
  
        // Calculate the starting and ending indices for the current page
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        
        // Slice the users array to get the paginated data
        const paginatedUsers = users.slice(start, end);
        
        // Log the paginated users to the console
        console.log(`Users on page ${page}:`, paginatedUsers);
        
        // Optional: Display the total pages information
        console.log(`Total Pages: ${totalPages}`);
      })
      .catch(error => console.error("Error fetching data:", error));
  };
  