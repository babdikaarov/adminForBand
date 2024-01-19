import { CreateParams, CreateResult } from 'react-admin';

export const create = async (url: string, resource: string, params: CreateParams) : Promise<CreateResult> => {
		const { data } = params;
		// console.log(params);
		try {
			const token = JSON.parse(localStorage.user).token;
			const jsonData = JSON.stringify(data);
			const encoder = new TextEncoder();
			const contentLength = encoder.encode(jsonData).length;

			const headers = {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
				'Content-Length': contentLength.toString(),
			};

			const parameters = {
				method: 'POST',
				headers,
				body: jsonData,
			};

			const response = await fetch(`${url}/${resource}`, parameters);

			const responseData = await response.json();
			//   console.log(responseData);

			return {
				data: responseData,
			};
		} catch (error) {
			console.error('Error in create:', error);
			return Promise.reject(error);
		}
};

// const options = { data: { title: "create" } };

// create("http://209.38.228.54:8080/api", "why_us_band", options)()
//   .then((result) => {
//     console.log("Data:", result);
//     // console.log("Total:", result.total);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
