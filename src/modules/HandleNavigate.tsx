import { useNavigate } from "react-router-dom";


const HandleNavigate = (text: string) => {
   const navigate = useNavigate();

    // FIX_ME wardprope behavior on tablet size

    return (
       <div onClick={() => navigate(`/${text}`)}>
          {text
             .split("_")
             .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
             .join(" ")}
       </div>
    );
 };

 export default HandleNavigate