<script context="module">
    import { apiAddr } from '../../helpers';

    /**
     * @type {import('@sveltejs/kit').Load}
     */
    export async function load({ page: { params }, fetch, session, stuff }) {
        const { matchId } = params;

        const url = apiAddr + `/matches/` + matchId;
        const res = await fetch(url);

        if (res.ok) {
            return {
                props: {
                    match: await res.json()
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
    import { Datetime } from '../../helpers';
    export let match;
</script>

<h2 class="text-3xl">{match.home_team.name} - {match.away_team.name}</h2>
<p>{Datetime.format(match.start_datetime)}</p>
