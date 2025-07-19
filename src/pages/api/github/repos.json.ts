export const prerender = false;
import octokit from "../../../services/octokitService";
import { RequestError, type Repos } from "../../../types";

export async function GET() {
	try {
		const response = await octokit.request("GET /user/repos", {
			visibility: "all",
			sort: "updated",
		});
		const repos: Repos = response.data;

		return new Response(JSON.stringify(repos), {
			status: 200,
			headers: {
				"Content-Type": "application/json",
			},
		});
	} catch (error) {
		if (error instanceof RequestError) {
			return new Response(JSON.stringify({ message: error.message }), {
				status: error.status,
				headers: {
					"Content-Type": "application/json",
				},
			});
		}

		return new Response(JSON.stringify({ message: "Internal Server Error" }), {
			status: 500,
			headers: {
				"Content-Type": "application/json",
			},
		});
	}
}
