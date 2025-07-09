// import { useNavigate, createSearchParams } from "react-router-dom";
// import { useAuth } from "@/contexts/AuthContext";

// export default function useAuthNavigation() {
//   const navigate = useNavigate();
//   const { isLoggedIn } = useAuth();

//   const goToPathWithAuth = (targetPath: string) => {
//     if (isLoggedIn) {
//       navigate(targetPath);
//     } else {
//       navigate({
//         pathname: "/login",
//         search: createSearchParams({
//           redirect: targetPath,
//         }).toString(),
//       });
//     }
//   };

//   return { goToPathWithAuth };
// }
