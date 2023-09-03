import { RouterProvider, createHashRouter } from "react-router-dom";

export const router = createHashRouter([
	{
		path: "/",
		element: <>hello</>,
	},
]);

export const CustomRouter = (): JSX.Element => {
	return <RouterProvider router={router} />
}