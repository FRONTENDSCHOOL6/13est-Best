import { createBrowserRouter } from "react-router-dom";
import { pb } from "@/api/pocketbase";
import RootLayout from "@l/RootLayout";
import NotFound from "@p/NotFound";
import Feed from "@p/Feed";
import ReviewWrite from "@p/ReviewWrite";
import Region from "@p/Region";
import ReviewList from "@p/ReviewList";
import Reservation from "./pages/Reservation";
import UpdateUserData from "@p/UpdateUserData";
import Login from "@p/Login";
import Register from "@p/Register";
import ReservationWrite from "@p/ReservationWrite";
import Place from "./pages/Place";
import UserReview from "./pages/UserReview";
import UserReviewList from "./pages/UserReviewList";

let isValidUser = pb.authStore.isValid;

const routerConfig = isValidUser
  ? [
      {
        path: "/",
        element: <RootLayout />,
        errorElement: <NotFound />,
        children: [
          { index: true, element: <Feed /> },
          { path: "feed", element: <Feed /> },
          { path: "review", element: <ReviewList /> },
          { path: "reservation", element: <ReservationWrite /> },
          { path: "favorite", element: <Region /> },
          { path: "reviewwrite", element: <ReviewWrite /> },
          { path: "updateUserData", element: <UpdateUserData /> },
          { path: "place/:placeId/:recordId", element: <Place /> },
        ],
      },
      { path: "userReview/:userId", element: <UserReview /> },
      { path: "userReviewList/:userId", element: <UserReviewList /> },
    ]
  : [
      {
        path: "/",
        children: [
          { index: true, element: <Login /> },
          { path: "login", element: <Login /> },
          { path: "register", element: <Register /> },
        ],
      },
    ];

    
const router = createBrowserRouter(routerConfig);
export default router;
