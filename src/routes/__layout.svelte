<script>
	import '../styles/tailwind-output.css';
</script>

<div class="p-6">
<h2 class="text-5xl">Toto</h2>

<nav class="flex flex-row justify-start">
	<a href="/" class="bg-blue-700 hover:bg-blue-900 text-gray-200 font-bold my-2 px-5 py-2 rounded border-2 border-blue-500">Home</a>
	<a href="/matches" class="bg-blue-700 hover:bg-blue-900 text-gray-200 font-bold my-2 ml-4 px-5 py-2 rounded border-2 border-blue-500">Matches</a>
</nav>

<slot></slot>
</div>