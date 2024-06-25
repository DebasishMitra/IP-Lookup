async function lookupIP() {
    const ip = document.getElementById('ipInput').value;
    const resultDiv = document.getElementById('result');

    if (!ip) {
        resultDiv.innerHTML = 'Please enter an IP address.';
        return;
    }

    try {
        const response = await fetch(`https://ipapi.co/${ip}/json/`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        if (data.error) {
            resultDiv.innerHTML = `Error: ${data.reason}`;
        } else {
            resultDiv.innerHTML = `
                <p><strong>IP:</strong> ${data.ip}</p>
                <p><strong>City:</strong> ${data.city}</p>
                <p><strong>Region:</strong> ${data.region}</p>
                <p><strong>Country:</strong> ${data.country_name}</p>
                <p><strong>Latitude:</strong> ${data.latitude}</p>
                <p><strong>Longitude:</strong> ${data.longitude}</p>
            `;
        }
    } catch (error) {
        resultDiv.innerHTML = `Fetch error: ${error.message}`;
    }
}
