// Function to generate the Mad Lib story
function generateStory() {
    // Get values from inputs
    const name = document.getElementById('name').value.trim();
    const place = document.getElementById('place').value.trim();
    const adjective = document.getElementById('adjective').value.trim();
    const noun = document.getElementById('noun').value.trim();
    const verb = document.getElementById('verb').value.trim();

    // Input validation
    if (!name || !place || !adjective || !noun || !verb) {
        document.getElementById('story').innerHTML = "<strong>Please fill in all fields!</strong>";
        return;
    }

    //story
    const story = `One day, ${name} went to ${place}. 
    It was a very ${adjective} day. 
    Suddenly, they saw a ${noun} and ${verb} with excitement!`;

    //Display the story
    document.getElementById('story').innerText = story;
}