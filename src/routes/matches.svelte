<script context="module">
    /**
     * @type {import('@sveltejs/kit').Load}
     */
    export async function load({ page, fetch, session, stuff }) {
        const url = apiAddr + `/matches?_sort=start_datetime:ASC`;
        const res = await fetch(url);

        if (res.ok) {
            return {
                props: {
                    matches: await res.json()
                }
            };
        }

        return {
            status: res.status,
            error: new Error(`Could not load ${url}`)
        };
    }
</script>

<script>
    import { apiAddr, Datetime } from '../helpers';
    export let matches;
</script>

<h2 class="text-3xl">Matches</h2>
<ul>
    {#each matches as match}
        <li>
            <a href="/match/{match.id}">{Datetime.format(match.start_datetime)} {match.home_team.name} - {match.away_team.name}</a>
        </li>
    {/each}
</ul>
