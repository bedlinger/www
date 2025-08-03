export const prerender = false;
import { getUserStarred } from "../../../services/githubService";

export async function GET() {
	const { data, status, error } = await getUserStarred();

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
