import { GetOneParams, GetOneResult } from "react-admin";

export const getOne = async (url: string, resource: string, params: GetOneParams): Promise<GetOneResult> => {
    const id = params?.id;
    // console.log(resource);

    try {
        const token = JSON.parse(localStorage.user).token;
        const headers = new Headers();
        headers.set("Authorization", `Bearer ${token}`);
        let response;
        switch (resource) {
            case "contacts":
            case "about_us_studio":
            case "about_us_band":
            case "hero_band":
            case "hero_studio":
                response = await fetch(`${url}/${resource}`);
                break;
            case "auth":
                response = await fetch(`${url}/${resource}/getAllUsers`, { headers });
                break;
            default:
                response = await fetch(`${url}/${resource}/${id}`);
                break;
        }

        const data = await response.json();
        // console.log(data);

        if (resource === "auth") {
            const dataFiltered = data ? data.filter((el: { id: number }) => el.id == id)[0] : {};
            return { data: dataFiltered };
        } else {
            return {
                data,
            };
        }
        // return data;
    } catch (error) {
        console.error("Error in getOne:", error);
        return Promise.reject(error);
    }
};

// getOne("http://209.38.228.54:8080/api", "event_studio_images", { id: 1 })()
//   .then((result) => {
//     console.log("Data:", result);
//     // console.log("Total:", result.total);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

/* 
GET: /auth              getAll
GET: /auth/:id          getOne
PATCH: /auth/:id        path как у других
POST: /auth             create new USER


*/
