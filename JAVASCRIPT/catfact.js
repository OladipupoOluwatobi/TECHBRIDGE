const catFactButton = document.getElementById("get-cat-fact");
const catFactDiv = document.getElementById("cat-fact");

catFactButton.addEventListener('click', async () => {
    // Add loading styles
    catFactButton.classList.add('loading');
    catFactButton.innerHTML = '<span class="loader"></span> Loading...';

    try {
        // Fetch cat fact from the API
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        
        // Display the fact
        catFactDiv.innerText = data.fact; // API returns the fact directly under `data.fact`
    } catch (error) {
        console.error('Error fetching cat fact:', error);
        catFactDiv.innerText = 'Failed to fetch cat fact.';
    } finally {
        // Restore button text and remove loading styles
        catFactButton.classList.remove('loading');
        catFactButton.innerHTML = 'Get Random Cat Fact';
    }
});

// data = (
//     "name"; "Apple MacBook Pro 16",
//     "data"; {
//         "year"; 2019,
//         "price"; 1849.99,
//         "CPU model"; "Intel Core i5",
//         "Hard disk size"; "1 TB"
//     }
// )

// fetch("https://api.restful-api.dev/objectS", {
//     method:"POST",
//     body:JSON.stringify(data),
//     headers: {
//         "Content-trype": "application/Json"
//     }
// }).then(response => response.json().then(resonse=>console.log(response)))
