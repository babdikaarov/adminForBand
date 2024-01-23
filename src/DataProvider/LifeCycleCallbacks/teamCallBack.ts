import { ResourceCallbacks } from "react-admin";

export const teamLifecycleCallbacks: ResourceCallbacks = {
   resource: "team_band",
   beforeCreate: async (params) => {
      const { data } = params;
      // console.log(data);
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("video", data.video.rawFile);
      formData.append("image", data.image.rawFile);

      return { data: formData };
   },
};
