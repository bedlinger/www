// INFO: prerender is enabled here so this is done once a build time
import { getUserLanguages } from "../../../services/githubService";

export async function GET() {
	const { data, status, error } = await getUserLanguages();

	if (error) {
		return new Response(JSON.stringify({ message: error }), {
			status,
			headers: { "Content-Type": "application/json" },
		});
	}

	return new Response(JSON.stringify(data), {
		status,
		headers: { "Content-Type": "application/json" },
	});
}
