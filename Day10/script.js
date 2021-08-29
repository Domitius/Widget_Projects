const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
    const configuration = {
        headers: {
            'Accept': 'application/json'
        }
    };
    const response = await fetch('https://icanhazdadjoke.com/', configuration).catch((error) => console.log(error));
    const { joke } = await response.json();
    jokeEl.innerText = joke;
}