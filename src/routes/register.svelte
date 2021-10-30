<script>
    import { apiAddr } from '../helpers';

    let jwt;

    try {
        jwt = localStorage.jwt
    } catch (e) {
        console.log('Ignoring ' + e);
    }

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
        try {
            localStorage.jwt = resJson.jwt;
        } catch (e) {
            console.log('Ignoring ' + e);
        }
    };
</script>

<h2 class="text-3xl">Register</h2>
{#if jwt}
<p>You are already logged in...</p>
{:else}
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
{/if}
