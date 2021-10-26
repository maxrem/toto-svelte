<script context="module">
    /**
     * @type {import('@sveltejs/kit').Load}
    */
   export async function load({page: { params }, fetch, session, stuff}) {
        const { matchId } = params;

       const url = `http://localhost:1337/matches/` + matchId;
       const res = await fetch(url);

       if (res.ok) {
           return {
               props: {
                   match: await res.json()
               }
           }
       };

       return {
           status: res.status,
           error: new Error(`Could not load ${url}`)
       }
   }
</script>

<script>
    export let match;
</script>

<h2>Match</h2>
<p>{match.start_datetime}</p>
<p>{match.home_team.name} - {match.away_team.name}</p>
