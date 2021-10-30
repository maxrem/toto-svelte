<script>
    import { apiAddr } from '../helpers';

    // TODO remove debug default values
    let randomId = Math.floor(Math.random() * 1000000000);
    let username = 'john-doe' + randomId;
    let email = 'johndoe' + randomId + '@test.com';
    let password = 'Welkom01';

    const submitForm = async () => {
        const res = await fetch(apiAddr + `/auth/local/register`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                username,
                email,
                password
            })
        });

        const resJson = await res.json();
        console.log(resJson.jwt); // TODO do something with result
    };
</script>

<h2 class="text-3xl">Register</h2>
<form on:submit|preventDefault={submitForm}>
    <div>
        <label for="username">Username</label>
        <input type="username" name="username" bind:value={username}
            class="border-2 border-gray-500 rounded"
        />
    </div>
    <div>
        <label for="email">E-mail</label>
        <input type="email" name="email" bind:value={email}
            class="border-2 border-gray-500 rounded" />
    </div>
    <div>
        <label for="password">Password</label>
        <input type="password" name="password" bind:value={password}
            class="border-2 border-gray-500 rounded"
        />
    </div>
    <div>
        <input
            type="submit" name="submit" value="Submit"
            class="border-2 bg-gray-700 text-gray-50 border-gray-500 rounded px-2 py-1"
        />
    </div>
</form>
